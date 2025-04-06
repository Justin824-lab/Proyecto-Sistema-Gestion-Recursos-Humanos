import { Component, OnInit } from '@angular/core';
import { Plantilla } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {

  TUser: any = [];
  user: Plantilla = {
     IdCargo: null,
      IdDpto: null,
      Estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/Plantilla')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.IdCargo;
    this.Data.save(this.user, '/Plantilla')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/Plantilla')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}
