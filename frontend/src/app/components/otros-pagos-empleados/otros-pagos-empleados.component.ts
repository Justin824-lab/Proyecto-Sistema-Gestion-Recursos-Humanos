import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';

// Interface para OtrosPagosEmpleados
interface OtrosPagosEmpleados {
  CI: number | null;
  IdPagos: number | null;
  Estado: string;
}

// Interfaces para las listas de dropdowns
interface Empleado {
  CI: number;
  Nombre: string;
  Apellido: string;
}

interface OtroPago {
  IdPagos: number;
  Descripcion: string;
}

@Component({
  selector: 'app-otrospagosempleados',
  templateUrl: './otros-pagos-empleados.component.html',
  styleUrls: ['./otros-pagos-empleados.component.css']
})
export class OtrosPagosEmpleadosComponent implements OnInit {
  filterPost = '';
  name = 'OtrosPagos.xlsx';

  TUser: any[] = [];
  user: OtrosPagosEmpleados = {
    CI: null,
    IdPagos: null,
    Estado: ''
  };

  Empleadoslist: Empleado[] = [];
  OtrosPagosList: OtroPago[] = [];

  constructor(private Data: DataService) {}

  ngOnInit(): void {
    this.loadOtrosPagosEmpleados();
    this.getDropListEmpleados();
    this.getDropListOtrosPagos();
  }

  loadOtrosPagosEmpleados() {
    this.Data.getAll('/OtrosPagosEmpleados').subscribe({
      next: (res) => {
        this.TUser = res;
        console.log('Datos de TUser después de cargar:', this.TUser);
      },
      error: (err) => {
        console.error('Error al cargar OtrosPagosEmpleados:', err);
        alert('No se pudieron cargar los datos.');
      }
    });
  }

  getDropListEmpleados() {
    this.Data.getDropListEmpleados().subscribe({
      next: (data: Empleado[]) => {
        this.Empleadoslist = data;
        console.log('Lista de empleados:', this.Empleadoslist);
      },
      error: (err) => console.error('Error al cargar empleados:', err)
    });
  }

  getDropListOtrosPagos() {
    this.Data.getDropListOtrosPagos().subscribe({
      next: (data: OtroPago[]) => {
        this.OtrosPagosList = data;
        console.log('Lista de otros pagos:', this.OtrosPagosList);
      },
      error: (err) => console.error('Error al cargar OtrosPagos:', err)
    });
  }

  AgregarValor() {
    console.log('Datos enviados:', this.user);
    this.Data.save(this.user, '/OtrosPagosEmpleados').subscribe({
      next: (res) => {
        console.log('Respuesta del backend:', res);
        this.loadOtrosPagosEmpleados();
        alert('Registro Almacenado');
        this.resetForm();
      },
      error: (err) => {
        console.error('Error al guardar:', err);
        alert('Error al almacenar el registro');
      }
    });
  }

  EliminarData(CI: number, IdPagos: number) {
    if (confirm('¿Seguro que desea eliminar este pago?')) {
      const id = `${CI}/${IdPagos}`; // Asegura que se combine correctamente
      console.log('Enviando DELETE con ID:', id); // Depuración
      this.Data.delete(id, '/OtrosPagosEmpleados').subscribe({
        next: (res) => {
          this.loadOtrosPagosEmpleados();
          alert('Registro Eliminado');
        },
        error: (err) => {
          console.error('Error al eliminar:', err);
          alert('Error al eliminar el registro');
        }
      });
    }
  }

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
      PDF.save('OtrosPagosEmpleados.pdf');
    });
  }

  private resetForm() {
    this.user = {
      CI: null,
      IdPagos: null,
      Estado: ''
    };
  }
}