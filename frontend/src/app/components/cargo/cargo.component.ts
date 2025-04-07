import { Component, OnInit } from '@angular/core';
import {  Cargo } from 'src/app/Interfaces/user';
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
      PDF.save('Cargo.pdf');
    });
  }


  TUser: any = [];
  user: Cargo = {
      IdCargo: null,
      IdNoResolucion: null,
      IdGrupoEscala: null,
      IdCatOcupacional: null,
      Estado: 'Activo'
  };
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.Data.getAll('/Cargo')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }
  AgregarValor(){
    delete this.user.IdCargo;   
    this.Data.save(this.user,'/Cargo')
       .subscribe(
         res => {

this.getUser();
         },
         err => console.error(err)
       );
}
  EliminarData(id: number){
    this.Data.delete(id, '/Cargo')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

}


