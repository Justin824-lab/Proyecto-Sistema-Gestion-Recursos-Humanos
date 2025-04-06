import { Component, OnInit } from '@angular/core';
import { Ubicacion } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {

  TUser: any = [];
  user: Ubicacion = {
      IdUbicacion: null,
      Direccion: '',
      Estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/Ubicacion')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.IdUbicacion;
    this.Data.save(this.user, '/Ubicacion')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/Ubicacion')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}

