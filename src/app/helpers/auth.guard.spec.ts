import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { selectAuthState, AppState } from '../store/app.states';
import { Store } from '@ngrx/store';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let store: Store<AppState>;
  let storemock: MockStore;
   
  const initialState = {
    isAuthenticated: false,
  }
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [],
      providers: [provideMockStore({initialState})]});
    
    storemock = TestBed.inject(MockStore);
    guard = TestBed.inject(AuthGuard);
    
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return false if the user state is not logged in', () => {
    const expected = false;
    expect(guard.canActivate()).toBe(expected);
  });
 
  it('should return true if the user state is logged in', () => {
    guard.isAuthenticated = true;
    const expected = true;
    expect(guard.canActivate()).toBe(expected);
  });
});
