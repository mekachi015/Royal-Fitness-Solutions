import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { enviroment } from 'src/app/enviroments/enviroment';
import { AuthResponse } from 'src/app/interfaces/auth interface/AuthResponse';
import { LoginRequest } from 'src/app/interfaces/auth interface/LoginRequest';
import { RegisterRequest } from 'src/app/interfaces/auth interface/RegisterRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null;
  private authStatusListener = new BehaviorSubject<boolean>(false);
  private apiBaseUrl = enviroment.apiURL;


  constructor(private http: HttpClient) {}

  // Register method
  register(registerRequest: RegisterRequest): Observable<AuthResponse> {
    const url = `${this.apiBaseUrl}/register`;
    return this.http.post<AuthResponse>(url, registerRequest);
  }

  // Login method
  login(loginRequest: LoginRequest): Observable<AuthResponse> {
    const url = `${this.apiBaseUrl}/authenticate`;
    return this.http.post<AuthResponse>(url, loginRequest);
  }

  // Store user data on login
  loginUser(email: string, token: string): void {
    localStorage.setItem('loggedInUserEmail', email);
    localStorage.setItem('token', token);
    this.token = token;
    this.authStatusListener.next(true);
  }

  // Logout and clear localStorage
  logout(): void {
    localStorage.removeItem('loggedInUserEmail');
    localStorage.removeItem('token');
    this.token = null;
    this.authStatusListener.next(false);
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  // Get the token from localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Get user email from localStorage
  getLoggedInUserEmail(): string | null {
    return localStorage.getItem('loggedInUserEmail');
  }

  // Listen to authentication status
  getAuthStatusListener(): Observable<boolean> {
    return this.authStatusListener.asObservable();
  }

  // Initialize authentication from localStorage
  initAuth(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.token = token;
      this.authStatusListener.next(true);
    } else {
      this.authStatusListener.next(false);
    }
  }
}
