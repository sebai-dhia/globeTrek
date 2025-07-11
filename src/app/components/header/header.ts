import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header implements OnInit {
  menuVisible = false;
  isDarkTheme = false;
  activeSection: string = 'home';
  scrollHeader = false;

  ngOnInit() {
    // Check if theme is saved in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkTheme = true;
      document.body.classList.add('dark-theme');
    }
  }

  openMenu() {
    this.menuVisible = true;
  }

  closeMenu() {
    this.menuVisible = false;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    
    // Save theme preference
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL without hash
      history.pushState(null, '', `/${sectionId}`);
      // Close mobile menu after navigation
      this.closeMenu();
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    // Change header background on scroll
    const header = document.getElementById('header');
    if (header) {
      this.scrollHeader = window.scrollY >= 50;
      header.classList.toggle('bg-header', this.scrollHeader);
    }

    // Update active section
    const sections = ['home', 'destination', 'testimonial', 'gallery', 'join'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}
