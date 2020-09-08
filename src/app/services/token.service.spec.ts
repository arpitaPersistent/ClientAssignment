import { TestBed } from '@angular/core/testing';

import { TokenStorageService } from './token.service';

describe('TokenService', () => {
  let service: TokenStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenStorageService);
  });

  it('should be created', () => {
    expect(service.saveToken('test12121221')).toBeUndefined();
    window.sessionStorage.removeItem('auth-token');
  });

  it('should get token', () => {
    window.sessionStorage.setItem('auth-token', 'test1212121');
    expect(service.getToken()).toEqual('test1212121');
    window.sessionStorage.removeItem('auth-token');
  });

  it('should be created', () => {
    expect(service.saveUser(JSON.stringify({sub:1, email: 'test@SpeechGrammarList.com'}))).toBeUndefined();
    window.sessionStorage.removeItem('auth-user');
  });

  it('should get token', () => {
    window.sessionStorage.setItem('auth-user', JSON.stringify({sub:1, email: 'test@SpeechGrammarList.com'}));
    expect(service.getUser()).not.toBeNull();
    window.sessionStorage.removeItem('auth-user');
  });
});
