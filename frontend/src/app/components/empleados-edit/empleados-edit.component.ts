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
    Estado: 'Activo'
  }
  EtniaList: any;
  EstadoCivilList: any;
  ColorPeloList: any;
  UbicacionList: any;
  ContratoList: any;
  CargoList: any;
  EstadoList: any;

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
          this.getDropListEtnia();
          this.getDropListEstadoCivil();
          this.getDropListColorPelo();
          this.getDropListUbicacion();
          this.getDropListContrato();
          this.getDropListCargo();
          this.getDropListEstado();
      }
      }
      getDropListEtnia() {
        this.Data.getDropListEtnia().subscribe((data: any) => {
          this.EtniaList = data;
        });
      }
      
      getDropListEstadoCivil() {
        this.Data.getDropListEstadoCivil().subscribe((data: any) => {
          this.EstadoCivilList = data;
        });
      }
      
      getDropListColorPelo() {
        this.Data.getDropListColorPelo().subscribe((data: any) => {
          this.ColorPeloList = data;
        });
      }
      
      getDropListUbicacion() {
        this.Data.getDropListUbicacion().subscribe((data: any) => {
          this.UbicacionList = data;
        });
      }
      
      getDropListContrato() {
        this.Data.getDropListContrato().subscribe((data: any) => {
          this.ContratoList = data;
        });
      }
      
      getDropListCargo() {
        this.Data.getDropListCargo().subscribe((data: any) => {
          this.CargoList = data;
        });
      }
      
      getDropListEstado() {
        this.Data.getDropListEstado().subscribe((data: any) => {
          this.EstadoList = data;
        });
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
  
    
  


