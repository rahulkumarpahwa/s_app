import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLogin = true;
  user: {
    firstname?: string, //? -> shows optional
    lastName?: string,
    email: string,
    password: string,
    mobile?: string,
    pin?: number,
  } = { firstname: "", lastName: "", email: "", password: "", mobile: "", pin: 0 };

  onLoginClick() {
    this.isLogin = true;
  }
  onSignupClick() {
    this.isLogin = false;
  }
}
