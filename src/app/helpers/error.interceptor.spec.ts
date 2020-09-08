import { TestBed } from '@angular/core/testing';

import { ErrorInterceptor } from './error.interceptor';
import { HttpClientModule } from '@angular/common/http';

describe('ErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ],
    providers: [
      ErrorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor = TestBed.inject(ErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
