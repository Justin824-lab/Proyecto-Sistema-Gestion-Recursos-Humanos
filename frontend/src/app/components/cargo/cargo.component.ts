import { Component, OnInit } from '@angular/core';
import {  Cargo } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';


@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  TUser: any = [];
  user: Cargo = {
      IdCargo: null,
      IdNoResolucion: null,
      IdGrupoEscala: null,
      IdCatOcupacional: null,
      Estado: 'Activo'
  };

  NoResolucionList: any;
GrupoEscalaList: any;
CatOcupacionalList: any;
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getDropListNoResolucion();
    this.getDropListGrupoEscala();
    this.getDropListCatOcupacional();
    this.getUser();
  }
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


