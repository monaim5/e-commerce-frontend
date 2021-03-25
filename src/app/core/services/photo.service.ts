import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';
import {map} from 'rxjs/operators';
import {HttpClient, HttpEvent, HttpEventType, HttpParams} from '@angular/common/http';
import {Photo} from "../models/photo.model";
import {ServerPayload} from "../models/server-payload.model";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private api: ApiService,
              private httpClient: HttpClient) { }

  getFirstPhoto(id): string{
    return this.api.host + '/photos/' + id;
  }

  upload(file: File): Observable<any>{
    const formData = new FormData();
    formData.append('file', file);

    return this.httpClient.post<ServerPayload<Photo>>(this.api.host + '/photos/',
      formData,
      {reportProgress: true, observe: 'events'})
      .pipe(map((event: HttpEvent<any>) => {
      switch (event.type) {
        case(HttpEventType.UploadProgress):
          return Math.round((event.loaded / event.total) * 100);
        case (HttpEventType.Response):
          console.log(event);
          return event;
      }}));
  }

}
