import { Component, OnInit } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';
import { CartItem, CartService } from '../../../cart.service';
import {
  jsonData,
  mentorTimings,
} from '../../course-mentor/course-mentor.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-taniya-page',
  standalone: true,
  imports: [],
  templateUrl: './taniya-page.component.html',
  styleUrl: './taniya-page.component.css',
})
export class TaniyaPageComponent implements OnInit {
  s3Bucket = s3Bucket;
  slugId: number = 0;
  mentor?: mentorTimings = jsonData.find((m) => m.id == 3);
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
