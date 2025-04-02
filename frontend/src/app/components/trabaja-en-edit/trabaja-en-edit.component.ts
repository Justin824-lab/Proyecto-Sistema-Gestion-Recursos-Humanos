import { Component, OnInit } from '@angular/core';
import { TrabajaEn } from '../../Interfaces/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-trabaja-en-edit',
  templateUrl: './trabaja-en-edit.component.html',
  styleUrls: ['./trabaja-en-edit.component.css']
})
export class TrabajaEnEditComponent implements OnInit {
  valorInput: number | undefined;
  TUser: any = [];
  user: TrabajaEn = {
      CI: null,
      IdDpto: null,
      FechaAlta: null,
      estado: 'Activo'
  };
  Empleadoslist: any;
  Departamentolist: any; 
  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/TrabajaEn')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    this.getDropListEmpleados();
    this.getDropListDepartamento();
    }
    getDropListEmpleados() {
      this.Data.getDropListEmpleados().subscribe((data:any)=>{
        this.Empleadoslist=data;
      })
    }
    getDropListDepartamento() {
      this.Data.getDropListDepartamento().subscribe((data:any)=>{
        this.Departamentolist=data;
      })
    }
    updateUser() {
      this.Data.update(this.user.CI!, this.user,'/TrabajaEn')
        .subscribe(
          res => {
            this.router.navigate(['/trabaja-en']);
          },
          err => console.error(err)
        );
    }  
  }


