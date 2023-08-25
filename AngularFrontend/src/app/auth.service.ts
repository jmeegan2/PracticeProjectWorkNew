import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router service

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {} // Inject the Router service

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  login(): void {
    console.log("You have been logged in");
    this.isAuthenticated = true;
  }

  logout(): void {
    console.log("You have been logged out");
    this.isAuthenticated = false;
    this.router.navigate(['/userAuth']); // Redirect to UserAuthComponent
  }
}
