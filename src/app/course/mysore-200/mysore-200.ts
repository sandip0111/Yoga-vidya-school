import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { s3Bucket } from '../../enum/s3Bucket';
import { CertifiedYogaComponent } from '../rishikesh/certified-yoga/certified-yoga.component';
import { BonusComponent } from '../../certified/bonus/bonus.component';
import { IncludesComponent } from '../bali/includes/includes.component';
import { PricingComponent } from '../rishikesh/pricing/pricing.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { WebapiService } from '../../webapi.service';
import { MentorsComponent } from '../../includes/home/mentors/mentors.component';
import { ChooseUsComponent } from '../bali/choose-us/choose-us.component';
import { ExcursionsComponent } from '../rishikesh/excursions/excursions.component';
import { TestimonialsComponent } from '../../includes/home/testimonials/testimonials.component';

@Component({
  selector: 'app-mysore-200',
  imports: [
    BannerComponent,
    CertifiedYogaComponent,
    IncludesComponent,
    BonusComponent,
    PricingComponent,
    ChooseUsComponent,
    MentorsComponent,
    ExcursionsComponent,
    TestimonialsComponent
  ],
  templateUrl: './mysore-200.html',
  styleUrl: './mysore-200.css',
})
export class Mysore200 {
  s3Bucket = s3Bucket;
  titleName: { title: string } = { title: '' };
  slug: string = '';
  constructor(
    private webapiService: WebapiService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path ?? '';
  }
  ngOnInit() {
    this.getCourseBySlug(this.slug);
  }
  getCourseBySlug(slug: string) {
    let data = {
      slug: slug,
    };
    this.webapiService.getCourseById(data).subscribe({
      next: (res: any) => {
        if (res.data.length > 0) {
          this.titleName = {
            title: res.data[0].coursetitle,
          };
          this.spinner.hide();
        } else {
          this.router.navigate(['/']);
          this.spinner.hide();
        }
      },
      error: () => this.spinner.hide(),
    });
  }
}
