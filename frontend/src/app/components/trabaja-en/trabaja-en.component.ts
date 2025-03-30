import { Component, OnInit } from '@angular/core';
import { TrabajaEn } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-trabajaen',
  templateUrl: './trabajaen.component.html',
  styleUrls: ['./trabajaen.component.css']
})
export class TrabajaEnComponent implements OnInit {

  TUser: any = [];
  user: TrabajaEn = {
      ci: null,
      idDpto: null,
      fechaAlta: null,
      estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/TrabajaEn')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.ci;
    this.Data.save(this.user, '/TrabajaEn')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/TrabajaEn')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}

