import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-training-plan-questionaire',
  templateUrl: './training-plan-questionaire.component.html',
  styleUrls: ['./training-plan-questionaire.component.scss']
})
export class TrainingPlanQuestionaireComponent implements OnInit{
  trainingPlanForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Initialize the form group with controls and validation
    this.trainingPlanForm = this.formBuilder.group({
      fitnessGoals: ['', Validators.required],
      previousExperience: ['', Validators.required],
      activities: ['', Validators.required],
      injuries: ['', Validators.required],
      exerciseAvoid: ['', Validators.required],
      workoutFrequency: [null, [Validators.required, Validators.min(1)]],
      preferredTime: ['', Validators.required],
      equipment: ['', Validators.required],
      workoutPreferences: ['', Validators.required],
      specificGoals: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Any additional initialization logic can go here
  }

  onSubmit(): void {
    if (this.trainingPlanForm.valid) {
      // Handle the form submission
      console.log('Form Submitted!', this.trainingPlanForm.value);
      Swal.fire({
        title: 'Success!',
        text: 'Your training plan has been submitted successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      // You can also send the form data to your backend here
    } else {
      // Handle the case where the form is invalid
      console.log('Form is invalid');
      Swal.fire({
        title: 'Error!',
        text: 'Please fill out all required fields correctly.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }

  onClear(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to clear the form?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, clear it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.trainingPlanForm.reset(); // Reset the form fields
        Swal.fire({
          title: 'Cleared!',
          text: 'The form has been cleared.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }
    });
  }

}
