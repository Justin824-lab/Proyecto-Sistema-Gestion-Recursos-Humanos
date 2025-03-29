import { Component, OnInit} from '@angular/core';
import {  Etnia } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';


@Component({
  selector: 'app-etnia',
  templateUrl: './etnia.component.html',
  styleUrls: ['./etnia.component.css']
})
export class EtniaComponent implements OnInit {
  TUser: any = [];
  user: Etnia = {
      IdEtnia: null,
      Nombre: null,
      estado: 'Activo'
  };
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.Data.getAll('/Etnia')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }
  AgregarValor(){
    delete this.user.IdEtnia;   
    this.Data.save(this.user,'/Etnia')
       .subscribe(
         res => {

this.getUser();
         },
         err => console.error(err)
       );
}
  EliminarData(id: number){
    this.Data.delete(id, '/Etnia')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

}


