import { Injectable, signal } from '@angular/core';
import { Theme } from '../models/theme.model';
import { effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // Always default to light/white with blue color
  public theme = signal<Theme>({ mode: 'light', color: 'blue' });

  constructor() {
    effect(() => {
      this.setTheme();
    });
  }

  private setTheme() {
    this.setThemeClass();
  }

  public get isDark(): boolean {
    return this.theme().mode === 'dark';
  }

  private setThemeClass() {
    const html = document.querySelector('html')!;
    html.className = 'light'; // Always white
    html.setAttribute('data-theme', 'blue');
  }
}
