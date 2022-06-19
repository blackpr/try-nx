import { Component } from '@angular/core';
import { UserInfo } from '@tim/api-interfaces';

@Component({
  selector: 'tim-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userInfo: UserInfo = {
    email: '',
    password: '',
  };

  constructor() {}

  login(userInfo: UserInfo) {}
}
