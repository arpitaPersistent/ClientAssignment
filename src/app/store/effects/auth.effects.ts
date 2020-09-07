import { Injectable } from '@angular/core';

import { Actions, ofType, Effect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as authActions from '../actions/auth.actions';
import { Observable, of } from 'rxjs';

import { AuthenticationService } from '../../services/authentication.service';
import {
  AuthActionTypes
} from '../actions/auth.actions';


@Injectable()
export class AuthEffects {
  constructor(
    private actions: Actions,
    private authService: AuthenticationService,
    private router: Router,
  ) {}

  @Effect()
  LogIn: any = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN),
    mergeMap((action: authActions.LogIn) =>
      this.authService.login(action.payload.email, action.payload.password)
        .pipe(
          map((user) => new authActions.LogInSuccess(user)
        ), catchError(errorRes => {
           return of (new authActions.LogInFailure(errorRes));
        }))
  ));

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    map((user) => {
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  LogInFailure: any = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE)
  );

  @Effect()
  SignUp: any = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP),
    mergeMap((action: authActions.SignUp) =>
      this.authService.register(action.payload.form)
        .pipe(
          map((user) => new authActions.SignUpSuccess(user)
        ), catchError(errorRes => {
           return of (new authActions.SignUpFailure(errorRes));
        }))
  ));

  @Effect({ dispatch: false })
  SignUpSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_SUCCESS),
    map((user) => {
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  SignUpFailure: any = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_FAILURE)
  );

  @Effect({ dispatch: false })
  LogOut: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGOUT),
    map((user) => {
      this.authService.logout();
      this.router.navigate(['/login']);
    })
  );
}
