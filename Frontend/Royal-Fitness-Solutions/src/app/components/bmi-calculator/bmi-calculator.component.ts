import { Component } from '@angular/core';
import Swal from 'sweetalert2';

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

  clearFields(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to clear the fields?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, clear them!',
      cancelButtonText: 'No, cancel!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.weightKg = null; // Resets the weight field
        this.heightMeters = null; // Resets the height field
        this.bmi = null; // Resets the BMI field
        this.category = ''; // Resets the category field
        Swal.fire(
          'Cleared!',
          'The fields have been cleared.',
          'success'
        );
      }
    });
  }
  

}
