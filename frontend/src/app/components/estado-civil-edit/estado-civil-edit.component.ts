import { Component,OnInit  } from '@angular/core';
import { EstadoCivil } from '../../Interfaces/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-estado-civil-edit',
  templateUrl: './estado-civil-edit.component.html',
  styleUrls: ['./estado-civil-edit.component.css']
})
export class EstadoCivilEditComponent implements OnInit   {
  valorInput: number | undefined;
TUser: any = [];
user: EstadoCivil = {
  IdCivil: null,
  Estado: null,
  EstadoRegistro: 'Activo'
};
constructor(private Data: DataService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

ngOnInit(): void {
  const params = this.activatedRoute.snapshot.params;

  if (params['id']) {
    this.Data.getOne(params['id'],'/EstadoCivil')
      .subscribe(
        res => {
          this.user = res;
                              },
        err => console.log(err)
      );
  }
  }
  updateUser() {
    this.Data.update(this.user.IdCivil!, this.user,'/EstadoCivil')
      .subscribe(
        res => {
          this.router.navigate(['/EstadoCivil']);
        },
        err => console.error(err)
      );
  }  
}




