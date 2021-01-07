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

  getHotPicks(): Observable<any> {
    const params = new HttpParams()
      .set('sortBy', 'sales')
      .set('pageSize', '2');
    return this.api.get('/products', params);
  }

  getByCategory(category: string): Observable<any>{
    const params = new HttpParams()
      .set('category', category);
    return this.api.get('/products', params);
  }

  create(product: Product): Observable<any> {
    return this.api.post('/products', product);
  }
  // get(id: number): Observable<Product> {
  //   return this.api.get('/products/' + id);
  // }
  delete(id: number): Observable<any> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.api.delete('/products', params);
  }

  get(id: number): Observable<any> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.api.get('/products', params);
  }

  edit(product: Product): Observable<any> {
    return this.api.put('/products', product);
  }
}
