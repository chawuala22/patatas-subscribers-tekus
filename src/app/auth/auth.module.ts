import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

/* Both the routes and their module are modularized to allow for scalability in the project and to maintain order, applying SOLID */

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
