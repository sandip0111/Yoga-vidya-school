import { Component } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';
import { CartItem, CartService } from '../../../cart.service';
import { mentorTimings } from '../../course-mentor/course-mentor.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taniya-page',
  standalone: true,
  imports: [],
  templateUrl: './taniya-page.component.html',
  styleUrl: './taniya-page.component.css',
})
export class TaniyaPageComponent {
  s3Bucket = s3Bucket;
  mentor: mentorTimings = {
    id: 3,
    name: 'Taniya Verma',
    image: 'IMG_20250331_171325_021.jpg',
    title: 'Woman Wellness Yoga',
    weeklyTime: 'From Monday to Thursday',
    time: {
      time1: '5:00 PM',
      time2: '6:00 PM',
      stamp: 'IST',
    },
    nextBatch: 'October the 6th. (Not available during September)',
    price: { priceInIndian: 1999, priceInUSD: 40 },
    description:
      'A gentle and supportive practice designed specially for women from menstruation to menopause combining asana, pranayama, nutrition tips and hormone-balancing restorative techniques.',
    url: 'taniya-verma-online-class',
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
