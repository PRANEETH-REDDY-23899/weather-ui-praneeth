import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesDeepComponent } from './featuresDeep.component';

describe('FeaturesDeepComponent', () => {
  let component: FeaturesDeepComponent;
  let fixture: ComponentFixture<FeaturesDeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesDeepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesDeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
