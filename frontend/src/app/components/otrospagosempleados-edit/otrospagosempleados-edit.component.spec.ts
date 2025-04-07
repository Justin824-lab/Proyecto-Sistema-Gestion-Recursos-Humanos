import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrospagosempleadosEditComponent } from './otrospagosempleados-edit.component';

describe('OtrospagosempleadosEditComponent', () => {
  let component: OtrospagosempleadosEditComponent;
  let fixture: ComponentFixture<OtrospagosempleadosEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtrospagosempleadosEditComponent]
    });
    fixture = TestBed.createComponent(OtrospagosempleadosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
