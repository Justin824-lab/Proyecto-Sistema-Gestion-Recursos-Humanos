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
      CI: null,
      IdPagos: null,
      Estado: 'Activo'
  };
  OtrosPagosList: any;
  Empleadoslist: any;
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
    this.getDropListEmpleados();
  }
  
  getDropListOtrosPagos() {
    this.Data.getDropListOtrosPagos().subscribe(
      (data) => {
        console.log('Datos recibidos de OtrosPagos:', data);
        this.OtrosPagosList = data;
        console.log('OtrosPagosList actualizado:', this.OtrosPagosList);
      },
      (error) => {
        console.error('Error al obtener OtrosPagos:', error);
      }
    );
  }

  getDropListEmpleados() {
    this.Data.getDropListEmpleados().subscribe((data:any)=>{
      this.Empleadoslist=data;
    })
  }

  getUser() {
    this.Data.getAll('/OtrosPagosEmpleados')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.IdPagos;
    this.Data.save(this.user, '/OtrosPagosEmpleados')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

  EliminarData(CI: number, IdPagos: number) {
    this.Data.delete(CI/IdPagos, '/OtrosPagosEmpleados')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}

