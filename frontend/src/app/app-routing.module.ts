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


import { NivelDeUtilizacionComponent } from './components/nivel-de-utilizacion/nivel-de-utilizacion.component';
import { OtrosPagosComponent } from './components/otros-pagos/otros-pagos.component';
import { NoResolucionComponent } from './components/no-resolucion/no-resolucion.component';
import { CatOcupacionalComponent } from './components/cat-ocupacional/cat-ocupacional.component';
import { CFTPrincipalesComponent } from './components/c-ftprincipales/c-ftprincipales.component';
import { ContratoComponent } from './components/contrato/contrato.component';
import { ColorPeloComponent } from './components/color-pelo/color-pelo.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { EstadoComponent } from './components/estado/estado.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { ReqConocimientosComponent } from './components/req-conocimientos/req-conocimientos.component';
import { GrupoEscalaComponent } from './components/grupo-escala/grupo-escala.component';
import { TrabajaEnComponent } from './components/trabaja-en/trabaja-en.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { CargoRequisitosComponent } from './components/cargo-requisitos/cargo-requisitos.component';
import { CargoNivelUtilizacionComponent } from './components/cargo-nivel-utilizacion/cargo-nivel-utilizacion.component';
import { OtrosPagosEmpleadosComponent } from './components/otros-pagos-empleados/otros-pagos-empleados.component';
import { TlaboralComponent } from './components/tlaboral/tlaboral.component';
import { CargoFuncionesComponent } from './components/cargo-funciones/cargo-funciones.component';


const routes: Routes = [
  { path: 'nivel-de-utilizacion', 
    component: NivelDeUtilizacionComponent 
  },
  { path: 'otros-pagos', 
    component: OtrosPagosComponent 
  },
  { path: 'no-resolucion', 
    component: NoResolucionComponent 
  },
  { path: 'cat-ocupacional', 
    component: CatOcupacionalComponent 
  },
  { path: 'cft-principales', 
    component: CFTPrincipalesComponent 
  },
  { path: 'contrato', 
    component: ContratoComponent 
  },
  { path: 'color-pelo', 
    component: ColorPeloComponent 
  },
  { path: 'ubicacion', 
    component: UbicacionComponent 
  },
  { path: 'estado', 
    component: EstadoComponent 
  },
  { path: 'departamento', 
    component: DepartamentoComponent 
  },
  { path: 'req-conocimientos', 
    component: ReqConocimientosComponent 
  },
  { path: 'grupo-escala', 
    component: GrupoEscalaComponent 
  },
  { path: 'trabaja-en', 
    component: TrabajaEnComponent 
  },
  { path: 'plantilla', 
    component: PlantillaComponent 
  },
  { path: 'cargo-requisitos', 
    component: CargoRequisitosComponent 
  },
  { path: 'cargo-nivel-utilizacion', 
    component: CargoNivelUtilizacionComponent 
  },
  { path: 'otros-pagos-empleados', 
    component: OtrosPagosEmpleadosComponent 
  },
  { path: 'tlaboral', 
    component: TlaboralComponent 
  },
  { path: 'cargo-funciones', 
    component: CargoFuncionesComponent 
  },
  //

  
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
