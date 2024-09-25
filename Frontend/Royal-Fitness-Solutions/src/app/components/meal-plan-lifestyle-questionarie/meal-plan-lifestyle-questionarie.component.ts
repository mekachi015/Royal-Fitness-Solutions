import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
      Swal.fire({
        title: 'Success!',
        text: 'Your lifestyle information has been submitted.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill out all required fields before submitting.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
    }
  }
  
  clearLifestyleForm() {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to clear the lifestyle form?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, clear it!',
      cancelButtonText: 'No, cancel!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.lifestyleForm.reset();
        Swal.fire(
          'Cleared!',
          'The lifestyle form has been cleared.',
          'success'
        );
      }
    });
  }
  
}
