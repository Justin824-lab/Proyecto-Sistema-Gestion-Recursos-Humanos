import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosPagosComponent } from './otros-pagos.component';

describe('OtrosPagosComponent', () => {
  let component: OtrosPagosComponent;
  let fixture: ComponentFixture<OtrosPagosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtrosPagosComponent]
    });
    fixture = TestBed.createComponent(OtrosPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
