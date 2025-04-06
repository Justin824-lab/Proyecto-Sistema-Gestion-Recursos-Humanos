import { Component, OnInit } from '@angular/core';
import { NoResolucion } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-no-resolucion',
  templateUrl: './no-resolucion.component.html',
  styleUrls: ['./no-resolucion.component.css']
})
export class NoResolucionComponent implements OnInit {

  TUser: any = [];
  user: NoResolucion = {
    IdNoResolucion: null,
    Descripcion: null,
    Estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/NoResolucion')
      .subscribe(res => {
        this.TUser = res;
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.IdNoResolucion;
    this.Data.save(this.user, '/NoResolucion')
      .subscribe(
        res => { this.getUser(); },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/NoResolucion')
      .subscribe(
        res => { this.getUser(); },
        err => console.error(err)
      );
  }
}

