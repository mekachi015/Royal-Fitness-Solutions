import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meal-plan-questionaire',
  templateUrl: './meal-plan-questionaire.component.html',
  styleUrls: ['./meal-plan-questionaire.component.scss']
})
export class MealPlanQuestionaireComponent implements OnInit {

  profileForm: FormGroup;
  lifestyleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      isMale: [false],
      isFemale: [false],
      age: ['', Validators.required],
      medicalConditions: ['']
    });

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

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }

  onLifestyleSubmit() {
    if (this.lifestyleForm.valid) {
      console.log(this.lifestyleForm.value);
    }
  }

  clearForm() {
    this.profileForm.reset();
  }

  clearLifestyleForm() {
    this.lifestyleForm.reset();
  }
}
