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

  loginForm: FormGroup = new FormGroup({});
  userAuths: UserCredentials[] = [];
  isAuthenticated: boolean; // Initialize the property

  constructor(
    private formBuilder: FormBuilder,
    private userAuthService: UserCredentialsControllerService,
    private router: Router,
    private authService: AuthService // Inject the AuthService
  ) {
    // Initialize isAuthenticated property based on the value from the AuthService
    this.isAuthenticated = authService.getIsAuthenticated();
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.getUserAuths();
  }

  getUserAuths(): void {
    this.userAuthService.find().subscribe(userAuths => this.userAuths = userAuths);
  }

  login(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      // Validate the username and password
      const foundUser = this.userAuths.find((user: UserCredentials) => user.username === username && user.password === password);

      if (foundUser) {
        console.log('Valid');
        this.authService.login(); // Set authentication status to true
        this.isAuthenticated = true; // Update the isAuthenticated property
        this.router.navigate(['/home']); // Redirect to HomeComponent
      } else {
        console.log('False');
        alert('Incorrect Login');
      }
    }
  }

  logout(): void {
    this.authService.logout(); // Set authentication status to false
    this.isAuthenticated = false; // Update the isAuthenticated property
    this.router.navigate(['/userAuth']); // Redirect to UserAuthComponent
  }
}
