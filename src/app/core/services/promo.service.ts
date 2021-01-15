import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {Promo, PromoType} from "../models/promo.model";
import {HttpParams} from "@angular/common/http";

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

  update(id: number, promoPayload: Promo): Observable<any> {
    return this.api.put('/promos/' + id, promoPayload);
  }

  createPromoType(promoType: PromoType): Observable<any> {
    return this.api.post('/promos/types', promoType);
  }

  updatePromoType(promoTypePayload: any): Observable<any> {
    return this.api.put('/promos/types', promoTypePayload);
  }

  deletePromoType(name: string): Observable<any> {
    return this.api.delete( '/promos/types', name);
  }

  getPromoByPromoType(promoType: string): Observable<Promo[]> {
    const params = new HttpParams()
      .set('promoType', promoType);
    return this.api.get('/promos', params);
  }
}
