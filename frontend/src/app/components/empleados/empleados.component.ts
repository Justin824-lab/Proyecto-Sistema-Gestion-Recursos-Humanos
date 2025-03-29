import { Component, OnInit  } from '@angular/core';
import {  Empleados } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';




@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit  {
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
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
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
