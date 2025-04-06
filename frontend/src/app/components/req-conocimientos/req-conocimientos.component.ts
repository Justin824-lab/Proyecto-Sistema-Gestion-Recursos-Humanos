import { Component, OnInit } from '@angular/core';
import { ReqConocimientos } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-reqconocimientos',
  templateUrl: './req-conocimientos.component.html',
  styleUrls: ['./req-conocimientos.component.css']
})
export class ReqConocimientosComponent implements OnInit {

  TUser: any = [];
  user: ReqConocimientos = {
     IdReqConoc: null,
     Descripcion: '',
      Estado: 'Activo'
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
    delete this.user.IdReqConoc;
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
