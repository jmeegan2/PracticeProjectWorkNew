import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user_credentialsControllerService } from 'src/app/api/services';
import { user_credentials } from 'src/app/api/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  user_credentialsList: user_credentials[] = []; // Initialize the patients array

  constructor(private user_credentialsService: user_credentialsControllerService) { }

  ngOnInit(): void {
    this.getuser_credentials(); // Call the getPatients method on initialization
  }

  getuser_credentials(): void {
    this.user_credentialsService.find().subscribe(user_credentialsList => this.user_credentialsList = this.user_credentialsList); // Subscribe to the service to get patients
  }
}

