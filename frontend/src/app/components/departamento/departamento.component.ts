import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  TUser: any = [];
  user: Departamento = {
      idDpto: null,
      nombre: '',
      estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/Departamento')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idDpto;
    this.Data.save(this.user, '/Departamento')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/Departamento')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}

