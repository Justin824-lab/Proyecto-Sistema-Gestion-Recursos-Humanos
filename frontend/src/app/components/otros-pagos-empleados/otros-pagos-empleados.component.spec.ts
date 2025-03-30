import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosPagosEmpleadosComponent } from './otros-pagos-empleados.component';

describe('OtrosPagosEmpleadosComponent', () => {
  let component: OtrosPagosEmpleadosComponent;
  let fixture: ComponentFixture<OtrosPagosEmpleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtrosPagosEmpleadosComponent]
    });
    fixture = TestBed.createComponent(OtrosPagosEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
