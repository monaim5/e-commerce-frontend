import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {Promo, PromoType} from "../models/promo.model";

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor(private api: ApiService) { }

  getById(id: number): Observable<any> {
    return this.api.getById('/promos', id);
  }

  getAll(): Observable<any> {
    return this.api.get('/promos');
  }

  create(promo: Promo): Observable<any> {
    return this.api.post('/promos', promo);
  }

  delete(id: number): Observable<any> {
    return this.api.delete( '/promos', id);
  }

  getTypes(): Observable<any> {
    return this.api.get('/promos/types');
  }

  createPromoType(promoType: PromoType): Observable<any> {
    return this.api.post('/promos/types', promoType);
  }

  deletePromoType(name: string): Observable<any> {
    return this.api.delete( '/promos/types', name);
  }
}
