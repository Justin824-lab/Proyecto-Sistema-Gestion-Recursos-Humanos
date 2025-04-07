import { Component, OnInit } from '@angular/core';
import { OtrosPagosEmpleados } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-otrospagosempleados',
  templateUrl: './otros-pagos-empleados.component.html',
  styleUrls: ['./otros-pagos-empleados.component.css']
})
export class OtrosPagosEmpleadosComponent implements OnInit {
  public openPDF(): void {
    let DATA: any = document.getElementById('tabla');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('OtrospagosEmpleados.pdf');
    });
  }

  name = 'OtrosPagos.xlsx';

  


exportToExcel(): void {
    let element = document.getElementById('tabla');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
    XLSX.writeFile(book, this.name);
  }


  TUser: any = [];
  user: OtrosPagosEmpleados = {
      CI: null,
      IdPagos: null,
      Estado: ''
  };

  OtrosPagosList: any;
  Empleadoslist: any;
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
    this.getDropListEmpleados();
    this.getDropListOtrosPagos();
  }
  
  getDropListOtrosPagos() {
    this.Data.getDropListOtrosPagos().subscribe(
      (data) => {
        console.log('Datos recibidos de OtrosPagos:', data);
        this.OtrosPagosList = data;
        console.log('OtrosPagosList actualizado:', this.OtrosPagosList);
      },
      (error) => {
        console.error('Error al obtener OtrosPagos:', error);
      }
    );
  }

  getDropListEmpleados() {
    this.Data.getDropListEmpleados().subscribe((data:any)=>{
      this.Empleadoslist=data;
    })
  }

  getUser() {
    this.Data.getAll('/OtrosPagosEmpleados')
      .subscribe(
        res => {
          this.TUser = res;
          console.log('Datos de TUser después de getUser:', this.TUser);
        },
        err => console.error(err)
      );
  }

  AgregarValor() {
    console.log('Datos enviados:', this.user);
    //delete this.user.IdPagos; // Asegúrate de que esto sea necesario según tu backend
    this.Data.save(this.user, '/OtrosPagosEmpleados')
      .subscribe(
        res => {
          console.log('Respuesta del backend:', res);
          this.getUser();
          alert('Registro Almacenado'); // Mueve el alert aquí
          this.user = { CI: null, IdPagos: null, Estado: '' };
        },
        err => {
          console.error('Error del backend:', err);
          alert('Error al almacenar el registro');
        }
      );
  }

  EliminarData(CI: number,) {
    this.Data.delete(CI.toString(), '/OtrosPagosEmpleados')
      .subscribe(
        res => {
          this.getUser();
        },
        err => {
          console.error('Error al eliminar:', err);
        alert('Error al eliminar el registro');
      }
        
      );
  }
}

