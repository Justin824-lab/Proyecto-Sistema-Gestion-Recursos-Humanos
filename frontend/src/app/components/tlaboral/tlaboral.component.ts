// src/app/components/tlaboral/tlaboral.component.ts

import { Component, OnInit } from '@angular/core';
import { Tlaboral } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-tlaboral',
  templateUrl: './tlaboral.component.html',
  styleUrls: ['./tlaboral.component.css']
})
export class TlaboralComponent implements OnInit {

  TUser: any = [];
  user: Tlaboral = {
    CI: null,
    IdCargo: null,
    Estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/Tlaboral')
      .subscribe(res => {
        this.TUser = res;
      }, err => console.error(err));
  }

  AgregarValor() {
    // Asegúrate de eliminar el id cuando estés creando un nuevo registro
    delete this.user.CI;
    this.Data.save(this.user, '/Tlaboral')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/Tlaboral')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}

