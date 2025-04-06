import { Component,OnInit } from '@angular/core';
import { Contrato } from '../../Interfaces/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contrato-edit',
  templateUrl: './contrato-edit.component.html',
  styleUrls: ['./contrato-edit.component.css']
})
export class ContratoEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: Contrato = {
    IdContrato:  null ,
    TipoContrato: null,
    Duracion: null,
    Estado: 'Activo'
  };
  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/Contrato')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    }
    updateUser() {
      this.Data.update(this.user.IdContrato!, this.user,'/contrato')
        .subscribe(
          res => {
            this.router.navigate(['/Contrato']);
          },
          err => console.error(err)
        );
    }  
  }
