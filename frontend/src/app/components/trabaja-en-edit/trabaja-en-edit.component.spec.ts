import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajaEnEditComponent } from './trabaja-en-edit.component';

describe('TrabajaEnEditComponent', () => {
  let component: TrabajaEnEditComponent;
  let fixture: ComponentFixture<TrabajaEnEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrabajaEnEditComponent]
    });
    fixture = TestBed.createComponent(TrabajaEnEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
