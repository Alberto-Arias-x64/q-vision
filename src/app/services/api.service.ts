import type { costumer } from '../interfaces/costumer.interface';
import { environment } from '../../environments/environment';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mockCostumers } from '../mock/api.mock';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly _http = inject(HttpClient);

  apiCall<T>(url: string): Observable<T> {
    return this._http.get<T>(environment.API_URL + url);
  }

  createCostumer(data: costumer): Observable<any> {
    // return this._http.post<any>(environment.API_URL + 'costumers', data);
    return new Observable()
  }

  getCostumers(): Observable<costumer[]> {
    // return this._http.get<any>(environment.API_URL + 'costumers');
    return of([...mockCostumers]);
  }
}
