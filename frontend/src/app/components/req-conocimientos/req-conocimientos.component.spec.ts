import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqConocimientosComponent } from './req-conocimientos.component';

describe('ReqConocimientosComponent', () => {
  let component: ReqConocimientosComponent;
  let fixture: ComponentFixture<ReqConocimientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReqConocimientosComponent]
    });
    fixture = TestBed.createComponent(ReqConocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
