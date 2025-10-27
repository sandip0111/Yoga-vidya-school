import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { s3Bucket } from '../../../enum/s3Bucket';
import { routeEnum } from '../../../enum/routes';
import { WebapiService } from '../../../webapi.service';

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
  feesData: feesInfoDto[] = [];
  mainHeading: string = '';
  normalInrPrice: number = 0;
  normalUsdPrice: number = 0;
  isPriceShow: boolean = false;
  routeEnum = routeEnum;
  constructor(private router: Router, private webapiService: WebapiService) {}
  ngOnInit(): void {
    this.getPriceValue(this.slug);
  }
  getPriceValue(slug: string) {
    let data = {
      slug: slug,
    };
    this.webapiService.getCourseById(data).subscribe((res: any) => {
      this.feesData = res.data[0].feeInfo;
      if (this.feesData.length == 0) {
        this.setPriceValue(this.slug);
      }
    });
  }
  setPriceValue(slug: string) {
    switch (slug) {
      case routeEnum.rishikesh100:
        this.mainHeading = 'Pricing of 100 Hours TTC Rishikesh';
        this.pricing = [
          {
            title: 'Shared Room',
            usd: 850,
            inr: 55000,
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
          },
          {
            title: 'Shared Room',
            usd: 1500,
            inr: 85000,
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
          },
          {
            title: 'Shared Room',
            usd: 1850,
            inr: 120000,
          },
        ];
        break;
      case routeEnum['200TTC']:
        this.mainHeading = '200 hours Yoga TTC online';
        this.pricing = [
          {
            title: 'Price',
            usd: 999,
            inr: 65000,
          },
        ];
        break;
      case routeEnum.pranOnlinePranaArambh:
        this.mainHeading = '';
        this.pricing = [
          {
            title: 'Price',
            usd: 60,
            inr: 2499,
          },
        ];
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
  image?: string;
  bgColor?: string;
}
export interface feesDto {
  amount: number;
  discount: number;
  currency: string;
  title?: string;
}
export interface feesInfoDto {
  title: string;
  data: feesDto[];
}
