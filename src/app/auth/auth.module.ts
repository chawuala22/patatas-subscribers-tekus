import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
/* Imports Angular Material */
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

/* Both the routes and their module are modularized to allow for scalability in the project and to maintain order, applying SOLID */

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    MatInputModule,
    MatButtonModule
  ]
})
export class AuthModule { }
