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
      estado: 'Activo'
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


