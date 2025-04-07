import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OtrosPagosEmpleados } from 'src/app/Interfaces/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-otrospagosempleados-edit',
  templateUrl: './otrospagosempleados-edit.component.html',
  styleUrls: ['./otrospagosempleados-edit.component.css']
})
export class OtrospagosempleadosEditComponent implements OnInit {
  user: OtrosPagosEmpleados = {
    CI: null,
    IdPagos: null,
    Estado: ''
  };
  Empleadoslist: any;
  OtrosPagosList: any;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDropListEmpleados();
    this.getDropListOtrosPagos();
    this.loadData();
  }

  getDropListEmpleados() {
    this.data.getDropListEmpleados().subscribe((data: any) => {
      this.Empleadoslist = data;
    });
  }

  getDropListOtrosPagos() {
    this.data.getDropListOtrosPagos().subscribe((data) => {
      this.OtrosPagosList = data;
    });
  }

  loadData() {
    const CI = this.route.snapshot.paramMap.get('CI');
    const IdPagos = this.route.snapshot.paramMap.get('IdPagos');
    if (!CI || !IdPagos) {
      console.error('CI o IdPagos no están definidos:', CI, IdPagos);
      this.router.navigate(['/otros-pagos-empleados']);
      return;
    }
    const id = `${CI}/${IdPagos}`; // Ejemplo: "1002/10"
    this.data.getAll(`/OtrosPagosEmpleados/${id}`).subscribe(
      (res) => {
        this.user = res || { CI: null, IdPagos: null, Estado: '' };
        console.log('Datos cargados:', this.user);
      },
      (err) => {
        console.error('Error al cargar datos:', err);
        if (err.status === 404) {
          alert('Registro no encontrado');
        }
        this.router.navigate(['/otros-pagos-empleados']);
      }
    );
  
    this.data.getAll(`/OtrosPagosEmpleados/${CI}/${IdPagos}`).subscribe(
      (res) => {
        this.user = res || { CI: null, IdPagos: null, Estado: '' };
      },
      (err) => {
        console.error('Error al cargar datos:', err);
        if (err.status === 404) {
          alert('Registro no encontrado');
        }
        this.router.navigate(['/otros-pagos-empleados']);
      }
    );
  }

  updateUser() {
    const id = `${this.user.CI}/${this.user.IdPagos}`; // Clave compuesta
    this.data.update(id, this.user, '/OtrosPagosEmpleados').subscribe(
      (res) => {
        alert('Registro Actualizado');
        this.router.navigate(['/otros-pagos-empleados']);
      },
      (err) => {
        console.error('Error al actualizar:', err);
        alert('Error al actualizar el registro');
      }
    );
  }
}