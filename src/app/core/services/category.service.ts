import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Category} from '../models/category.model';
import {Payload} from '../models/payload.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private apiService: ApiService) { }

  getAll(): Observable<Payload<Category[]>> {
    return this.apiService.get<Category[]>('/category');
  }

  create(category: Category): Observable<Payload<Category>> {
    return this.apiService.post<Category>('/category', category);
  }

}
