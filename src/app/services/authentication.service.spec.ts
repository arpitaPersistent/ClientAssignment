import { TestBed, inject  } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { TokenStorageService } from './token.service';
import { environment } from 'src/environments/environment';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import * as jwt_decode from 'jwt-decode';
const dummyUsers = [
  {
    id: 3,
    email: 'testingT@gmail.com',
    password: 'testing',
  },
];

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let tokenService: TokenStorageService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ HttpClientTestingModule ],
      providers: [ AuthenticationService]});

    service = TestBed.inject(AuthenticationService);
    tokenService = TestBed.inject(TokenStorageService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(inject(
    [AuthenticationService, HttpTestingController],
    (serviceInstance, httpMockInstance) => {
      service = serviceInstance;
      httpMock = httpMockInstance;
    }
  ));

  it('should be created', () => {
    const authService = TestBed.inject(AuthenticationService);
    expect(authService).toBeTruthy();
  });

  it('login: should return an array containing the valid user', () => {
    const authService = TestBed.inject(AuthenticationService);
    const mockCheckLoginUser = {
      id: 3,
      email: 'testingT@gmail.com',
      password: 'testing',
    };
    authService.login(mockCheckLoginUser.email, mockCheckLoginUser.password)
      .subscribe((user) => {
        this.tokenStorage.saveToken(user.accessToken);
        const decoded = jwt_decode(user.accessToken);
        this.tokenStorage.saveUser(decoded);

        expect(user).toBeDefined();
        expect(decoded.sub).toBe(3);
        expect(user.length).toBe(1);
        expect(user.accessToken).not.toBeNull();
        expect(this.tokenStorage.saveUser(decoded)).toBe(decoded);
      });
    const req = httpMock.expectOne(`${environment.apiUrl}/login`);
    req.flush(dummyUsers);
    httpMock.verify();
  });

  it('signup: should return an array containing the valid user', () => {
    const authService = TestBed.inject(AuthenticationService);
    const mockCheckLoginUser = {
      firstname: 'new',
      lastname: 'one',
      email: 'new@gmail.com',
      password: 'newOne',
    };
    authService.register(mockCheckLoginUser).subscribe((user) => {      
      this.tokenStorage.saveToken(user.accessToken);
      const decoded = jwt_decode(user.accessToken);
      this.tokenStorage.saveUser(decoded);

      expect(user).toBeDefined();
      expect(decoded.sub).toBe(3);
      expect(user.length).toBe(1);
      expect(user.accessToken).not.toBeNull();
      expect(this.tokenStorage.saveUser(decoded)).toBe(decoded);
    });
    const req = httpMock.expectOne(`${environment.apiUrl}/users/`);
    req.flush(dummyUsers);
    httpMock.verify();
  });

  it('Should be logout', () => {
    const authService = TestBed.inject(AuthenticationService);
    const mockCheckLoginUser = {
      id: 3,
      email: 'testingT@gmail.com',
      password: 'testing',
    };
    const res = authService.logout();
    expect(res).not.toBeDefined();
    
  });

  it('getById: should return a Podcast by given id', () => {
    const authService = TestBed.inject(AuthenticationService);
    authService.getById('1').subscribe((user) => {
      expect(user.id).toBe(1);
    });
    const req = httpMock.expectOne(`${environment.apiUrl}/users/1`);
    req.flush(dummyUsers);
    httpMock.verify();
  });

  it('getAllPodcasts: should return a list of Podcast', () => {
    const authService = TestBed.inject(AuthenticationService);
    authService.getAll().subscribe((user) => {
      expect(user).toBeDefined();
      expect(user.length).toBe(1);
      const req = httpMock.expectOne(`${environment.apiUrl}/users/`);
      req.flush(dummyUsers);
      httpMock.verify();
    });
  });




});
