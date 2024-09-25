import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-meal-plan-lifestyle-questionarie',
  templateUrl: './meal-plan-lifestyle-questionarie.component.html',
  styleUrls: ['./meal-plan-lifestyle-questionarie.component.scss']
})
export class MealPlanLifestyleQuestionarieComponent {

  lifestyleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.lifestyleForm = this.fb.group({
      fitnessGoals: ['', Validators.required],
      workoutFrequency: ['', Validators.required],
      dietaryRestrictions: [''],
      dailySchedule: [''],
      favoriteFoods: [''],
      dislikedFoods: [''],
      eatOutFrequency: [''],
      cookingHabits: [''],
      medicalConditionsDiet: [''],
      pregnantBreastfeeding: ['']
    });
  }

   

  onLifestyleSubmit() {
    if (this.lifestyleForm.valid) {
      console.log(this.lifestyleForm.value);
    }
  }

  clearLifestyleForm() {
    this.lifestyleForm.reset();
  }
}
