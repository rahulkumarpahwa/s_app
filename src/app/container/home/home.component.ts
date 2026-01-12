import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLogin = true;

  onLoginClick() {
    this.isLogin = true;
  }
  onSignupClick() {
    this.isLogin = false;
  }
}
