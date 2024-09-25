import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor( private router: Router){}

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToMeals() {
    this.router.navigate(['/meals']);
  }

  goToTraining() {
    this.router.navigate(['/training']);
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }

}
