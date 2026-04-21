import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { s3Bucket } from '../../enum/s3Bucket';
import { VideoReviewsComponent } from '../video-reviews/video-reviews.component';
import { faq, FaqComponent } from '../../includes/home/faq/faq.component';
import { WebapiService } from '../../webapi.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pranic-purification-ii',
  standalone: true,
  imports: [BannerComponent, VideoReviewsComponent, FaqComponent],
  templateUrl: './pranic-purification-ii.component.html',
  styleUrl: './pranic-purification-ii.component.css',
})
export class PranicPurificationIiComponent {
  s3Bucket = s3Bucket;
  slug: string = '';
  faqData: faq[] = [];
  constructor(
    private webapiService: WebapiService,
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.spinner.show();
    this.slug = this.activatedRoute.snapshot.routeConfig?.path ?? '';
  }
  ngOnInit(): void {
    this.getCourseBySlug(this.slug);
  }
  getCourseBySlug(slug: string) {
    let data = {
      slug: slug,
    };
    this.webapiService.getCourseById(data).subscribe((res: any) => {
      if (res.data.length > 0) {
        this.faqData = res.data[0].content;
      }
      this.spinner.hide();
    });
  }
  registerClick() {
    this.router.navigate(['checkout', this.slug]);
    window.scrollTo(0, 0);
  }
}
