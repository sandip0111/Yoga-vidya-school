import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';
import {
  jsonData,
  mentorTimings,
} from '../../course-mentor/course-mentor.component';
import { CartItem, CartService } from '../../../cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prashant-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prashant-page.component.html',
  styleUrl: './prashant-page.component.css',
})
export class PrashantPageComponent implements OnInit {
  s3Bucket = s3Bucket;
  slugId: number = 0;
  mentor?: mentorTimings;
  constructor(private cartService: CartService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.slugId = +id;
    }
  }
  ngOnInit(): void {
    this.mentor = jsonData.find((m) => m.id == this.slugId);
  }
  addToCart(mentor?: mentorTimings): void {
    if (mentor) {
      this.cartService.addToCartMentor(mentor);
    }
  }
}
