import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';
import { CartItem, CartService } from '../../../cart.service';
import { ActivatedRoute } from '@angular/router';
import { PixelTrackingService } from '../../../services/pixel-tracking.service';
import { WebapiService } from '../../../webapi.service';
import { routeEnum } from '../../../enum/routes';

@Component({
  selector: 'app-shivam-joshi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shivam-joshi.html',
  styleUrl: './shivam-joshi.css',
})
export class ShivamJoshi implements OnInit {
  s3Bucket = s3Bucket;
  slugId: number = 2;
  mentor: any = {
    id: 2,
    name: 'Shivam Joshi',
    title: 'Hatha Yoga with Props',
    date: 'From Monday to Thursday',
    time: '06:00 PM to 07:00 PM IST',
    startDate: 'November 2nd',
    price: [
      { currency: 'INR', amount: 2499 },
      { currency: 'USD', amount: 55 },
    ],
  };

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private pixelTracking: PixelTrackingService,
    private webapiService: WebapiService
  ) {
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
        const found = res.find(
          (t: any) =>
            t.id == this.slugId ||
            (t.name && t.name.toLowerCase().includes('shivam'))
        );
        if (found) {
          this.mentor = found;
        }
      },
      error: (error) => {
        console.error('Failed to load teachers:', error);
      },
    });
  }

  getSortedPrices(prices: any[]): any[] {
    if (!prices || !Array.isArray(prices) || prices.length === 0) {
      return [
        { currency: 'USD', amount: 55 },
        { currency: 'INR', amount: 2499 },
      ];
    }
    return [...prices].sort((a, b) => {
      if (a.currency === 'USD') return -1;
      if (b.currency === 'USD') return 1;
      return 0;
    });
  }

  addToCart(mentor: CartItem): void {
    if (mentor) {
      this.cartService.addToCartMentor(mentor);
    }
  }

  ogMetaTag() {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    this.pixelTracking.trackViewContent(
      'shivam-joshi-online-class',
      'shivam-joshi-online-class'
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
