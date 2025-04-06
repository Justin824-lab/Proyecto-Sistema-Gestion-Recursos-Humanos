import { Component, OnInit  } from '@angular/core';
import {  EstadoCivil } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-estado-civil',
  templateUrl: './estado-civil.component.html',
  styleUrls: ['./estado-civil.component.css']
})
export class EstadoCivilComponent implements OnInit  {
  TUser: any = [];
  user: EstadoCivil = {
      IdCivil: null,
      Estado: null,
      EstadoRegistro:'Activo'
  };
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.Data.getAll('/EstadoCivil')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }
  AgregarValor(){
    delete this.user.IdCivil;   
    this.Data.save(this.user,'/EstadoCivil')
       .subscribe(
         res => {

this.getUser();
         },
         err => console.error(err)
       );
}
  EliminarData(id: number){
    this.Data.delete(id, '/EstadoCivil')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

}


