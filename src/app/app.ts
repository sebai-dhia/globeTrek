import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ScrollUp } from './components/scroll-up/scroll-up';
import { Home } from './sections/home/home';
import { Destination } from './sections/destination/destination';
import { Testimonial } from './sections/testimonial/testimonial';
import { Gallery } from './sections/gallery/gallery';
import { Join } from './sections/join/join';
import { RouterOutlet } from '@angular/router';
import { Loader } from './components/loader/loader';
import { Animation } from './services/animation';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, ScrollUp, Home, Destination, Testimonial, Gallery, Join, RouterOutlet, Loader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'globeTrek';
  constructor(private animation: Animation) {}


  runScrollReveal() {
    this.animation.runScrollReveal();
  }
}
