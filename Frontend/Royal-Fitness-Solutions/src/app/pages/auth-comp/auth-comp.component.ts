import { Component } from '@angular/core';
import { LoginRequest } from 'src/app/interfaces/auth interface/LoginRequest';
import { RegisterRequest } from 'src/app/interfaces/auth interface/RegisterRequest';
import { AuthService } from 'src/app/services/auth service/auth.service';

@Component({
  selector: 'app-auth-comp',
  templateUrl: './auth-comp.component.html',
  styleUrls: ['./auth-comp.component.scss']
})
export class AuthCompComponent {
  loginRequest: LoginRequest = { email: '', password: '' };
  registerRequest: RegisterRequest = { firstName: '', lastName: '', email: '', cell_number: '', password: '' };

  constructor(private authService: AuthService) {}

  // Method to handle user login
  onLogin(): void {
    this.authService.login(this.loginRequest).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.authService.loginUser(this.loginRequest.email, response.token);
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

  // Method to handle user registration
  onRegister(): void {
    this.authService.register(this.registerRequest).subscribe(
      (response) => {
        console.log('Registration successful', response);
      },
      (error) => {
        console.error('Registration failed', error);
      }
    );
  }

  showLogin: boolean = true; // Default to show login form

  // Toggle between login and register forms
  toggleForms() {
    this.showLogin = !this.showLogin;
  }

}
