import { Component, OnInit } from '@angular/core';
import { OtrosPagosEmpleados } from '../../Interfaces/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-otrospagosempleados-edit',
  templateUrl: './otrospagosempleados-edit.component.html',
  styleUrls: ['./otrospagosempleados-edit.component.css']
})
export class OtrospagosempleadosEditComponent implements OnInit {
  TUser:any =[];
  user: OtrosPagosEmpleados = {
    CI: null,
    IdPagos: null,
    Estado: ''
};

OtrosPagosList: any;
Empleadoslist: any;

constructor(private Data: DataService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

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
ngOnInit(): void {
  const params = this.activatedRoute.snapshot.params;

  if (params['CI']) {
    this.Data.getOne(params['CI'],'/OtrosPagosEmpleados')
      .subscribe(
        res => {
          this.user = res;
                              },
        err => console.log(err)
      );
  }
  }
  updateUser() {
    this.Data.update(this.user.CI!, this.user,'/OtrosPagosEmpleados')
      .subscribe(
        res => {
          this.router.navigate(['/otros-pagos-empleados']);
        },
        err => console.error(err)
      );
  }  
}


