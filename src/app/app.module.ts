import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { ContainerComponent } from './container/container.component';
import { LoginComponent } from './container/components/login/login.component';
import { ShowComponent } from './container/components/show/show.component';
import { HomeComponent } from './container/home/home.component';
import { SignupComponent } from './container/components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    LoginComponent,
    ShowComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
