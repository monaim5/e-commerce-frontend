import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';
import {map} from 'rxjs/operators';
import {HttpClient, HttpEvent, HttpEventType, HttpParams} from '@angular/common/http';
import {Photo} from "../models/photo.model";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private api: ApiService,
              private httpClient: HttpClient) { }
  getFirstPhoto(id): string{
    return this.api.host + '/photos/' + id;
  }

  upload(photo: Photo): Observable<any>{
    const formData = new FormData();
    formData.append('file', photo.file);
    formData.append('title', 'hello title');
    formData.append('id', '1235');

    return this.httpClient.post(this.api.host + '/photos/',
      formData,
      {reportProgress: true, observe: 'events'});
  }

}
