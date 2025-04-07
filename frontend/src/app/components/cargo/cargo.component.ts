import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {
  name = 'Cargo.xlsx';

  // Lista de cargos para la tabla
  TUser: any[] = [];

  // Objeto para el formulario
  user: Cargo = {
    IdCargo: null,
    IdNoResolucion: null,
    IdGrupoEscala: null,
    IdCatOcupacional: null,
    Estado: 'Activo'
  };

  // Listas para los selectores
  NoResolucionList: any[] = [];
  GrupoEscalaList: any[] = [];
  CatOcupacionalList: any[] = [];

  constructor(private Data: DataService) {}

  ngOnInit(): void {
    this.getDropListNoResolucion();
    this.getDropListGrupoEscala();
    this.getDropListCatOcupacional();
    this.loadCargos(); // Cargar los cargos al iniciar
  }

  // Método para cargar los cargos
  loadCargos() {
    this.Data.getAll('/Cargo').subscribe({
      next: (res) => {
        this.TUser = res;
        console.log('Cargos cargados:', this.TUser); // Para depuración
      },
      error: (err) => {
        console.error('Error al cargar cargos:', err);
        alert('No se pudieron cargar los cargos.');
      }
    });
  }

  // Métodos para cargar los catálogos
  getDropListNoResolucion() {
    this.Data.getDropListNoResolucion().subscribe((data: any) => {
      this.NoResolucionList = data;
    });
  }

  getDropListGrupoEscala() {
    this.Data.getDropListGrupoEscala().subscribe((data: any) => {
      this.GrupoEscalaList = data;
    });
  }

  getDropListCatOcupacional() {
    this.Data.getDropListCatOcupacional().subscribe((data: any) => {
      this.CatOcupacionalList = data;
    });
  }

  // Guardar un nuevo cargo
  AgregarValor() {
    delete this.user.IdCargo; // Eliminar IdCargo para inserción
    this.Data.save(this.user, '/Cargo').subscribe({
      next: (res) => {
        this.loadCargos(); // Recargar la lista
        this.resetForm(); // Limpiar el formulario
      },
      error: (err) => console.error('Error al guardar:', err)
    });
  }

  // Eliminar un cargo
  EliminarData(id: number) {
    if (confirm('¿Seguro que desea eliminar este cargo?')) {
      this.Data.delete(id, '/Cargo').subscribe({
        next: (res) => {
          this.loadCargos(); // Recargar la lista
        },
        error: (err) => console.error('Error al eliminar:', err)
      });
    }
  }

  // Limpiar el formulario
  resetForm() {
    this.user = {
      IdCargo: null,
      IdNoResolucion: null,
      IdGrupoEscala: null,
      IdCatOcupacional: null,
      Estado: 'Activo'
    };
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
      PDF.save('Cargo.pdf');
    });
  }
}