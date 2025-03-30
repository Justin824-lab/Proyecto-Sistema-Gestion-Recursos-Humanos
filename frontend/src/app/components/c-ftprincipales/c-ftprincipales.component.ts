import { Component, OnInit } from '@angular/core';
import { CFTPrincipales } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-cft-principales',
  templateUrl: './c-ftprincipales.component.html',
  styleUrls: ['./c-ftprincipales.component.css']
})
export class CftPrincipalesComponent implements OnInit {

  TUser: any = [];
  user: CFTPrincipales = {
    idFTPrincipales: null,
    descripcion: null,
    estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/CFTPrincipales')
      .subscribe(res => {
        this.TUser = res;
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idFTPrincipales;
    this.Data.save(this.user, '/CFTPrincipales')
      .subscribe(
        res => { this.getUser(); },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/CFTPrincipales')
      .subscribe(
        res => { this.getUser(); },
        err => console.error(err)
      );
  }
}

