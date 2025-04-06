import { Component, OnInit } from '@angular/core';
import { CargoNivelUtilizacion } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-cargonivelutilizacion',
  templateUrl: './cargo-nivel-utilizacion.component.html',
  styleUrls: ['./cargo-nivel-utilizacion.component.css']
})
export class CargoNivelUtilizacionComponent implements OnInit {

  TUser: any = [];
  user: CargoNivelUtilizacion = {
      IdCargo: null,
      IdNivelUtilizacion: null,
      Estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/CargoNivelUtilizacion')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.IdNivelUtilizacion;
    this.Data.save(this.user, '/CargoNivelUtilizacion')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/CargoNivelUtilizacion')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}

