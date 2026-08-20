import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { s3Bucket } from '../../enum/s3Bucket';
import { IncludesComponent } from '../../certified/includes/includes.component';
import { PricingComponent } from '../rishikesh/pricing/pricing.component';
import { ActivatedRoute } from '@angular/router';

import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-retreats',
  imports: [BannerComponent, IncludesComponent, PricingComponent],
  templateUrl: './retreats.html',
  styleUrl: './retreats.css',
  standalone: true,
})
export class Retreats {
  s3Bucket = s3Bucket;
  slug: string = '';
  constructor(
    private _activatedRoute: ActivatedRoute,
    private seoService: SeoService
  ) {
    this.slug = this._activatedRoute.snapshot.routeConfig?.path || '';
  }

  ngOnInit(): void {
    
  }
}
