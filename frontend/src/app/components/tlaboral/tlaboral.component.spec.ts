import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlaboralComponent } from './tlaboral.component';

describe('TlaboralComponent', () => {
  let component: TlaboralComponent;
  let fixture: ComponentFixture<TlaboralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TlaboralComponent]
    });
    fixture = TestBed.createComponent(TlaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
