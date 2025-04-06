import { Component, OnInit } from '@angular/core';
import { Contrato } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {

  TUser: any = [];
  user: Contrato = {
    IdContrato: null,
    TipoContrato: null,
    Duracion: null,
    Estado: ''
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/Contrato')
      .subscribe(res => {
        this.TUser = res;
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.IdContrato; // Elimina IdContrato para evitar enviarlo
    this.Data.save(this.user, '/Contrato').subscribe(
      res => {
        console.log('Contrato agregado:', res);
        this.getUser(); // Recarga la lista de contratos
        // Limpia los campos del formulario
        this.user.TipoContrato= '';
        this.user.Duracion= null;
        this.user.Estado= '' ;
      },
      err => {
        console.error('Error al agregar:', err);
        alert('Hubo un error al agregar el contrato');
      }
    );
  }


  EliminarData(id: number) {
    this.Data.delete(id, '/Contrato')
      .subscribe(
        res => { this.getUser(); },
        err => console.error(err)
      );
  }
}

