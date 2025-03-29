import { Component, OnInit } from '@angular/core';
import { Etnia } from '../../Interfaces/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-etnia-edit',
  templateUrl: './etnia-edit.component.html',
  styleUrls: ['./etnia-edit.component.css']
})
export class EtniaEditComponent implements OnInit {
  valorInput: number | undefined;
  TUser: any = [];
  user: Etnia = {
      IdEtnia: null,
      Nombre: null,
      estado: 'Activo'
  };
  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/Etnia')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    }
    updateUser() {
      this.Data.update(this.user.IdEtnia!, this.user,'/Etnia')
        .subscribe(
          res => {
            this.router.navigate(['/etnia']);
          },
          err => console.error(err)
        );
    }  
  }


