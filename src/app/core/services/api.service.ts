import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`, {params});
      // .pipe(catchError(err => err));
  }

  post(path, payload: any): Observable<any>{
    return this.http.post(`${environment.apiUrl}${path}`, payload, {responseType: 'text'});
  }

  delete(){}
}
