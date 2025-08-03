import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { TrainningPathComponent } from './trainning-path/trainning-path.component';

@Component({
  selector: 'app-certified',
  standalone: true,
  imports: [BannerComponent, TrainningPathComponent],
  templateUrl: './certified.component.html',
  styleUrl: './certified.component.css'
})
export class CertifiedComponent {
  imgSlug: string = '';
  bannerTitle: string = '';
  bannerSubtitle: string = '';
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
      this.spinner.hide();
    }

    private setImageSlug() {
      if(this.slug === 'get-certified-in-rishikesh') {
        this.imgSlug = 'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/images/954A7672.jpg';
      }
      else if(this.slug === 'get-certified-in-bali') {
        this.imgSlug = 'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/images/954A9431.JPG';
      }
    }

    private setBannerTitle() {
      if(this.slug === 'get-certified-in-rishikesh') {
        this.bannerTitle = 'Transform Your Yoga Practice in Rishikesh – Yoga Alliance Certified TTC';

      }
      else if(this.slug === 'get-certified-in-bali') {
        this.bannerTitle = 'Experience traditional yoga in the heart of paradise';
        this.bannerSubtitle = 'Train with a lineage-rooted school in the spiritual and serene setting of Ubud, Bali. Let the energy of nature, the power of breath, and ancient teachings guide you through a life-changing journey.';
      }
    }
}
