import { Component } from '@angular/core';
import { UserCredentials } from 'src/app/api/models/user-credentials';
import { UserCredentialsControllerService } from 'src/app/api/services/user-credentials-controller.service';
@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent {

  userAuths: UserCredentials[] = []; // Initialize the userAuths array

  constructor(private userAuthService: UserCredentialsControllerService) { }

  ngOnInit(): void {
    this.getUserAuths(); // Call the getUserAuths method on initialization
  }

  getUserAuths(): void {
    this.userAuthService.find().subscribe(userAuths => this.userAuths = userAuths); // Subscribe to the service to get userAuths
  }
}
