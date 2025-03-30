import { Component, OnInit } from '@angular/core';
import { OtrosPagos } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-otros-pagos',
  templateUrl: './otros-pagos.component.html',
  styleUrls: ['./otros-pagos.component.css']
})
export class OtrosPagosComponent implements OnInit {

  TUser: any = [];
  user: OtrosPagos = {
    idPagos: null,
    monto: null,
    descripcion: null,
    estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/OtrosPagos')
      .subscribe(res => {
        this.TUser = res;
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idPagos;
    this.Data.save(this.user, '/OtrosPagos')
      .subscribe(
        res => { this.getUser(); },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/OtrosPagos')
      .subscribe(
        res => { this.getUser(); },
        err => console.error(err)
      );
  }
}

