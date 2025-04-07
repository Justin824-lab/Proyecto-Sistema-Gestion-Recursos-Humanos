import { Component, OnInit } from '@angular/core';
import { TrabajaEn } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';
import { ViewChild, ElementRef } from '@angular/core';
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
      PDF.save('Trabajaen.pdf');
    });
  }



  TUser: any = [];
  user: TrabajaEn = {
      CI: null,
      IdDpto: null,
      FechaAlta: null,
      Estado: 'Activo'
  };

  Empleadoslist: any;
  Departamentolist: any;  
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
    this.getDropListEmpleados();
    this.getDropListDepartamento();
  }
  getDropListEmpleados() {
    this.Data.getDropListEmpleados().subscribe((data:any)=>{
      this.Empleadoslist=data;
    })
  }
  getDropListDepartamento() {
    this.Data.getDropListDepartamento().subscribe((data:any)=>{
      this.Departamentolist=data;
    })
  }

  getUser() {
    this.Data.getAll('/TrabajaEn')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    this.Data.save(this.user, '/TrabajaEn')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/TrabajaEn')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}

