import { Component } from '@angular/core';


interface User {
  name: string;
  email: string;
  bmi: number;
  mealPlanAnswers: {
    favoriteCuisine: string;
    foodAllergies: string;
    dailyCaloricIntake: number;
  };
  trainingPlanAnswers: {
    fitnessGoals: string;
    previousExperience: string;
    preferredWorkoutDays: string;
  };
}

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.scss']
})
export class AdminDashComponent {

  users: User[] = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      bmi: 24.5,
      mealPlanAnswers: {
        favoriteCuisine: 'Italian',
        foodAllergies: 'None',
        dailyCaloricIntake: 2500
      },
      trainingPlanAnswers: {
        fitnessGoals: 'Muscle Gain',
        previousExperience: 'Intermediate',
        preferredWorkoutDays: 'Monday, Wednesday, Friday'
      }
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      bmi: 22.8,
      mealPlanAnswers: {
        favoriteCuisine: 'Mexican',
        foodAllergies: 'Gluten',
        dailyCaloricIntake: 2200
      },
      trainingPlanAnswers: {
        fitnessGoals: 'Weight Loss',
        previousExperience: 'Beginner',
        preferredWorkoutDays: 'Tuesday, Thursday, Saturday'
      }
    }
  ];

  // Method to toggle the visibility of user details
  toggleUserDetails(index: number): void {
    const userDetails = document.querySelectorAll('.user-details')[index];
    if (userDetails) {
      userDetails.classList.toggle('hidden');
    }
  }
}
