import { Component, OnInit } from '@angular/core';
import { CatOcupacional } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-cat-ocupacional',
  templateUrl: './cat-ocupacional.component.html',
  styleUrls: ['./cat-ocupacional.component.css']
})
export class CatOcupacionalComponent implements OnInit {

  TUser: any = [];
  user: CatOcupacional = {
    IdCatOcupacional: null,
    Nombre: null,
    Estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/CatOcupacional')
      .subscribe(res => {
        this.TUser = res;
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.IdCatOcupacional;
    this.Data.save(this.user, '/CatOcupacional')
      .subscribe(
        res => { this.getUser(); },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/CatOcupacional')
      .subscribe(
        res => { this.getUser(); },
        err => console.error(err)
      );
  }
}

