import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SARIMAComponent } from './SARIMA.component';

describe('SARIMAComponent', () => {
  let component:SARIMAComponent;
  let fixture: ComponentFixture<SARIMAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SARIMAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SARIMAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
