import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.scss']
})
export class BmiCalculatorComponent {

  weightKg: number | null = null;
  heightMeters: number | null = null;
  bmi: number | null = null;
  category: string = '';

  calculateBMI(): void { //a method that calulates the bmi of an individual
    if (this.weightKg && this.heightMeters) {
      this.bmi = null;
      this.category = '';
      this.bmi = this.weightKg / (this.heightMeters * this.heightMeters);
      this.category = this.getBMICategory(this.bmi); //the calculated bmi is passed to get the category
    }
  }

  getBMICategory(bmi: number | null): string {
    if (bmi === null) return '';
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 24.9) return 'Normal weight';
    if (bmi < 29.9) return 'Overweight';
    return 'Obesity';
  }

  clearFields(): void { // clears the fields 
    this.weightKg = null;
    this.heightMeters = null;
    this.bmi = null;
    this.category = '';
  }

}
