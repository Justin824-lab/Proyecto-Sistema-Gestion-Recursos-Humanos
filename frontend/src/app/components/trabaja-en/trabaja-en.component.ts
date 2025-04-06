import { Component, OnInit } from '@angular/core';
import { TrabajaEn } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-trabajaen',
  templateUrl: './trabaja-en.component.html',
  styleUrls: ['./trabaja-en.component.css']
})
export class TrabajaEnComponent implements OnInit {

  TUser: any = [];
  user: TrabajaEn = {
      CI: null,
      IdDpto: null,
      FechaAlta: null,
      Estado: 'Activo'
  };

  Empleadoslist: any;
  Departamentolist: any;  
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
    this.getDropListEmpleados();
    this.getDropListDepartamento();
  }
  getDropListEmpleados() {
    this.Data.getDropListEmpleados().subscribe((data:any)=>{
      this.Empleadoslist=data;
    })
  }
  getDropListDepartamento() {
    this.Data.getDropListDepartamento().subscribe((data:any)=>{
      this.Departamentolist=data;
    })
  }

  getUser() {
    this.Data.getAll('/TrabajaEn')
      .subscribe(res => {
          this.TUser = res;
        }, err => console.error(err));
  }

  AgregarValor() {
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

