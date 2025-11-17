import { Component, OnInit } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';
import { CartItem, CartService } from '../../../cart.service';
import {
  jsonData,
  mentorTimings,
} from '../../course-mentor/course-mentor.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PixelTrackingService } from '../../../services/pixel-tracking.service';
import { Title } from '@angular/platform-browser';
import { routeEnum } from '../../../enum/routes';

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
  mentor: any;
  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private pixelTracking: PixelTrackingService,
    private titleService: Title
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.titleService.setTitle('Women wellness with Taniya Verma');
    if (id) {
      this.slugId = +id;
    }
  }
  ngOnInit(): void {
    this.getTeachersData(routeEnum.online);
    this.ogMetaTag();
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
  ogMetaTag() {
    this.pixelTracking.trackViewContent(
      'taniya online class',
      'taniya-verma-online-class'
    );
    this.trackScrollDepth();
    this.trackTimeOnPage();
  }
  trackTimeOnPage() {
    const timeThresholds = [30, 60, 120, 300];
    const trackedTimes = new Set<number>();
    timeThresholds.forEach((threshold) => {
      setTimeout(() => {
        if (!trackedTimes.has(threshold)) {
          trackedTimes.add(threshold);
          this.pixelTracking.trackTimeOnPage(threshold);
        }
      }, threshold * 1000);
    });
  }
  trackScrollDepth() {
    const scrollThresholds = [25, 50, 75, 100];
    const trackedThresholds = new Set<number>();
    window.addEventListener('scroll', () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / scrollHeight) * 100);
      scrollThresholds.forEach((threshold) => {
        if (scrollPercent == threshold) {
          trackedThresholds.add(threshold);
          this.pixelTracking.trackScroll(threshold);
        }
      });
    });
  }
}
