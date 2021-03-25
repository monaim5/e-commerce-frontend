import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private api: ApiService) { }
  getAll(): Observable<any>{
    return this.api.get<Product[]>('/products');
  }

  getHotPicks(): Observable<any> {
    const params = new HttpParams()
      .set('sortBy', 'sales')
      .set('pageSize', '2');
    return this.api.get<Product[]>('/products', params);
  }

  getByCategory(category: string): Observable<any>{
    const params = new HttpParams()
      .set('category', category);
    return this.api.get<Product[]>('/products', params);
  }

  create(product: Product): Observable<any> {
    return this.api.post<Product>('/products', product);
  }

  delete(id: number): Observable<any> {
    return this.api.delete<number>('/products', id);
  }

  getById(id: number): Observable<any> {
    return this.api.get(`/products/${id}`);
  }

  getByTitleContains(q: string): Observable<any> {
    const params = new HttpParams()
      .set('q', q);
    return this.api.get('/products', params);
  }

  update(product: Product): Observable<any> {
    return this.api.put('/products', product);
  }
}
