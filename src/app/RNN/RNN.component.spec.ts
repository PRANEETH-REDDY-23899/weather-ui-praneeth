import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RNNComponent } from './RNN.component';

describe('RNNComponent', () => {
  let component:RNNComponent;
  let fixture: ComponentFixture<RNNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RNNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RNNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
