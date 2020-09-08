import { Injectable } from '@angular/core';

export const darkTheme = {
  'header-bg': '#e5e5e5',
  'heading-color': '#ccd1da',
  'primary-color': '#2d2d2d',
  'background-color': '#1f2935',
  'text-color': '#e5e5e5',
};

export const lightTheme = {
  'primary-color': '#fff',
  'background-color': '#e5e5e5',
  'text-color': '#2d2d2d',
  'header-bg': '#1f2935',
  'heading-color': '#4285F4'
};

@Injectable({ providedIn: 'root' })
export class ThemeService {

  toggleDark(): void {
    this.setTheme(darkTheme);
  }

  toggleLight(): void {
    this.setTheme(lightTheme);
  }

  public setTheme(theme: {}): void {
    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}
