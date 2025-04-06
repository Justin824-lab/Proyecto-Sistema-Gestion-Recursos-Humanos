import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  TUser: any = [];
  user: Estado = {
      IdEstado: null,
      NombreEstado: '',
      Estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/Estado')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.IdEstado;
    this.Data.save(this.user, '/Estado')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/Estado')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}

