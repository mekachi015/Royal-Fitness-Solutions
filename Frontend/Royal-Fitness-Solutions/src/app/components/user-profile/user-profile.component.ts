import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth service/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: any = {};
  private userId: number | null = null;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.initAuth(); // Initialize auth to set token and other values
    this.userId = this.auth.getUserId(); // Retrieve userId from auth service

    console.log('Retrieved User ID:', this.userId); // Debug log

    // Load user profile if userId is available
    if (this.userId !== null) {
      this.loadUserProfile();
    } else {
      console.error('User ID is null. Cannot load user profile.', this.userId);
    }
  }

  loadUserProfile(): void {
    if (this.userId !== null) {
      this.auth.getUserById(this.userId).subscribe(
        userInfo => {
          this.user = userInfo;
          console.log('User Info by ID:', this.user);
        },
        error => {
          console.error('Error fetching user info by ID:', error);
        }
      );
    } else {
      console.error('User ID is null. Cannot fetch user info.');
    }
  }
}
