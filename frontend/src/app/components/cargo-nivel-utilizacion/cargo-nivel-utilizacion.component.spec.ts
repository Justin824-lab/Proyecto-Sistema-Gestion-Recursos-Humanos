import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoNivelUtilizacionComponent } from './cargo-nivel-utilizacion.component';

describe('CargoNivelUtilizacionComponent', () => {
  let component: CargoNivelUtilizacionComponent;
  let fixture: ComponentFixture<CargoNivelUtilizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargoNivelUtilizacionComponent]
    });
    fixture = TestBed.createComponent(CargoNivelUtilizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
