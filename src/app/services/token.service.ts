import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  // clear all the storage data on logout
  signOut(): void {
    window.sessionStorage.clear();
  }

  // store token data
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  // get token data
  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  // store user data
  public saveUser(user): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  // get user data
  public getUser(): string {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

}
