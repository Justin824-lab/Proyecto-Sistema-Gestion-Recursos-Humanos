import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoResolucionComponent } from './no-resolucion.component';

describe('NoResolucionComponent', () => {
  let component: NoResolucionComponent;
  let fixture: ComponentFixture<NoResolucionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoResolucionComponent]
    });
    fixture = TestBed.createComponent(NoResolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
