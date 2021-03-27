import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Promo} from '../models/promo.model';
import {HttpParams} from '@angular/common/http';
import {PromoType} from '../models/promo-type.model';
import {Payload} from '../models/payload.model';
import {DataSet} from "../models/custom.type";

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor(private api: ApiService) { }

  getById(id: number): Observable<any> {
    return this.api.get<Promo>(`/promos/${id}`);
  }

  getAll(): Observable<any> {
    return this.api.get<Promo[]>('/promos');
  }

  create(promo: Promo): Observable<any> {
    return this.api.post<Promo>('/promos', promo);
  }

  delete(id: number): Observable<any> {
    return this.api.delete<number>( '/promos', id);
  }

  getTypes(): Observable<Payload<PromoType[]>> {
    return this.api.get<PromoType[]>('/promos/types');
  }

  update(promoPayload: Promo): DataSet<Promo> {
    return this.api.put<Promo>('/promos/' + promoPayload.id, promoPayload);
  }

  createPromoType(promoType: PromoType): Observable<any> {
    return this.api.post<PromoType>('/promos/types', promoType);
  }

  updatePromoType(promoTypePayload: PromoType): DataSet<PromoType> {
    return this.api.put<PromoType>(`/promos/types/${promoTypePayload.id}`, promoTypePayload);
  }

  deletePromoType(name: string): Observable<any> {
    return this.api.delete<number>( '/promos/types', name);
  }

  getPromoByPromoType(promoType: string): Observable<any> {
    const params = new HttpParams()
      .set('promoType', promoType);
    return this.api.get<Promo[]>('/promos', params);
  }
}
