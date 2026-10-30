import { Component } from '@angular/core';
import { BannerComponent } from '../../certified/banner/banner.component';
import { s3Bucket } from '../../enum/s3Bucket';
import { PixelTrackingService } from '../../services/pixel-tracking.service';
import { Router } from '@angular/router';
import { routeEnum } from '../../enum/routes';
import { ReadyComponent } from '../../certified/ready/ready.component';
import { CommonModule } from '@angular/common';
import { BonusComponent } from '../../certified/bonus/bonus.component';
import { VideoReviewsComponent } from '../video-reviews/video-reviews.component';
import { IncludesComponent } from '../../certified/includes/includes.component';

@Component({
  selector: 'app-mysore-ttc',
  imports: [
    BannerComponent,
    IncludesComponent,
    CommonModule,
    BonusComponent,
    VideoReviewsComponent,
    ReadyComponent,
  ],
  templateUrl: './mysore-ttc.html',
  styleUrl: './mysore-ttc.css',
})
export class MysoreTtc {
  s3Bucket = s3Bucket;
  bannerTitle =
    'Transform Your Yoga Practice in Mysore – Yoga Alliance Certified TTC';
  bannerSubtitle = `2027 Batches: October<br/>
      Reserve your room with 30% deposit`;
  routEnum = routeEnum;
  constructor(
    private router: Router,
    private pixelTracking: PixelTrackingService,
  ) {}
    scrollToTrainingPath(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    const el = document.getElementById('training-paths');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
  goToLink(link: string) {
    this.trackCourseSelection(link);
    this.router.navigate([link]);
  }
  private trackCourseSelection(link: string) {
    const courseMapping: {
      [key: string]: { name: string; type: string; value: number };
    } = {
      [routeEnum.rishikesh100]: {
        name: '100-Hour Yoga Teacher Training',
        type: '100_hour_ttc',
        value: 800,
      },
      [routeEnum.rishkesh200]: {
        name: '200-Hour Yoga Teacher Training',
        type: '200_hour_ttc',
        value: 1200,
      },
    };
    const courseInfo = courseMapping[link];
    if (courseInfo) {
      this.pixelTracking.trackCourseSelection(
        link,
        courseInfo.name,
        courseInfo.type,
      );
      this.pixelTracking.trackAddToCart(
        link,
        courseInfo.name,
        courseInfo.value,
      );
      this.pixelTracking.trackViewContent(
        courseInfo.name,
        'course_details_click',
      );
    }
  }
}
