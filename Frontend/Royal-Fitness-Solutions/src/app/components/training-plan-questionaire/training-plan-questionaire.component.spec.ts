import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPlanQuestionaireComponent } from './training-plan-questionaire.component';

describe('TrainingPlanQuestionaireComponent', () => {
  let component: TrainingPlanQuestionaireComponent;
  let fixture: ComponentFixture<TrainingPlanQuestionaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingPlanQuestionaireComponent]
    });
    fixture = TestBed.createComponent(TrainingPlanQuestionaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
