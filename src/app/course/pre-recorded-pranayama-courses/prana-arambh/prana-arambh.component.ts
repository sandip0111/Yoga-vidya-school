import { Component } from '@angular/core';
import { BannerComponent } from '../../banner/banner.component';
import { s3Bucket, youtubeLink } from '../../../enum/s3Bucket';
import { routeEnum } from '../../../enum/routes';
import { Router, ActivatedRoute } from '@angular/router';
import { PricingComponent } from '../../rishikesh/pricing/pricing.component';
import { VideoReviewsComponent } from '../../video-reviews/video-reviews.component';
import { ReviewListComponentComponent } from '../../../text-review-list/review-list-component/review-list-component.component';
import { faq, FaqComponent } from '../../../includes/home/faq/faq.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { WebapiService } from '../../../webapi.service';

@Component({
  selector: 'app-prana-arambh',
  standalone: true,
  imports: [
    BannerComponent,
    PricingComponent,
    // VideoReviewsComponent,
    // ReviewListComponentComponent,
    FaqComponent
  ],
  templateUrl: './prana-arambh.component.html',
  styleUrl: './prana-arambh.component.css',
})
export class PranaArambhComponent {
  s3Bucket = s3Bucket;
  youtubeLink = youtubeLink;
  routEnum = routeEnum;
  faqData: faq[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private webapiService: WebapiService,
  ) {
  }
  ngOnInit(): void {
    this.getCourseBySlug(routeEnum.pranOnlinePranaArambh);
  }
  getCourseBySlug(slug: string) {
    let data = {
      slug: slug,
    };
    this.webapiService.getCourseById(data).subscribe({
      next: (res: any) => {
        if (res.data.length > 0) {
          const courseData = res.data[0];
          this.faqData = courseData.content;
        } else {
          this.router.navigate(['/']);
        }
        this.spinner.hide();
      },
      error: () => this.spinner.hide(),
    });
  }
  registerClick() {
    this.router.navigate(['checkout', this.routEnum.pranOnlinePranaArambh]);
  }
}
