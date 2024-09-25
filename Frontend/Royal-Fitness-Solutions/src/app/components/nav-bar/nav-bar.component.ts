import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  currentRoute: string = '';

  constructor(private router: Router) {
    // Subscribe to router events to get the active route
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url; // Get the current URL
    });
  }

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
