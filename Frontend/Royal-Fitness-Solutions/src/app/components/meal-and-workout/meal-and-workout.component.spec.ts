import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealAndWorkoutComponent } from './meal-and-workout.component';

describe('MealAndWorkoutComponent', () => {
  let component: MealAndWorkoutComponent;
  let fixture: ComponentFixture<MealAndWorkoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealAndWorkoutComponent]
    });
    fixture = TestBed.createComponent(MealAndWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
