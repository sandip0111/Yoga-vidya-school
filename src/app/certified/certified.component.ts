import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { TrainningPathComponent } from './trainning-path/trainning-path.component';
import { aboutContentModel } from '../models/rishikesh';
import { s3Bucket } from '../enum/s3Bucket';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { WhyRishikeshComponent } from './why-rishikesh/why-rishikesh.component';
import { IncludesComponent } from './includes/includes.component';
import { VideoReviewsComponent } from '../course/video-reviews/video-reviews.component';
import { ReadyComponent } from './ready/ready.component';
import { WhyBaliComponent } from './why-bali/why-bali.component';
import { IncludesBaliComponent } from './includes-bali/includes-bali.component';
import { routeEnum } from '../enum/routes';
import { BonusComponent } from './bonus/bonus.component';

@Component({
  selector: 'app-certified',
  standalone: true,
  imports: [
    BannerComponent,
    TrainningPathComponent,
    AboutComponent,
    CommonModule,
    WhyRishikeshComponent,
    IncludesComponent,
    VideoReviewsComponent,
    ReadyComponent,
    WhyBaliComponent,
    IncludesBaliComponent,
    BonusComponent
  ],
  templateUrl: './certified.component.html',
  styleUrl: './certified.component.css',
})
export class CertifiedComponent {
  imgSlug: string = '';
  bannerTitle: string = '';
  bannerSubtitle: string = '';
  s3Bucket = s3Bucket;
  routEnum = routeEnum;
  aboutContent: aboutContentModel = new aboutContentModel('', '', '', '');
  slug: string = '';
  constructor(
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute
  ) {
    this.spinner.show();
    this.slug = this.activatedRoute.snapshot.routeConfig?.path ?? '';
  }

  ngOnInit() {
    this.setImageSlug();
    this.setBannerTitle();
    this.setAboutContent();
    this.spinner.hide();
  }

  private setImageSlug() {
    if (this.slug === 'get-certified-in-rishikesh') {
      this.imgSlug = this.s3Bucket.rishikeshAbout;
    } else if (this.slug === 'get-certified-in-bali') {
      this.imgSlug = this.s3Bucket.baliAbout;
    }
  }

  private setBannerTitle() {
    if (this.slug === 'get-certified-in-rishikesh') {
      this.bannerTitle =
        'Transform Your Yoga Practice in Rishikesh – Yoga Alliance Certified TTC';
    } else if (this.slug === 'get-certified-in-bali') {
      this.bannerTitle = 'Experience traditional yoga in the heart of paradise';
      this.bannerSubtitle =
        'Train with a lineage-rooted school in the spiritual and serene setting of Ubud, Bali. Let the energy of nature, the power of breath, and ancient teachings guide you through a life-changing journey.';
    }
  }

  private setAboutContent() {
    if (this.slug === 'get-certified-in-rishikesh') {
      this.aboutContent = new aboutContentModel(
        s3Bucket.certifiedRishikeshAbout,
        'Get certified as a Yoga Teacher in Rishikesh, India — the world capital of yoga.',
        '',
        'Join us at Yoga Vidya School for a transformational journey rooted in traditional practice, deep wisdom, and immersive experience.'
      );
    }
  }
}
