import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let store: MockStore;
  const initialState = {
    isAuthenticated: false,
  }
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [],
      providers: [provideMockStore({initialState})]});
    
    store = TestBed.inject(MockStore);
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
    store.setState({ isAuthenticate: true });
    const expected = true;
    expect(guard.canActivate()).toBe(expected);
  });
});
