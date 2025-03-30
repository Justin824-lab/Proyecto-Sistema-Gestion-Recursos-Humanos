import { Component, OnInit } from '@angular/core';
import { Contrato } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {

  TUser: any = [];
  user: Contrato = {
    idContrato: null,
    tipoContrato: null,
    duracion: null,
    estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/Contrato')
      .subscribe(res => {
        this.TUser = res;
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idContrato;
    this.Data.save(this.user, '/Contrato')
      .subscribe(
        res => { this.getUser(); },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/Contrato')
      .subscribe(
        res => { this.getUser(); },
        err => console.error(err)
      );
  }
}

