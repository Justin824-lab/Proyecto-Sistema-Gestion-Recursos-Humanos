// src/app/components/cargo-funciones/cargo-funciones.component.ts

import { Component, OnInit } from '@angular/core';
import { CargoFunciones } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-cargo-funciones',
  templateUrl: './cargo-funciones.component.html',
  styleUrls: ['./cargo-funciones.component.css']
})
export class CargoFuncionesComponent implements OnInit {

  TUser: any = [];
  user: CargoFunciones = {
    idCargo: null,
    idFTPrincipales: null,
    estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/CargoFunciones')
      .subscribe(res => {
        this.TUser = res;
      }, err => console.error(err));
  }

  AgregarValor() {
    // Asegúrate de eliminar el id cuando estés creando un nuevo registro
    delete this.user.idCargo; 
    this.Data.save(this.user, '/CargoFunciones')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/CargoFunciones')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}

