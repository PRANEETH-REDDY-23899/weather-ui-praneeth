import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedLessonsComponent } from './guided-learning.component';

describe('GuidedLessonsComponent', () => {
  let component: GuidedLessonsComponent;
  let fixture: ComponentFixture<GuidedLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidedLessonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidedLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
