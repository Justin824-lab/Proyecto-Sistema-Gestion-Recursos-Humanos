import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelDeUtilizacionComponent } from './nivel-de-utilizacion.component';

describe('NivelDeUtilizacionComponent', () => {
  let component: NivelDeUtilizacionComponent;
  let fixture: ComponentFixture<NivelDeUtilizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelDeUtilizacionComponent]
    });
    fixture = TestBed.createComponent(NivelDeUtilizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
