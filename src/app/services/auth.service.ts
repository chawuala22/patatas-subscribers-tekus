import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { ICredencial } from '../interfaces/subscriber'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlBase = 'https://lab.app.invertebrado.co/api/account/login';
  private authenticated: boolean = false;
  /* No endpoint found to refresh token */
  private credentials: ICredencial = {
    UserName: 'patata',
    Password: 'MrPotat0'
  };
  

  constructor(private _httpClient: HttpClient, private cookieService: CookieService) { }

  login(credentials: ICredencial): Observable<any> {
    return this._httpClient.post(this.urlBase, credentials);
  }

  makeAuthenticatedRequest(token: string): Observable<any> {
    this.authenticated = true;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.cookieService.set('authToken',token);
    return this._httpClient.get(this.urlBase, { headers });
  }
  isAuthenticated(): boolean {
    return this.cookieService.check('authToken');
  }
  logout(): void {
    this.cookieService.delete('authToken');
  }

 async refreshToken(){
   let refresh = (await firstValueFrom(this._httpClient.post<any>(this.urlBase, this.credentials))).Token;
   this.makeAuthenticatedRequest(refresh);
  }
}
