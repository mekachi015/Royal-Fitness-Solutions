import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meal-plan-questionaire',
  templateUrl: './meal-plan-questionaire.component.html',
  styleUrls: ['./meal-plan-questionaire.component.scss']
})
export class MealPlanQuestionaireComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      isMale: [false],
      isFemale: [false],
      age: ['', [Validators.required, Validators.min(1)]],
      medicalConditions: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      // Handle form submission
    }
  }
}
