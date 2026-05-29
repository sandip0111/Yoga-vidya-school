import { Component } from '@angular/core';
import { BannerComponent } from '../../banner/banner.component';
import { s3Bucket, youtubeLink } from '../../../enum/s3Bucket';
import { routeEnum } from '../../../enum/routes';
import { Router } from '@angular/router';
import { PricingComponent } from '../../rishikesh/pricing/pricing.component';
import { VideoReviewsComponent } from '../../video-reviews/video-reviews.component';
import { ReviewListComponentComponent } from '../../../text-review-list/review-list-component/review-list-component.component';

@Component({
  selector: 'app-prana-arambh',
  standalone: true,
  imports: [
    BannerComponent,
    PricingComponent,
    VideoReviewsComponent,
    ReviewListComponentComponent,
  ],
  templateUrl: './prana-arambh.component.html',
  styleUrl: './prana-arambh.component.css',
})
export class PranaArambhComponent {
  s3Bucket = s3Bucket;
  youtubeLink = youtubeLink;
  routEnum = routeEnum;
  constructor(private router: Router) {}
  registerClick() {
    this.router.navigate(['checkout', this.routEnum.pranOnlinePranaArambh]);
  }
}
