import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Empleados } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';
  name = 'empleados.xlsx';

  TUser: any[] = [];
  user: Empleados = {
    CI: null,
    Nombre: null,
    Apellido: null,
    IdEtnia: null,
    IdCivil: null,
    IdColorPelo: null,
    IdUbicacion: null,
    IdContrato: null,
    IdCargo: null,
    IdEstado: null,
    Estado: 'Activo'
  };

  EtniaList: any[] = [];
  EstadoCivilList: any[] = [];
  ColorPeloList: any[] = [];
  UbicacionList: any[] = [];
  ContratoList: any[] = [];
  CargoList: any[] = [];
  EstadoList: any[] = [];

  constructor(private Data: DataService) {}

  ngOnInit(): void {
    this.loadEmpleados();
    this.getDropListEtnia();
    this.getDropListEstadoCivil();
    this.getDropListColorPelo();
    this.getDropListUbicacion();
    this.getDropListContrato();
    this.getDropListCargo();
    this.getDropListEstado();
  }

  // Cargar los datos de empleados
  loadEmpleados() {
    this.Data.getAll('/empleados').subscribe({
      next: (res) => {
        this.TUser = res;
        console.log('Empleados cargados:', this.TUser); // Depuración
      },
      error: (err) => {
        console.error('Error al cargar empleados:', err);
        alert('No se pudieron cargar los datos.');
      }
    });
  }

  // Métodos para cargar listas de dropdowns
  getDropListEtnia() {
    this.Data.getDropListEtnia().subscribe((data: any) => {
      this.EtniaList = data;
    });
  }

  getDropListEstadoCivil() {
    this.Data.getDropListEstadoCivil().subscribe((data: any) => {
      this.EstadoCivilList = data;
    });
  }

  getDropListColorPelo() {
    this.Data.getDropListColorPelo().subscribe((data: any) => {
      this.ColorPeloList = data;
    });
  }

  getDropListUbicacion() {
    this.Data.getDropListUbicacion().subscribe((data: any) => {
      this.UbicacionList = data;
    });
  }

  getDropListContrato() {
    this.Data.getDropListContrato().subscribe((data: any) => {
      this.ContratoList = data;
    });
  }

  getDropListCargo() {
    this.Data.getDropListCargo().subscribe((data: any) => {
      this.CargoList = data;
    });
  }

  getDropListEstado() {
    this.Data.getDropListEstado().subscribe((data: any) => {
      this.EstadoList = data;
    });
  }

  // Guardar un nuevo empleado
  AgregarValor() {
    delete this.user.CI; // Eliminar CI para que el backend lo genere
    this.Data.save(this.user, '/empleados').subscribe({
      next: (res) => {
        this.loadEmpleados(); // Recargar la lista
        this.resetForm(); // Limpiar el formulario
      },
      error: (err) => console.error('Error al guardar:', err)
    });
  }

  // Eliminar un empleado
  EliminarData(id: number) {
    if (confirm('¿Seguro que desea eliminar este empleado?')) {
      this.Data.delete(id, '/empleados').subscribe({
        next: (res) => {
          this.loadEmpleados(); // Recargar la lista
        },
        error: (err) => console.error('Error al eliminar:', err)
      });
    }
  }

  // Exportar a Excel
  exportToExcel(): void {
    let element = document.getElementById('tabla');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
    XLSX.writeFile(book, this.name);
  }

  // Exportar a PDF
  public openPDF(): void {
    let DATA: any = document.getElementById('tabla');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('empleados.pdf'); // Corregí 'empresas.pdf' a 'empleados.pdf'
    });
  }

  // Limpiar el formulario después de guardar
  private resetForm() {
    this.user = {
      CI: null,
      Nombre: null,
      Apellido: null,
      IdEtnia: null,
      IdCivil: null,
      IdColorPelo: null,
      IdUbicacion: null,
      IdContrato: null,
      IdCargo: null,
      IdEstado: null,
      Estado: 'Activo'
    };
  }
}
