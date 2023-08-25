import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserCredentials } from 'src/app/api/models/user-credentials';
import { UserCredentialsControllerService } from 'src/app/api/services/user-credentials-controller.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service'; // Update the path to AuthService

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {

  loginForm: FormGroup;
  userAuths: UserCredentials[] = [];
  isAuthenticated: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private userAuthService: UserCredentialsControllerService,
    private router: Router,
    private authService: AuthService
  ) {
    this.isAuthenticated = authService.getIsAuthenticated();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getUserAuths();
  }

  getUserAuths(): void {
    this.userAuthService.find().subscribe(userAuths => this.userAuths = userAuths);
  }

  login(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      const foundUser = this.userAuths.find((user: UserCredentials) => user.username === username && user.password === password);

      if (foundUser) {
        console.log('Valid');
        this.authService.login();
        this.isAuthenticated = true;
        this.router.navigate(['/home']);
      } else {
        console.log('False');
        alert('Incorrect Login');
      }
    }
  }

  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/userAuth']);
  }
}
