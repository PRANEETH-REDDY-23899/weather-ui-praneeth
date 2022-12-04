import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSTMComponent } from './LSTM.component';

describe('LSTMComponent', () => {
  let component:LSTMComponent;
  let fixture: ComponentFixture<LSTMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LSTMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LSTMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
