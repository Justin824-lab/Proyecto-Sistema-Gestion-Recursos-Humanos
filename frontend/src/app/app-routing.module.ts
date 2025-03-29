import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadosEditComponent} from './components/empleados-edit/empleados-edit.component';
import { EstadoCivilComponent } from './components/estado-civil/estado-civil.component';
import { EstadoCivilEditComponent } from './components/estado-civil-edit/estado-civil-edit.component';
import { CargoComponent } from './components/cargo/cargo.component';
import { CargoEditComponent } from './components/cargo-edit/cargo-edit.component';
import { EtniaComponent } from './components/etnia/etnia.component';
import { EtniaEditComponent } from './components/etnia-edit/etnia-edit.component';

const routes: Routes = [
  {
    path: 'empleados',
    component :EmpleadosComponent
  }
  ,
  {
    path: 'empleados/edit/:id',
    component :EmpleadosEditComponent
  }
  ,
  {
    path: 'estado-civil',
    component : EstadoCivilComponent
  }
  ,
  {
    path: 'estado-civil/edit/:id',
    component : EstadoCivilEditComponent
  }
  ,
  {
    path: 'cargo',
    component : CargoComponent
  }
  ,
  {
    path: 'cargo/edit/:id',
    component : CargoEditComponent
  }
  ,
  {
    path: 'etnia',
    component : EtniaComponent
  }
  ,
  {
    path: 'etnia/edit/:id',
    component : EtniaEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
