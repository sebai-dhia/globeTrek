import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-up',
  templateUrl: './scroll-up.html',
  styleUrls: ['./scroll-up.css']
})
export class ScrollUp {

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollUp = document.getElementById('scroll-up');
    if (scrollUp) {
      window.scrollY >= 350
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
    }
  }

}
