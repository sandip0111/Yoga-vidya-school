import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';
import {
  jsonData,
  mentorTimings,
} from '../../course-mentor/course-mentor.component';
import { CartItem, CartService } from '../../../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PixelTrackingService } from '../../../services/pixel-tracking.service';
import { Title } from '@angular/platform-browser';
import { WebapiService } from '../../../webapi.service';
import { routeEnum } from '../../../enum/routes';

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
  mentor?: any;
  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private pixelTracking: PixelTrackingService,
    private ttitleService: Title,
    private webapiService: WebapiService
  ) {
    this.ttitleService.setTitle('Online Sadhana with Prashant Jhakmola');
    const id = this.route.snapshot.paramMap.get('id');
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
        this.mentor = res.find((t: any) => t.id == this.slugId);
      },
      error: (error) => {
        console.error('Failed to load teachers:', error);
      },
    });
  }

  addToCart(mentor?: mentorTimings): void {
    if (mentor) {
      this.cartService.addToCartMentor(mentor);
    }
  }

  ogMetaTag() {
    this.pixelTracking.trackViewContent(
      'prashant-jhakmola-online-class',
      'prashant-jhakmola-online-class'
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
