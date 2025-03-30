import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFTPrincipalesComponent } from './c-ftprincipales.component';

describe('CFTPrincipalesComponent', () => {
  let component: CFTPrincipalesComponent;
  let fixture: ComponentFixture<CFTPrincipalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CFTPrincipalesComponent]
    });
    fixture = TestBed.createComponent(CFTPrincipalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
