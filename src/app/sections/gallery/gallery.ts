import { Component } from '@angular/core';

interface GalleryData {
  image: string;
  subtitle: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class Gallery {
  gallery: GalleryData[] = [
    {
      image: 'assets/img/gallery-img-1.webp',
      subtitle: 'Sydney',
      title: 'Australia'
    },
    {
      image: 'assets/img/gallery-img-2.webp',
      subtitle: 'Rome',
      title: 'Italy'
    },
    {
      image: 'assets/img/gallery-img-3.webp',
      subtitle: 'Paris',
      title: 'France'
    },
    {
      image: 'assets/img/gallery-img-4.webp',
      subtitle: 'Santorini',
      title: 'Greece'
    }
  ];
}
