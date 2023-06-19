import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private apiAuth: AuthService, private router:Router){}

  logout(){
    this.apiAuth.logout();
    this.router.navigateByUrl('/login');
  }

}
