import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoFuncionesComponent } from './cargo-funciones.component';

describe('CargoFuncionesComponent', () => {
  let component: CargoFuncionesComponent;
  let fixture: ComponentFixture<CargoFuncionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargoFuncionesComponent]
    });
    fixture = TestBed.createComponent(CargoFuncionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
