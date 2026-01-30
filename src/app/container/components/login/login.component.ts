import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user: {
    email: string,
    password: string,
  } = { email: "", password: "" };
  constructor(private mainService: MainService) {
  }
  onInputEmail(event: any) {
    this.user.email = event.target.value;
  }
  onLogin() {
    this.mainService.onLogin(this.user.email, this.user.password);
  }
}
