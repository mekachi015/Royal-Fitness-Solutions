import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, } from '@angular/router';
import { AuthService } from '../auth service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    const isAuthenticated = this.authService.isAuthenticated();

    if (!isAuthenticated) {
      // Redirect to the login page if not authenticated
      this.router.navigate(['login']);
      return false; // Deny access
    }

    return true; // Allow access
  }
}
