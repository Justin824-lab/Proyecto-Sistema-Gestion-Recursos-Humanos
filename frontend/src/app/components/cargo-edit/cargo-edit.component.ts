import { Component, OnInit } from '@angular/core';
import { Cargo } from '../../Interfaces/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cargo-edit',
  templateUrl: './cargo-edit.component.html',
  styleUrls: ['./cargo-edit.component.css']
})
export class CargoEditComponent implements OnInit {
  valorInput: number | undefined;
  TUser: any = [];
  user: Cargo = {
      IdCargo: null,
      IdNoResolucion: null,
      IdGrupoEscala: null,
      IdCatOcupacional: null,
      estado: 'Activo'
  };
  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/Cargo')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    }
    updateUser() {
      this.Data.update(this.user.IdCargo!, this.user,'/Cargo')
        .subscribe(
          res => {
            this.router.navigate(['/cargo']);
          },
          err => console.error(err)
        );
    }  
  }



