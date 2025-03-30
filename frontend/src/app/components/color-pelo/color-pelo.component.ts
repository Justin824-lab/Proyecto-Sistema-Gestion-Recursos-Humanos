import { Component, OnInit } from '@angular/core';
import { ColorPelo } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-colorpelo',
  templateUrl: './color-pelo.component.html',
  styleUrls: ['./color-pelo.component.css']
})
export class ColorPeloComponent implements OnInit {

  TUser: any = [];
  user: ColorPelo = {
      idColorPelo: null,
      color: '',
      estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/ColorPelo')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idColorPelo;
    this.Data.save(this.user, '/ColorPelo')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/ColorPelo')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}

