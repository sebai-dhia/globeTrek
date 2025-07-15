import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class Theme {
  private darkTheme = 'dark-theme';
  private iconTheme = 'ri-sun-fill';

  toggleTheme() {
    const isDark = document.body.classList.toggle(this.darkTheme);
    const themeButton = document.getElementById('theme-button');
    if (themeButton) {
      themeButton.classList.toggle(this.iconTheme);
    }
    localStorage.setItem('selected-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('selected-icon', isDark ? 'ri-moon-fill' : 'ri-sun-fill');
  }

  initializeTheme() {
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');
    
    if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](this.darkTheme);
      const themeButton = document.getElementById('theme-button');
      if (themeButton) {
        themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](this.iconTheme);
      }
    }
  }
}