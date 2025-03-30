import { Component, OnInit } from '@angular/core';
import { NivelDeUtilizacion } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-nivel-de-utilizacion',
  templateUrl: './nivel-de-utilizacion.component.html',
  styleUrls: ['./nivel-de-utilizacion.component.css']
})
export class NivelDeUtilizacionComponent implements OnInit {

  TUser: any = [];
  user: NivelDeUtilizacion = {
    idNivelUtilizacion: null,
    descripcion: null,
    estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/NivelDeUtilizacion')
      .subscribe(res => {
        this.TUser = res;
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idNivelUtilizacion;
    this.Data.save(this.user, '/NivelDeUtilizacion')
      .subscribe(
        res => { this.getUser(); },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/NivelDeUtilizacion')
      .subscribe(
        res => { this.getUser(); },
        err => console.error(err)
      );
  }
}

