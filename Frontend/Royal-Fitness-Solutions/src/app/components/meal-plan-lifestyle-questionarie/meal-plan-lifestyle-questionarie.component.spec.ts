import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanLifestyleQuestionarieComponent } from './meal-plan-lifestyle-questionarie.component';

describe('MealPlanLifestyleQuestionarieComponent', () => {
  let component: MealPlanLifestyleQuestionarieComponent;
  let fixture: ComponentFixture<MealPlanLifestyleQuestionarieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealPlanLifestyleQuestionarieComponent]
    });
    fixture = TestBed.createComponent(MealPlanLifestyleQuestionarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
