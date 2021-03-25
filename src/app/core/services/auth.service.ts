import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {SignupPayload} from '../models/signup-payload.model';
import {Observable} from 'rxjs';
import {SigninPayload} from '../models/signin-payload.model';
import {catchError, map, tap} from 'rxjs/operators';
import {AuthenticationResponse} from '../models/authentication-response.model';
import {LocalStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apiService: ApiService,
              private localStorage: LocalStorageService) { }

  private static storeAuthData(response: AuthenticationResponse): void{
    localStorage.setItem('authenticationToken', response.authenticationToken);
    localStorage.setItem('refreshToken', response.refreshToken);
    localStorage.setItem('username', response.username);
    // localStorage.setItem('expiresAt', response.expiresAt.format());
  }

  private static getUsername(): string {
    return localStorage.getItem('username');
  }

  private static getRefreshToken(): string {
    return localStorage.getItem('refreshToken');
  }

  signup(signupPayload: SignupPayload): Observable<any>{
    return this.apiService.post<string>('/auth/signup', signupPayload);
  }

  signin(signinPayload: SigninPayload): Observable<any>{
    return this.apiService.post<AuthenticationResponse>('/auth/signin', signinPayload).pipe(
      tap(AuthService.storeAuthData)
    );
  }

  getJwtToken(): string {
    return localStorage.getItem('authenticationToken');
  }

  refreshToken(): Observable<any> {
    const refreshTokenPayload = {
      refreshToken: AuthService.getRefreshToken(),
      username: AuthService.getUsername()
    };
    return  this.apiService.post<AuthenticationResponse>('/auth/refreshToken', refreshTokenPayload)
      .pipe(tap(AuthService.storeAuthData));
  }
}
