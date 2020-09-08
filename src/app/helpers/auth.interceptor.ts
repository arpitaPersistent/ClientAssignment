import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../services/token.service';
import { selectAuthState } from '../store/app.states';
import { Store } from '@ngrx/store';


const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  getState: any;
  isAuthenticated: any;
  constructor(private token: TokenStorageService, private store: Store) {
    { this.getState = this.store.select(selectAuthState); }
  }

  // Intercepter for token
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
    });

    let authReq = req;
    const token = this.token.getToken();

    if (!this.isAuthenticated) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }

    return next.handle(authReq);
  }
}
