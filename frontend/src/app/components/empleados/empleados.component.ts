import { Component, OnInit  } from '@angular/core';
import {  Empleados } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';
import { ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';




@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit  {
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';
  name = 'empleados.xlsx';
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
      PDF.save('empresas.pdf');
    });
  }

  TUser: any = [];
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
  }
  EtniaList: any;
EstadoCivilList: any;
ColorPeloList: any;
UbicacionList: any;
ContratoList: any;
CargoList: any;
EstadoList: any;

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
    this.getDropListEtnia();
this.getDropListEstadoCivil();
this.getDropListColorPelo();
this.getDropListUbicacion();
this.getDropListContrato();
this.getDropListCargo();
this.getDropListEstado();
  }
  
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
  getUser() {
    this.Data.getAll('/empleados')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }

  AgregarValor(){
    
    delete this.user.CI;
    this.Data.save(this.user,'/empleados')
       .subscribe(
         res => {

this.getUser();
         },
         err => console.error(err)
       );
}
  EliminarData(id: number){
    this.Data.delete(id, '/empleados')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
  



}
