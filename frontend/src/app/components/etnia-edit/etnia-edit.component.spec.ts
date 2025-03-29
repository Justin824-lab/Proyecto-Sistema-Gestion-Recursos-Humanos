import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtniaEditComponent } from './etnia-edit.component';

describe('EtniaEditComponent', () => {
  let component: EtniaEditComponent;
  let fixture: ComponentFixture<EtniaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtniaEditComponent]
    });
    fixture = TestBed.createComponent(EtniaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
