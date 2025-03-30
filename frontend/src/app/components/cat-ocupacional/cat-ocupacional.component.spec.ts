import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatOcupacionalComponent } from './cat-ocupacional.component';

describe('CatOcupacionalComponent', () => {
  let component: CatOcupacionalComponent;
  let fixture: ComponentFixture<CatOcupacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatOcupacionalComponent]
    });
    fixture = TestBed.createComponent(CatOcupacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
