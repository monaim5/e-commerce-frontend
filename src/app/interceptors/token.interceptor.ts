import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {AuthService} from '../core/services/auth.service';
import {catchError, filter, map, switchMap, take, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthenticationResponse} from "../core/models/authentication-response.model";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  isTokenRefreshing = false;
  refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private authService: AuthService,
              private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url.indexOf('refreshToken') !== -1 || request.url.indexOf('signin') !== -1) {
      return next.handle(request).pipe(
        catchError(err => {
          if (err.status === 401) {
            this.handleForbiddenError();
            return throwError(err);
          }
          else {
            return throwError(err);
          }
        })
      );
    }

    const token = this.authService.getJwtToken();

    if (token) {
      request = this.addToken(request, token);
    }

    return next.handle(request).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse && err.status === 403) {
          this.handleForbiddenError();
          return throwError(err);
        }
        else if (err instanceof HttpErrorResponse && err.status === 401) {
          return this.handleInvalidTokenError(request, next);
        }
        else {
          return throwError(err);
        }
      }));
  }

  handleInvalidTokenError(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (this.isTokenRefreshing) {
      return this.refreshTokenSubject.pipe(
        filter(value => value != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        })
      );
    }
    else {
      this.isTokenRefreshing = true;
      this.refreshTokenSubject.next(null);
      return this.authService.refreshToken().pipe(
        switchMap((value: AuthenticationResponse) => {
          this.isTokenRefreshing = false;
          this.refreshTokenSubject.next(value.authenticationToken);
          return next.handle(this.addToken(request, value.authenticationToken));
        })
      );
    }
  }

  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      headers: request.headers.set('authorization', 'Bearer ' + token)
    });
  }

  private handleForbiddenError(): void {
    this.router.navigate(['signin']);
  }

}
