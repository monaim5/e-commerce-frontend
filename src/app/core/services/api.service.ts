import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map, startWith, tap} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ExceptionDto} from '../models/ExceptionDto.model';
import {Payload} from '../models/payload.model';
import {DataStat} from '../enums/data-stat.enum';
import {ServerPayload} from '../models/server-payload.model';

@Injectable()
export class ApiService {
  // Photo service -> upload() dont use this service
  host: string = environment.apiUrl + '/api';
  constructor(private http: HttpClient,
              private snackBar: MatSnackBar) { }

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<Payload<T>> {
    return this.http.get<ServerPayload<T>>(`${this.host}${path}`, {params}).pipe(
      tap(x => {
        this.snackBar.open(x.message, '', {duration: 5000});
      }),
      map(value => ({stat: DataStat.LOADED, data: value.data, message: value.message})),
      startWith({stat: DataStat.LOADING}),
      catchError(err => of({stat: DataStat.ERROR, error: err.error}))
    );
  }

  post<T>(path, payload: any): Observable<any> {
    return this.http.post<ServerPayload<T>>(`${this.host}${path}`, payload);
  }

  put<T>(path, payload: any): Observable<any> {
    return this.http.put<ServerPayload<T>>(`${this.host}${path}`, payload);
  }

  delete<T>(path: string, id: number | string): Observable<any> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.delete<ServerPayload<T>>(this.host + path, {params});
  }
}
