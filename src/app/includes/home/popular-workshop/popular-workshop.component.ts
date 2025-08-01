import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';

@Component({
  selector: 'app-popular-workshop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular-workshop.component.html',
  styleUrls: ['./popular-workshop.component.css']
})
export class PopularWorkshopComponent implements OnInit {
  s3Bucket = s3Bucket;
  workshops: workshop[] = [
    {
      title: 'Yoga Retreat in Bali',
      location: 'Bali',
      link: '/yoga-retreat-in-bali',
      image: 'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1688020831747.jpeg'
    },
    // {
    //   title: 'Yoga Retreat in Mysore',
    //   location: 'Mysore',
    //   link: '/yoga-retreat-in-mysore-india',
    //   image: 'https://my-s3-images-bucket.s3.amazonaws.com/images/FERN8400_n0y8nu.jpg'
    // },
    {
      title: 'Yoga Retreat in Rishikesh',
      location: 'Rishikesh',
      link: '/yoga-retreat-in-rishikesh-india',
      image: 'https://my-s3-images-bucket.s3.amazonaws.com/images/FERN8400_n0y8nu.jpg'
    },
    {
      title: 'Adjustment & Alignment 1',
      location: 'Rishikesh',
      link: '/adjustment-and-alignment',
      image: 'https://my-s3-images-bucket.s3.amazonaws.com/images/adjustAlign_cpouxz.jpg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}

interface workshop{
  title: string;
  location: string;
  link: string;
  image: string;
}
