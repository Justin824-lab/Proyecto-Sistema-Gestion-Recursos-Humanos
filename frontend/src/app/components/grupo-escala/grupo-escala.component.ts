import { Component, OnInit } from '@angular/core';
import { GrupoEscala } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-grupoescala',
  templateUrl: './grupo-escala.component.html',
  styleUrls: ['./grupo-escala.component.css']
})
export class GrupoEscalaComponent implements OnInit {

  TUser: any = [];
  user: GrupoEscala = {
     IdGrupoEscala: null,
     Escala: '',
     Estado: 'Activo'
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
    delete this.user.IdGrupoEscala;
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

