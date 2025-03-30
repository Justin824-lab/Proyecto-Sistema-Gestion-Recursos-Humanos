import { Component, OnInit } from '@angular/core';
import { ReqConocimientos } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-reqconocimientos',
  templateUrl: './reqconocimientos.component.html',
  styleUrls: ['./reqconocimientos.component.css']
})
export class ReqConocimientosComponent implements OnInit {

  TUser: any = [];
  user: ReqConocimientos = {
     idReqConoc: null,
     descripcion: '',
      estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/ReqConocimientos')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idReqConoc;
    this.Data.save(this.user, '/ReqConocimientos')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/ReqConocimientos')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}
