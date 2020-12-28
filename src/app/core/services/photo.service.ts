import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';
import {map} from 'rxjs/operators';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private api: ApiService) { }
  getFirstPhoto(id): string{
    return this.api.host + '/photos/' + id;
  }
}
