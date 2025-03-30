import { Component, OnInit } from '@angular/core';
import { GrupoEscala } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-grupoescala',
  templateUrl: './grupoescala.component.html',
  styleUrls: ['./grupoescala.component.css']
})
export class GrupoEscalaComponent implements OnInit {

  TUser: any = [];
  user: GrupoEscala = {
     idGrupoEscala: null,
     escala: '',
      estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/GrupoEscala')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idGrupoEscala;
    this.Data.save(this.user, '/GrupoEscala')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/GrupoEscala')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}

