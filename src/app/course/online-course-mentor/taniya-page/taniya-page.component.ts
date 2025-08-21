import { Component } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';
import { CartItem, CartService } from '../../../cart.service';
import {
  jsonData,
  mentorTimings,
} from '../../course-mentor/course-mentor.component';
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
  mentor?: mentorTimings = jsonData.find((m) => m.id == 3);
  constructor(private cartService: CartService) {}
  addToCart(mentor?: mentorTimings): void {
    if (mentor) {
      this.cartService.addToCartMentor(mentor);
    }
  }
}
