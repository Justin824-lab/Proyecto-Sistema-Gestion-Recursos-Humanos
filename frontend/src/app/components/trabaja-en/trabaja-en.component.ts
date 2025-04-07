import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TrabajaEn } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-trabajaen',
  templateUrl: './trabaja-en.component.html',
  styleUrls: ['./trabaja-en.component.css']
})
export class TrabajaEnComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';
  name = 'Trabajaen.xlsx';

  TUser: any[] = [];
  user: TrabajaEn = {
    CI: null,
    IdDpto: null,
    FechaAlta: null,
    Estado: 'Activo'
  };

  Empleadoslist: any[] = [];
  Departamentolist: any[] = [];

  constructor(private Data: DataService) {}

  ngOnInit(): void {
    this.loadTrabajaEn();
    this.getDropListEmpleados();
    this.getDropListDepartamento();
  }

  // Cargar los datos de TrabajaEn
  loadTrabajaEn() {
    this.Data.getAll('/TrabajaEn').subscribe({
      next: (res) => {
        this.TUser = res;
        console.log('TrabajaEn cargados:', this.TUser); // Depuración
      },
      error: (err) => {
        console.error('Error al cargar TrabajaEn:', err);
        alert('No se pudieron cargar los datos.');
      }
    });
  }

  // Cargar listas para los dropdowns
  getDropListEmpleados() {
    this.Data.getDropListEmpleados().subscribe({
      next: (data) => {
        this.Empleadoslist = data;
      },
      error: (err) => console.error('Error al cargar empleados:', err)
    });
  }

  getDropListDepartamento() {
    this.Data.getDropListDepartamento().subscribe({
      next: (data) => {
        this.Departamentolist = data;
      },
      error: (err) => console.error('Error al cargar departamentos:', err)
    });
  }

  // Guardar un nuevo registro
  AgregarValor() {
    this.Data.save(this.user, '/TrabajaEn').subscribe({
      next: (res) => {
        this.loadTrabajaEn(); // Recargar la lista
        this.resetForm(); // Limpiar el formulario
      },
      error: (err) => console.error('Error al guardar:', err)
    });
  }

  // Eliminar un registro (usando CI e IdDpto)
  EliminarData(CI: number, IdDpto: number) {
    if (confirm('¿Seguro que desea eliminar esta asignación?')) {
      this.Data.delete(`${CI}/${IdDpto}`, '/TrabajaEn').subscribe({
        next: (res) => {
          this.loadTrabajaEn(); // Recargar la lista
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
      PDF.save('Trabajaen.pdf');
    });
  }

  // Limpiar el formulario después de guardar
  private resetForm() {
    this.user = {
      CI: null,
      IdDpto: null,
      FechaAlta: null,
      Estado: 'Activo'
    };
  }
}
