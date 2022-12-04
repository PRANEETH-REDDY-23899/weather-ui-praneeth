import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ARIMAComponent } from './ARIMA.component';

describe('ARIMAComponent', () => {
  let component: ARIMAComponent;
  let fixture: ComponentFixture<ARIMAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ARIMAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ARIMAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
