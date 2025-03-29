import { Component,OnInit  } from '@angular/core';
import { Empleados } from '../../Interfaces/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-empleados-edit',
  templateUrl: './empleados-edit.component.html',
  styleUrls: ['./empleados-edit.component.css']
})
export class EmpleadosEditComponent implements OnInit   {
  valorInput: number | undefined;

  TUser: any = [];
  user: Empleados = {
    CI: null, 
    Nombre: null,
    Apellido: null,
    IdEtnia: null,
    IdCivil: null,
    IdColorPelo: null,
    IdUbicacion: null,
    IdContrato: null,
    IdCargo: null,
    IdEstado: null,
    estado: 'Activo'
  }
  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }
    ngOnInit(): void {
      const params = this.activatedRoute.snapshot.params;
  
      if (params['id']) {
        this.Data.getOne(params['id'],'/empleados')
          .subscribe(
            res => {
              this.user = res;
                                  },
            err => console.log(err)
          );
      }
      }
      updateUser() {
        this.Data.update(this.user.CI!, this.user,'/empleados')
          .subscribe(
            res => {
              this.router.navigate(['/empleados']);
            },
            err => console.error(err)
          );
      }  
    }
  
    
  


