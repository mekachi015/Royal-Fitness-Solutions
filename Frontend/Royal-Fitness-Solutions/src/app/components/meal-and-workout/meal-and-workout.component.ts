import { Component } from '@angular/core';
import * as moment from 'moment'; // Make sure to install moment.js for easier date manipulation


@Component({
  selector: 'app-meal-and-workout',
  templateUrl: './meal-and-workout.component.html',
  styleUrls: ['./meal-and-workout.component.scss']
})
export class MealAndWorkoutComponent {


  days: { weekday: string, date: number, isToday: boolean }[] = [];
  meals: string[] = ['Breakfast: Oatmeal', 'Lunch: Salad', 'Dinner: Grilled Chicken'];
  workouts: string[] = ['Push-ups', 'Squats', 'Running'];

  ngOnInit(): void {
    this.generateNextSevenDays();
  }

  generateNextSevenDays(): void {
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      // Create a new date object for each day
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
  
      // Get the weekday name (Mon, Tue, etc.)
      const weekday = currentDate.toLocaleString('en-US', { weekday: 'short' }); // e.g., Mon, Tue
      const date = currentDate.getDate(); // e.g., 25
  
      this.days.push({
        weekday: weekday,
        date: date,
        isToday: i === 0 // Highlight today
      });
    }
  }
  
}
