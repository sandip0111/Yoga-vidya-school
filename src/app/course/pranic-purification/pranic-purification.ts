import { Component } from '@angular/core';
import { s3Bucket } from '../../enum/s3Bucket';
import { BannerComponent } from '../banner/banner.component';
import { WebapiService } from '../../webapi.service';
import { routeEnum } from '../../enum/routes';
import { Router } from '@angular/router';

import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-pranic-purification',
  imports: [BannerComponent],
  templateUrl: './pranic-purification.html',
  styleUrl: './pranic-purification.css',
})
export class PranicPurification {
  routEnum = routeEnum;
  s3Bucket = s3Bucket;
  feesData!: { title: any; amount: any; currency: any };
  constructor(
    private webapiService: WebapiService,
    private router: Router,
    private seoService: SeoService
  ) {}
  ngOnInit(): void {
    
    this.getCourseBySlug(routeEnum.pranicPurification);
  }
  getCourseBySlug(slug: string) {
    let data = {
      slug: slug,
    };
    this.webapiService.getCourseById(data).subscribe({
      next: (res: any) => {
        const currentDate = new Date();
        if (res.data.length > 0) {
          this.feesData = {
            title: res.data[0].coursetitle,
            amount: res.data[0].feeInfo[0]?.amount,
            currency: res.data[0].feeInfo[0]?.currency,
          };
        }
      },
      error: () => {},
    });
  }
  goToLink(pageLink: string) {
    this.router.navigate([pageLink]);
  }
}
