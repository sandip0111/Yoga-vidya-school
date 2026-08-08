import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  jsonData,
  mentorTimings,
} from '../../course-mentor/course-mentor.component';
import { CartItem, CartService } from '../../../cart.service';
import { s3Bucket } from '../../../enum/s3Bucket';
import { routeEnum } from '../../../enum/routes';

import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-anuj-page',
  standalone: true,
  imports: [],
  templateUrl: './anuj-page.component.html',
  styleUrl: './anuj-page.component.css',
})
export class AnujPageComponent implements OnInit {
  mentor: any;
  slugId: number = 0;
  title: string = '';
  heroImage: string = '';
  s3Bucket = s3Bucket;
  about: string = '';
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private seoService: SeoService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.slugId = +id;
    }
  }
  ngOnInit(): void {
    this.getTeachersData(routeEnum.online);
    if (this.slugId == 2) {
      this.title = 'Therapeutic Hatha Yoga - Anuj Pareek';
      this.heroImage = s3Bucket.anujHero1;
      this.about = `Anuj class is based on Mobility to recover from long years of spinal & Hip compression...`;
    } else {
      this.title = 'Intermediate Alignment Based Class - Anuj Pareek';
      this.heroImage = s3Bucket.anujHero2;
      this.about = `These classes are designed for practitioners who want to move beyond the basics...`;
    }
    this.seoService.updateSeo({
      title: `${this.title} | Yoga Vidya School`,
      description: `Join Online Hatha & Alignment Yoga classes with Anuj Pareek at Yoga Vidya School. Improve mobility, posture, alignment, and flexibility.`,
      keywords: 'Anuj Pareek Yoga, Therapeutic Hatha Yoga, Alignment Yoga Class, Online Hatha Yoga',
      url: `/anuj-online-class/${this.slugId || 2}`
    });
  }
  getTeachersData(slug: string) {
    this.cartService.getTeachersData(slug).subscribe({
      next: (res: any) => {
        this.mentor = res.find(
          (t: any) => t.id == this.slugId
        );
      },
      error: (error) => {
        console.error('Failed to load teachers:', error);
      },
    });
  }
  addToCart(mentor: CartItem): void {
    if (mentor) {
      this.cartService.addToCartMentor(mentor);
    }
  }
}
