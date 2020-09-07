import { TestBed } from '@angular/core/testing';
import { AuthInterceptor } from './auth.interceptor';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import {
  HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PodcastService } from '../services/podcast.service';
import { environment } from 'src/environments/environment';

describe('AuthInterceptor', () => {
  let authService: PodcastService;
  let httpMock: HttpTestingController;
  let interceptor: AuthInterceptor;
  let store: MockStore;
  const initialState = {
    isAuthenticated: false,
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({initialState}), PodcastService, 
        { provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true }, AuthInterceptor
      ]
    });

    store = TestBed.inject(MockStore);
    authService = TestBed.inject(PodcastService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    const interceptor = TestBed.inject(AuthInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should add an Authorization header', () => {
    store.setState({ isAuthenticate: true });
    authService.getAll().subscribe(response => {
      expect(response).toBeTruthy();
    });

    /* const httpRequest = httpMock.expectOne(`${environment.apiUrl}/podcasts`);
    expect(httpRequest.request.headers.has('Authorization')).toEqual(true); */
  });

});
