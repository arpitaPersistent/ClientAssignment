import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set dark theme', () => {
    spyOn(service, 'toggleDark').and.callThrough();
    expect(service.toggleDark()).toBeFalsy();
  });

  it('should set light themes', () => {
    spyOn(service, 'toggleLight').and.callThrough();
    expect(service.toggleLight()).toBeFalsy();
  });

  it('should set themes', () => {
    const theme = {
      'primary-color': '#fff',
    };
    spyOn(service, 'setTheme').and.callThrough();
    expect(service.setTheme(theme)).toBeFalsy();
  });
});
