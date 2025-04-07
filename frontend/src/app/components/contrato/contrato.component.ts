import { Component, OnInit } from '@angular/core';
import { Contrato } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';
import { ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';

  name = 'Contrato.xlsx';


  exportToExcel(): void {
    let element = document.getElementById('tabla');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
    XLSX.writeFile(book, this.name);
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('tabla');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Contrato.pdf');
    });
  }



  TUser: any = [];
  user: Contrato = {
    IdContrato: null,
    TipoContrato: null,
    Duracion: null,
    Estado: ''
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/Contrato')
      .subscribe(res => {
        this.TUser = res;
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.IdContrato; // Elimina IdContrato para evitar enviarlo
    this.Data.save(this.user, '/Contrato').subscribe(
      res => {
        console.log('Contrato agregado:', res);
        this.getUser(); // Recarga la lista de contratos
        // Limpia los campos del formulario
        this.user.TipoContrato= '';
        this.user.Duracion= null;
        this.user.Estado= '' ;
      },
      err => {
        console.error('Error al agregar:', err);
        alert('Hubo un error al agregar el contrato');
      }
    );
  }


  EliminarData(id: number) {
    this.Data.delete(id, '/Contrato')
      .subscribe(
        res => { this.getUser(); },
        err => console.error(err)
      );
  }
}

