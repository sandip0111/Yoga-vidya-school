import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { s3Bucket } from '../../enum/s3Bucket';
import { IncludesComponent } from '../../certified/includes/includes.component';
import { PricingComponent } from '../rishikesh/pricing/pricing.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rishikesh-retreat',
  imports: [BannerComponent, IncludesComponent, PricingComponent],
  templateUrl: './rishikesh-retreat.html',
  styleUrl: './rishikesh-retreat.css',
  standalone: true,
})
export class RishikeshRetreat implements OnInit {
  s3Bucket = s3Bucket;
  slug: string = '';

  constructor(private _activatedRoute: ActivatedRoute) {
    this.slug = this._activatedRoute.snapshot.routeConfig?.path || '';
  }

  ngOnInit(): void {}
}
