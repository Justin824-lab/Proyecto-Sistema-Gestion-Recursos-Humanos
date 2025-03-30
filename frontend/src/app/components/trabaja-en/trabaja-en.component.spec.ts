import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajaEnComponent } from './trabaja-en.component';

describe('TrabajaEnComponent', () => {
  let component: TrabajaEnComponent;
  let fixture: ComponentFixture<TrabajaEnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrabajaEnComponent]
    });
    fixture = TestBed.createComponent(TrabajaEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
