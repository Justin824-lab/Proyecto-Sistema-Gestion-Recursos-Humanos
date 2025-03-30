import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoRequisitosComponent } from './cargo-requisitos.component';

describe('CargoRequisitosComponent', () => {
  let component: CargoRequisitosComponent;
  let fixture: ComponentFixture<CargoRequisitosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargoRequisitosComponent]
    });
    fixture = TestBed.createComponent(CargoRequisitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
