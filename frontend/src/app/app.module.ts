import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Agregado
import { DataService } from './Services/data.service';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadosEditComponent } from './components/empleados-edit/empleados-edit.component';
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
import { CftPrincipalesComponent } from './components/c-ftprincipales/c-ftprincipales.component';
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
import { TrabajaEnEditComponent } from './components/trabaja-en-edit/trabaja-en-edit.component';
import { FilterempresaPipe } from './Pipes/filterempresa.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './auth/login/login.component';
import { ContratoEditComponent } from './components/contrato-edit/contrato-edit.component';
import { FiltercontratoPipe } from './Pipes/filtercontrato.pipe';
import { FiltertrabajaenPipe } from './Pipes/filtertrabajaen.pipe';
import { OtrospagosempleadosEditComponent } from './components/otrospagosempleados-edit/otrospagosempleados-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadosEditComponent,
    EstadoCivilComponent,
    EstadoCivilEditComponent,
    CargoComponent,
    CargoEditComponent,
    EtniaComponent,
    EtniaEditComponent,
    NivelDeUtilizacionComponent,
    OtrosPagosComponent,
    NoResolucionComponent,
    CatOcupacionalComponent,
    CftPrincipalesComponent,
    ContratoComponent,
    ColorPeloComponent,
    UbicacionComponent,
    EstadoComponent,
    DepartamentoComponent,
    ReqConocimientosComponent,
    GrupoEscalaComponent,
    TrabajaEnComponent,
    PlantillaComponent,
    CargoRequisitosComponent,
    CargoNivelUtilizacionComponent,
    OtrosPagosEmpleadosComponent,
    TlaboralComponent,
    CargoFuncionesComponent,
    TrabajaEnEditComponent,
    FilterempresaPipe,
    NavegacionComponent,
    LoginComponent,
    ContratoEditComponent,
    FiltercontratoPipe,
    FiltertrabajaenPipe,
    OtrospagosempleadosEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule // Agregado para ngClass
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }