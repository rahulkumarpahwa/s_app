import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {

  isDropDownHidden = true;
  onProfileClick() {
    this.isDropDownHidden = !this.isDropDownHidden;
  }

  user: any;
  constructor(private mainService: MainService) {
    this.mainService.user$.subscribe((res) => {
      this.user = res;
    });
  }
}
