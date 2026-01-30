import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './container/components/header/header.component';
import { LoginComponent } from './container/components/login/login.component';
import { HomeComponent } from './container/home/home.component';
import { SignupComponent } from './container/components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { ProfileComponent } from './container/profile/profile.component';
import { DropdownComponent } from './container/components/dropdown/dropdown.component';
import { FooterComponent } from './container/components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './container/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    DashboardComponent,
    ProfileComponent,
    DropdownComponent,
    FooterComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
