import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';
import {
  jsonData,
  mentorTimings,
} from '../../course-mentor/course-mentor.component';
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
  mentor?: mentorTimings = jsonData.find((m) => m.id == 1);
  constructor(private cartService: CartService) {}
  addToCart(mentor?: mentorTimings): void {
    if(mentor){
      this.cartService.addToCartMentor(mentor);
    }
  }
}
