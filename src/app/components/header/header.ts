import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
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
  scrollHeader = false;
  private sectionIds = ['home', 'destination', 'testimonials', 'gallery', 'contact'];
  private isScrollingByClick = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Check if theme is saved in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkTheme = true;
      document.body.classList.add('dark-theme');
    }
    this.updateActiveLink();
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

  onNavClick(sectionId: string) {
    this.isScrollingByClick = true;
    this.setActiveLink(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.closeMenu();
    setTimeout(() => {
      this.isScrollingByClick = false;
    }, 800); // Adjust timeout to match scroll duration
  }

  setActiveLink(sectionId: string) {
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${sectionId}`) {
        this.renderer.addClass(link, 'active-link');
      } else {
        this.renderer.removeClass(link, 'active-link');
      }
    });
  }

  updateActiveLink() {
    let currentSectionId = this.sectionIds[0];
    for (const id of this.sectionIds) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80) {
          currentSectionId = id;
        }
      }
    }
    this.setActiveLink(currentSectionId);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    // Always update header background
    const header = document.getElementById('header');
    if (header) {
      this.scrollHeader = window.scrollY >= 50;
      header.classList.toggle('bg-header', this.scrollHeader);
    }
    // Only update active link if not scrolling by click
    if (!this.isScrollingByClick) {
      this.updateActiveLink();
    }
  }
}
