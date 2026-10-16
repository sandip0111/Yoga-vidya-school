import { Component } from '@angular/core';
import { s3Bucket } from '../../enum/s3Bucket';
import { BannerComponent } from '../banner/banner.component';
import { CommonModule } from '@angular/common';
import { IncludesComponent } from '../bali/includes/includes.component';
import { BonusComponent } from '../../certified/bonus/bonus.component';
import { ChooseUsComponent } from '../bali/choose-us/choose-us.component';
import { MentorsComponent } from '../../includes/home/mentors/mentors.component';
import { TestimonialsComponent } from '../../includes/home/testimonials/testimonials.component';
import { routeEnum } from '../../enum/routes';
import { WebapiService } from '../../webapi.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { PricingComponent } from '../rishikesh/pricing/pricing.component';

@Component({
  selector: 'app-mysore-100',
  imports: [
    BannerComponent,
    CommonModule,
    IncludesComponent,
    BonusComponent,
    ChooseUsComponent,
    MentorsComponent,
    TestimonialsComponent,
    PricingComponent,
  ],
  templateUrl: './mysore-100.html',
  styleUrl: './mysore-100.css',
})
export class Mysore100 {
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
