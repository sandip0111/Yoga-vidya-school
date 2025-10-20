import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { s3Bucket } from '../../../enum/s3Bucket';
import { routeEnum } from '../../../enum/routes';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class PricingComponent implements OnInit {
  s3Bucket = s3Bucket;
  pricing: pricingDto[] = [];
  @Input() slug: string = '';
  mainHeading: string = '';
  normalInrPrice: number = 0;
  normalUsdPrice: number = 0;
  isPriceShow: boolean = false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    switch (this.slug) {
      case routeEnum.rishikesh100:
        this.mainHeading = 'Pricing of 100 Hours TTC Rishikesh';
        this.pricing = [
          {
            title: 'Shared Room',
            usd: 850,
            inr: 55000,
            image: s3Bucket.room4,
            bgColor: '#eef6f8',
          },
        ];
        break;
      case routeEnum.rishkesh200:
        this.mainHeading = 'Pricing of 200 Hours TTC Rishikesh';
        this.pricing = [
          {
            title: 'Private Room',
            usd: 1800,
            inr: 90000,
            image: s3Bucket.room2,
            bgColor: '#f5f0e6',
          },
          {
            title: 'Shared Room',
            usd: 1500,
            inr: 85000,
            image: s3Bucket.room4,
            bgColor: '#eef6f8',
          },
        ];
        break;
      case routeEnum.rishikesh300:
        this.mainHeading = 'Pricing of 300 Hours TTC Rishikesh';
        this.pricing = [
          {
            title: 'Private Room',
            usd: 1999,
            inr: 140000,
            image: s3Bucket.room2,
            bgColor: '#f5f0e6',
          },
          {
            title: 'Shared Room',
            usd: 1850,
            inr: 120000,
            image: s3Bucket.room4,
            bgColor: '#eef6f8',
          },
        ];
        break;
      case routeEnum['200TTC']:
          this.mainHeading = 'Pricing of 200 Hours TTC Rishikesh Online';
           this.pricing = [
          {
            title: 'Price',
            usd: 999,
            inr: 65000,
            image: s3Bucket.room2,
            bgColor: '#f5f0e6',
          }];
        break;
      default:
        break;
    }
  }

  goToPaymentPage() {
    this.router.navigate([`/checkout/${this.slug}`]);
  }
}
interface pricingDto {
  title: string;
  usd: number;
  inr: number;
  image: string;
  bgColor: string;
}
