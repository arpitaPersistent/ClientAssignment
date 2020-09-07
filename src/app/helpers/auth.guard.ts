import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAuthState } from '../store/app.states';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  getState: Observable<any>;
  isAuthenticated: boolean;
  constructor( private store: Store )
  { this.getState = this.store.select(selectAuthState); }

  // Canactivate route guard
  canActivate(): boolean {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
    });
    if (!this.isAuthenticated) {
      return false;
    }
    return true;
  }
}
