import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadosEditComponent} from './components/empleados-edit/empleados-edit.component';
import { EstadoCivilComponent } from './components/estado-civil/estado-civil.component';
import { EstadoCivilEditComponent } from './components/estado-civil-edit/estado-civil-edit.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
