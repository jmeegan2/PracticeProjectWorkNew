import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserCredentialsControllerService } from 'src/app/api/services';
import { UserCredentials } from 'src/app/api/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  UserCredentialsList: UserCredentials[] = []; // Initialize the patients array

  constructor(private userCredentialsService: UserCredentialsControllerService) { }

  ngOnInit(): void {
    this.getUserCredentials(); // Call the getPatients method on initialization
  }

  getUserCredentials(): void {
    this.userCredentialsService.find().subscribe(UserCredentialsList => this.UserCredentialsList = this.UserCredentialsList); // Subscribe to the service to get patients
  }
}

