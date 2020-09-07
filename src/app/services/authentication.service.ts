import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { TokenStorageService } from './token.service';
import * as jwt_decode from 'jwt-decode';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
  }

  // Login function
  login(email: string, password: string): any {
    return this.http.post<any>(`${environment.apiUrl}/login`, { email, password }, httpOptions )
      .pipe(map(user => {
        // store user details and jwt token in seesion storage to keep user logged in between page refreshes
        this.tokenStorage.saveToken(user.accessToken);
        const decoded = jwt_decode(user.accessToken);
        this.tokenStorage.saveUser(decoded);
        return decoded;
      }));
  }

  // Logout function for user
  logout(): void {
    this.tokenStorage.signOut();
  }

  // for register new user
  register(user: User): any {
    return this.http.post<any>(`${environment.apiUrl}/users/`, user, httpOptions )
    .pipe(map((res: any) => {
      // store user details and jwt token in seesion storage to keep user logged in between page refreshes
      this.tokenStorage.saveToken(res.accessToken);
      const decoded = jwt_decode(res.accessToken);
      this.tokenStorage.saveUser(decoded);
      return decoded;
    })
    );
  }


  // Fetch All users
  getAll(): any {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  // Fetch user by id
  getById(id: string): any {
      return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }
}
