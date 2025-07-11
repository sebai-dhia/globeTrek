import { Injectable } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Injectable({ providedIn: 'root' })
export class Animation {
  runScrollReveal() {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 300
    });

    sr.reveal('.home__container, .testimonial__container, .footer__container');
    sr.reveal('.home__title', {delay: 300});
    sr.reveal('.home__description', {delay: 600});
    sr.reveal('.home__data .button', {delay: 1200});
    sr.reveal('.destination__card, .gallery__card', {interval: 100});
    sr.reveal('.join__data', {origin: 'left'});
    sr.reveal('.join__img', {origin: 'right'});
  }
}