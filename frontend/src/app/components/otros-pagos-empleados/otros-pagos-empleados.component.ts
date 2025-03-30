import { Component, OnInit } from '@angular/core';
import { OtrosPagosEmpleados } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-otrospagosempleados',
  templateUrl: './otros-pagos-empleados.component.html',
  styleUrls: ['./otros-pagos-empleados.component.css']
})
export class OtrosPagosEmpleadosComponent implements OnInit {

  TUser: any = [];
  user: OtrosPagosEmpleados = {
      ci: null,
      idPagos: null,
      estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/OtrosPagosEmpleados')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idPagos;
    this.Data.save(this.user, '/OtrosPagosEmpleados')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/OtrosPagosEmpleados')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}

