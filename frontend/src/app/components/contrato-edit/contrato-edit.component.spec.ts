import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoEditComponent } from './contrato-edit.component';

describe('ContratoEditComponent', () => {
  let component: ContratoEditComponent;
  let fixture: ComponentFixture<ContratoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContratoEditComponent]
    });
    fixture = TestBed.createComponent(ContratoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
