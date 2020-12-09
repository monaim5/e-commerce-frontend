import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {SignupPayload} from "../models/signup-payload.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }

  signup(signupPayload: SignupPayload): Observable<any>{
    return this.apiService.post('/auth/signup', signupPayload);
  }
}
