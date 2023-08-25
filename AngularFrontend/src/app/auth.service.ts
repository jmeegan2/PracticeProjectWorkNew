import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  login(): void {
    console.log("you have been logged in")

    this.isAuthenticated = true;
  }

  logout(): void {
    console.log("you have been logged out")
    this.isAuthenticated = false;
  }
}

