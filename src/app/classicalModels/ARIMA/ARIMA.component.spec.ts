import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ARIMAComponent2 } from './ARIMA.component';

describe('ARIMAComponent2', () => {
  let component: ARIMAComponent2;
  let fixture: ComponentFixture<ARIMAComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ARIMAComponent2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ARIMAComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
