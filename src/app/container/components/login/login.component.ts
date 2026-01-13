import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: {
    email: string,
    password: string,
  } = { email: "", password: "" };
  constructor(private loginService: LoginService) {
  }
  onInputEmail(event: any) {
    this.user.email = event.target.value;
  }
  onLogin() {
    this.loginService.onLogin(this.user.email, this.user.password);
  }
}
