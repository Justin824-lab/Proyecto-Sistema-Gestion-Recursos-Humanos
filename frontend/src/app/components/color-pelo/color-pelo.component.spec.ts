import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPeloComponent } from './color-pelo.component';

describe('ColorPeloComponent', () => {
  let component: ColorPeloComponent;
  let fixture: ComponentFixture<ColorPeloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorPeloComponent]
    });
    fixture = TestBed.createComponent(ColorPeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
