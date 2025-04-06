import { Component, OnInit } from '@angular/core';
import { CargoRequisitos } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-cargorequisitos',
  templateUrl: './cargo-requisitos.component.html',
  styleUrls: ['./cargo-requisitos.component.css']
})
export class CargoRequisitosComponent implements OnInit {

  TUser: any = [];
  user: CargoRequisitos = {
     IdCargo: null,
     IdReqConoc: null,
     Estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/CargoRequisitos')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.IdReqConoc;
    this.Data.save(this.user, '/CargoRequisitos')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/CargoRequisitos')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}

