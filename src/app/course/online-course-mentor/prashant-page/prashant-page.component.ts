import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';
import { mentorTimings } from '../../course-mentor/course-mentor.component';
import { CartItem, CartService } from '../../../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prashant-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prashant-page.component.html',
  styleUrl: './prashant-page.component.css',
})
export class PrashantPageComponent {
  s3Bucket = s3Bucket;
  mentor: mentorTimings = {
    id: 1,
    name: 'Acharya Prashant Jakhmola',
    image: 'image_1673271873934.jfif',
    title: 'Yoga Sadhana',
    weeklyTime: 'From Monday to Friday',
    time: {
      time1: '6:00 am',
      time2: '7:00 am',
      stamp: 'IST',
    },
    nextBatch: 'September the 8th',
    price: { priceInIndian: 2999, priceInUSD: 70 },
    description:
      'interactive class combining Hatha asanas and pranayama each morning for holistic physical, mental, and spiritual growth. Suitable for all levels, with focus on correct alignment and routine building.',
    url: 'prashant-jhakmola-online-class',
  };
  course?: CartItem;
  constructor(private cartService: CartService, private router: Router) {}
  addToCart(event: Event, id?: number): void {
    event.preventDefault();
    if (id != undefined) {
      this.course = {
        id: id,
        title: this.mentor?.title ?? '',
        shortDescription: this.mentor?.description ?? '',
        priceINR: this.mentor?.price.priceInIndian ?? 0,
        priceUSD: this.mentor?.price.priceInUSD ?? 0,
        quantity: 1,
      };
    }
    if (this.course != undefined) {
      this.cartService.addItem(this.course);
    }
    this.router.navigate(['/proceed-payment']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
