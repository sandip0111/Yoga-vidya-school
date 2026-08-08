import { Component } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';
import { BannerComponent } from '../../../certified/banner/banner.component';
import { routeEnum } from '../../../enum/routes';
import { aboutContentModel } from '../../../models/rishikesh';
import { Router } from '@angular/router';
import { PixelTrackingService } from '../../../services/pixel-tracking.service';
import { CommonModule } from '@angular/common';
import { IncludesComponent } from '../../../certified/includes/includes.component';
import { BonusComponent } from '../../../certified/bonus/bonus.component';
import { VideoReviewsComponent } from '../../video-reviews/video-reviews.component';
import { ReadyComponent } from '../../../certified/ready/ready.component';

import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-rishiksh-main',
  imports: [
    BannerComponent,
    IncludesComponent,
    CommonModule,
    BonusComponent,
    VideoReviewsComponent,
    ReadyComponent,
  ],
  templateUrl: './rishiksh-main.html',
  styleUrl: './rishiksh-main.css',
})
export class RishikshMain {
  s3Bucket = s3Bucket;
  routEnum = routeEnum;
  bannerTitle: string = '';
  bannerSubtitle: string = '';
  aboutContent: aboutContentModel = new aboutContentModel('', '', '', '');
  constructor(
    private router: Router,
    private pixelTracking: PixelTrackingService,
    private seoService: SeoService
  ) {
    this.bannerTitle =
      'Transform Your Yoga Practice in Rishikesh – Yoga Alliance Certified TTC';
    this.bannerSubtitle = `2026 Batches: October<br/>
      Reserve your room with 30% deposit`;
    this.aboutContent = new aboutContentModel(
      s3Bucket.certifiedRishikeshAbout,
      'Get certified as a Yoga Teacher in Rishikesh, India — the world capital of yoga.',
      '',
      'Join us at Yoga Vidya School for a transformational journey rooted in traditional practice, deep wisdom, and immersive experience.',
    );
  }

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Get Certified in Rishikesh | Yoga Teacher Training Courses | Yoga Vidya School',
      description: 'Get certified as a Yoga Teacher in Rishikesh, India. Yoga Alliance approved 100, 200 & 300 Hour Yoga TTC courses at Yoga Vidya School.',
      keywords: 'Get Certified in Rishikesh, Yoga Alliance Certification Rishikesh, Yoga Teacher Training India, Rishikesh Yoga School',
      url: `/${routeEnum.rishikesh}`
    });
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
      [routeEnum.rishikesh300]: {
        name: '300-Hour Yoga Teacher Training',
        type: '300_hour_ttc',
        value: 1500,
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
