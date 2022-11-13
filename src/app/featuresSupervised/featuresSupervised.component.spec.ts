import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesSupervisedComponent } from './featuresSupervised.component';

describe('FeaturesSupervisedComponent', () => {
  let component: FeaturesSupervisedComponent;
  let fixture: ComponentFixture<FeaturesSupervisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesSupervisedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesSupervisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
