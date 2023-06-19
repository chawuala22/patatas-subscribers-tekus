import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResult, ISubscriber } from '../interfaces/subscriber';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PatatasSubscribersService {
  urlBase = 'https://lab.app.invertebrado.co/api/';

  constructor(
    private _httpClient: HttpClient,
    private cookieService: CookieService,
    private authService: AuthService
  ) {}

  createSubscriptor(data: ISubscriber[]) {
    this.authService.refreshToken();
    const token = this.cookieService.get('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this._httpClient.post<ISubscriber>(
      `${this.urlBase}subscribers`,
      { Subscribers: data },
      { headers }
    );
  }
  getAllSubscriptor(page?: number, pageSize?: number) {
    this.authService.refreshToken();
    const token = this.cookieService.get('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this._httpClient.get<IResult>(`${this.urlBase}subscribers/`, { headers });
  }
  getSubscriptor(id: number) {
    this.authService.refreshToken();
    const token = this.cookieService.get('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this._httpClient.get<ISubscriber>(
      `${this.urlBase}subscribers/${id}`,
      { headers }
    );
  }
  updateSubscriptor(data: ISubscriber[], id: number) {
    this.authService.refreshToken();
    const token = this.cookieService.get('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this._httpClient.put<ISubscriber>(
      `${this.urlBase}subscribers/` + id,
      data,
      { headers }
    );
  }
  deleteSubscriptor(id: number) {
    this.authService.refreshToken();
    const token = this.cookieService.get('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this._httpClient.delete<ISubscriber>(
      `${this.urlBase}subscribers/` + id,
      { headers }
    );
  }
}
