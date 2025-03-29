import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { DataService } from './Services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmpleadosEditComponent } from './components/empleados-edit/empleados-edit.component';
import { EstadoCivilComponent } from './components/estado-civil/estado-civil.component';
import { EstadoCivilEditComponent } from './components/estado-civil-edit/estado-civil-edit.component';
import { CargoComponent } from './components/cargo/cargo.component';
import { CargoEditComponent } from './components/cargo-edit/cargo-edit.component';
import { EtniaComponent } from './components/etnia/etnia.component';
import { EtniaEditComponent } from './components/etnia-edit/etnia-edit.component';

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
    EtniaEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
