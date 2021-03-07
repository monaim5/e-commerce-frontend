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

  private storeAuthData(response: AuthenticationResponse): void{
    localStorage.setItem('authenticationToken', response.authenticationToken);
    localStorage.setItem('refreshToken', response.refreshToken);
    localStorage.setItem('username', response.username);
    // localStorage.setItem('expiresAt', response.expiresAt.format());
  }

  signup(signupPayload: SignupPayload): Observable<any>{
    return this.apiService.post('/auth/signup', signupPayload);
  }

  signin(signinPayload: SigninPayload): Observable<AuthenticationResponse>{
    return this.apiService.post('/auth/signin', signinPayload).pipe(
      tap(this.storeAuthData)
    );
  }

  getJwtToken(): string {
    return localStorage.getItem('authenticationToken');
  }

  private getUsername(): string {
    return localStorage.getItem('username');
  }

  private getRefreshToken(): string {
    return localStorage.getItem('refreshToken');
  }

  refreshToken(): Observable<AuthenticationResponse> {
    const refreshTokenPayload = {
      refreshToken: this.getRefreshToken(),
      username: this.getUsername()
    };
    return  this.apiService.post('/auth/refreshToken', refreshTokenPayload).pipe(tap(this.storeAuthData));
  }
}
