import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  message: string = '';
  token: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  validatorUser() {
    if (!this.loginForm.valid) {
      return;
    }
    const credentials = {
      UserName: this.loginForm.value.userName,
      Password: this.loginForm.value.password,
    };
    this.authService
      .login(credentials)
      .pipe(
        switchMap((response) => {
          this.token = response.Token;
          return this.authService.makeAuthenticatedRequest(this.token);
        })
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigateByUrl('/home');
        },
        error: (error) => {
          Swal.fire('Incorrect username or password, try again');
        },
      });
  }
}
