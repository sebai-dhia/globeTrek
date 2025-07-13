import { Component, AfterViewInit } from '@angular/core';
import { Swiper } from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements AfterViewInit {
  images = [
    'assets/img/home-img-1.webp',
    'assets/img/home-img-2.webp',
    'assets/img/home-img-3.webp',
    'assets/img/home-img-4.webp',
  ];

  ngAfterViewInit() {
    new Swiper('.home__swiper', {
      modules: [Navigation, Autoplay],
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });    
  }

  scrollToDestination() {
    const element = document.getElementById('destination');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
