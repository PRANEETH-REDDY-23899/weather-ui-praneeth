import { ComponentFixture, TestBed } from "@angular/core/testing";

import { modelComponent } from "./model.component";

describe("modelComponent", () => {
  let component: modelComponent;
  let fixture: ComponentFixture<modelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [modelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(modelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
