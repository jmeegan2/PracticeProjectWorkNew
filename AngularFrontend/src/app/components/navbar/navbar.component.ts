import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isAuthenticated: boolean;

  constructor(private authService: AuthService) {
    this.isAuthenticated = authService.getIsAuthenticated();
  }
}