import { Component } from '@angular/core';

interface DestinationData {
  image: string;
  subtitle: string;
  title: string;
  country: string;
}

@Component({
  selector: 'app-destination',
  templateUrl: './destination.html',
  styleUrls: ['./destination.css']
})
export class Destination {
  destinations: DestinationData[] = [
    {
      image: 'assets/img/destination-img-1.webp',
      subtitle: 'Giza',
      title: 'PYRAMIDS',
      country: 'Egypt'
    },
    {
      image: 'assets/img/destination-img-2.webp',
      subtitle: 'Paris',
      title: 'LOUVRE MUSEUM',
      country: 'France'
    },
    {
      image: 'assets/img/destination-img-3.webp',
      subtitle: 'Barcelona',
      title: 'Sagrada Familia',
      country: 'Spain'
    }
  ];
}
