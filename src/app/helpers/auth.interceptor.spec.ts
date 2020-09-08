
import { TestBed, inject } from '@angular/core/testing';
import { AuthInterceptor } from './auth.interceptor';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import {
  HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PodcastService } from '../services/podcast.service';
import { environment } from 'src/environments/environment';
import { Podcast } from '../models/podcast';

describe('AuthInterceptor', () => {
  let service: PodcastService;
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
    service = TestBed.inject(PodcastService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    const interceptor = TestBed.inject(AuthInterceptor);
    expect(interceptor).toBeTruthy();
  });

});
