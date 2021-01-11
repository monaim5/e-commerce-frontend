import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ApiService {
  host: string = environment.apiUrl + '/api';
  constructor(private http: HttpClient) { }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.host}${path}`, {params});
      // .pipe(catchError(err => err));
  }

  getById(path: string, id: number): Observable<any> {
    return this.http.get(this.host + path + id);
  }

  post(path, payload: any): Observable<any> {
    return this.http.post(`${this.host}${path}`, payload, {responseType: 'text'});
  }

  put(path, payload: any): Observable<any> {
    return this.http.put(`${this.host}${path}`, payload, {responseType: 'text'});
  }

  delete(path: string, id: number | string): Observable<any> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.delete(this.host + path, {params});
  }
}
