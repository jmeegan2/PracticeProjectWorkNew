import { Component } from '@angular/core';
import { UserCredentials } from 'src/app/api/models/user-credentials';
import { Router } from '@angular/router';

import { UserCredentialsControllerService } from 'src/app/api/services/user-credentials-controller.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent {

  userAuths: UserCredentials[] = [];
  username: string = '';
  password: string = '';

  constructor(
    private userAuthService: UserCredentialsControllerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserAuths();
  }

  getUserAuths(): void {
    this.userAuthService.find().subscribe(userAuths => this.userAuths = userAuths);
  }

  login(): void {
    const foundUser = this.userAuths.find(user => user.username === this.username && user.password === this.password);
    
    if (foundUser) {
      console.log('Valid'); // Username and password match
      // You can perform additional actions here, such as setting authentication status or redirecting to a different page.
    } else {
      console.log('False'); // Username and password do not match
    }
  }
}

