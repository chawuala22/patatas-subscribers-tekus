import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlBase = 'https://lab.app.invertebrado.co/api/account/login';
  private authenticated: boolean = false;

  constructor(private _httpClient: HttpClient, private cookieService: CookieService) { }

  login(credentials: any): Observable<any> {
    return this._httpClient.post(this.urlBase, credentials);
  }

  makeAuthenticatedRequest(token: string): Observable<any> {
    this.authenticated = true;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.cookieService.set('authToken',token)
    return this._httpClient.get(this.urlBase, { headers });
  }

  isAuthenticated(): boolean {
    return this.cookieService.check('authToken');
  }
  logout(): void {
    this.cookieService.delete('authToken');
  }
}
