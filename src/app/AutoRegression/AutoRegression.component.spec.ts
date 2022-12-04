import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoRegressionComponent } from './AutoRegression.component';

describe('AutoRegressionComponent', () => {
  let component: AutoRegressionComponent;
  let fixture: ComponentFixture<AutoRegressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoRegressionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
