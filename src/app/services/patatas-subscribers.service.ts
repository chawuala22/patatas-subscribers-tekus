import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISubscriber } from '../interfaces/subscriber';

@Injectable({
  providedIn: 'root',
})
export class PatatasSubscribersService {
  urlBase = 'https://lab.app.invertebrado.co/api/';

  constructor(private _httpClient: HttpClient) {}

  createSubscriptor(data: ISubscriber) {
    return this._httpClient.post<ISubscriber>(
      `${this.urlBase}subscribers/`,
      data
    );
  }

  getAllSubscriptor(page?: number, pageSize?: number) {
    let params = new HttpParams();
    if (page !== undefined && pageSize !== undefined) {
      params = params.set('page', page);
      params = params.set('pageSize', pageSize);
    }
    return this._httpClient.get<ISubscriber>(`${this.urlBase}subscribers/`, {
      params,
    });
  }

  getSubscriptor(id: number) {
    return this._httpClient.get<ISubscriber>(
      `${this.urlBase}subscribers/${id}`
    );
  }

  updateSubscriptor(data: ISubscriber, id: number) {
    return this._httpClient.put<ISubscriber>(
      `${this.urlBase}subscribers/` + id,
      data
    );
  }

  deleteSubscriptor(id: number) {
    return this._httpClient.delete<ISubscriber>(
      `${this.urlBase}subscribers/` + id
    );
  }
}
