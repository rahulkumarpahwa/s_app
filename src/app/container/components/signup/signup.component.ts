import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  user: {
    firstname?: string, //? -> shows optional
    lastName?: string,
    email: string,
    password: string,
    mobile?: string,
    pin?: number,
  } = { firstname: "", lastName: "", email: "", password: "", mobile: "", pin: 0 };

}
