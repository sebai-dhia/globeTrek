import { Component, AfterViewInit } from '@angular/core';
import { Swiper } from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

interface TestimonialData {
  title: string;
  description: string;
  name: string;
  profession: string;
  profileImage: string;
}

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.html',
  styleUrls: ['./testimonial.css']
})
export class Testimonial implements AfterViewInit {
  testimonials: TestimonialData[] = [
    {
      title: 'Pyramids of Giza',
      description: 'Standing before the Pyramids of Giza was surreal, the history, the vast desert, and the incredible energy of the place left me speechless. The locals were kind and eager to share their culture.',
      name: 'Hedi',
      profession: 'Software Engineer',
      profileImage: 'assets/img/testimonial-profile-1.webp'
    },
    {
      title: 'Singapore',
      description: 'Visiting Singapore was a joy, clean streets, stunning modern architecture, and some of the friendliest people I\'ve ever met. Everyone made me feel right at home.',
      name: 'Rose',
      profession: 'Influencer',
      profileImage: 'assets/img/testimonial-profile-2.webp'
    },
    {
      title: 'Mount Fuji',
      description: 'Watching the sunrise over Mount Fuji was magical. The peaceful atmosphere and the warm hospitality of the locals made it a truly unforgettable moment in my journey.',
      name: 'Will',
      profession: 'Photographer',
      profileImage: 'assets/img/testimonial-profile-3.webp'
    }
  ];

  ngAfterViewInit() {
    new Swiper('.testimonial__swiper', {
      modules: [Navigation, Autoplay],
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });    
  }
}
