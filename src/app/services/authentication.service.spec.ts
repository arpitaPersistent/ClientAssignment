import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { TokenStorageService } from './token.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { map } from 'rxjs/operators';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let tokenService: TokenStorageService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ HttpClientModule, HttpClientTestingModule ],
      providers: [ AuthenticationService, TokenStorageService]});
    service = TestBed.inject(AuthenticationService);
    tokenService = TestBed.inject(TokenStorageService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(
    'should be login', () => {
        const mockUsers = { email: 'testingT@gmail.com', password: 'testing' };
        service.login(mockUsers.email, mockUsers.password);

      /*   const mockReq = httpMock.expectOne(environment.apiUrl);
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toBeTruthy();
        mockReq.flush(mockUsers);

        httpMock.verify(); */
  });

  it('Should be login', () => {
    const email = 'testingT@gmail.com';
    const password = 'testing';

    const testing = service.login(email, password);
   // const testing = tokenService.getToken();
    expect(testing).toBeTruthy();

  });

  it('Should be logout', () => {
    const email = 'testingT@gmail.com';
    const password = 'testing';

    service.login(email, password);
    service.logout();
    const testing = tokenService.getToken();
    expect(testing).toBeNull();
  });

  it('Should be register a user', () => {
    const form = {
      firstName: 'test',
      lastName: 'test',
      email: 'testT@gmail.com',
      password: 'test123'
    };

    const testing = service.register(form);
    expect(testing).toBeTruthy();
  });

  it('Should get all user', () => {
      const test = service.getAll();
      expect(test).toBeTruthy();
  });

  it('Should be login', () => {
      const test = service.getById('1');
      expect(test).toBeTruthy();
  });

});
