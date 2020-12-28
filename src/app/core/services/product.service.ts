import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';
import {map} from 'rxjs/operators';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private api: ApiService) { }
  getAll(): Observable<any>{
    return this.api.get('/products');
  }
  getByCategory(category: string): Observable<any>{
    const params = new HttpParams()
      .set('category', category);
    return this.api.get('products', params);
  }
  // get(id: number): Observable<Product> {
  //   return this.api.get('/products/' + id);
  // }
}
