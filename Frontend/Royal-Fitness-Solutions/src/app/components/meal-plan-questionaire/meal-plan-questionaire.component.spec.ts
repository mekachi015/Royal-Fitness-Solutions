import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanQuestionaireComponent } from './meal-plan-questionaire.component';

describe('MealPlanQuestionaireComponent', () => {
  let component: MealPlanQuestionaireComponent;
  let fixture: ComponentFixture<MealPlanQuestionaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealPlanQuestionaireComponent]
    });
    fixture = TestBed.createComponent(MealPlanQuestionaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
