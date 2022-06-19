import { Component } from '@angular/core';
import { UserInfo } from '@tim/api-interfaces';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'tim-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userInfo: UserInfo = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  login(userInfo: UserInfo) {
    this.authService.login(userInfo);
  }
}
