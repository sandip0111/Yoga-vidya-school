import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { s3Bucket } from '../../../enum/s3Bucket';
import { routeEnum } from '../../../enum/routes';
import { WebapiService } from '../../../webapi.service';
import { MonthEnum } from '../../../enum/details';

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
  subHeading: string = '';
  normalInrPrice: number = 0;
  normalUsdPrice: number = 0;
  isPriceShow: boolean = false;
  routeEnum = routeEnum;
  monthEnum = MonthEnum;
  get showReserveText(): boolean {
    const validSlugs = [
      routeEnum.rishikesh100,
      routeEnum.rishkesh200,
      routeEnum.rishikesh300,
      routeEnum.bali200,
      routeEnum.bali300,
      routeEnum['200TTC'],
      '200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh',
      '200-hour-yoga-teacher-training-scholarship-in-rishikesh',
      '300-hour-yoga-teacher-training-scholarship-in-rishikesh',
      'yoga-teacher-training-in-india'
    ];
    return validSlugs.includes(this.slug as any);
  }
  get showRoomDescription(): boolean {
    const validRoomSlugs = [
      routeEnum.rishikesh100,
      routeEnum.rishkesh200,
      routeEnum.rishikesh300,
      routeEnum.bali200,
      routeEnum.bali300,
      '200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh',
      '200-hour-yoga-teacher-training-scholarship-in-rishikesh',
      '300-hour-yoga-teacher-training-scholarship-in-rishikesh',
      'yoga-teacher-training-in-india'
    ];
    return validRoomSlugs.includes(this.slug as any);
  }
  constructor(private router: Router, private webapiService: WebapiService) {}
  ngOnInit(): void {
    this.getPriceValue(this.slug);
  }
  getPriceValue(slug: string) {
    let data = {
      slug: slug,
    };
    this.webapiService.getCourseById(data).subscribe({
      next: (res: any) => {
        this.feesData = res.data[0].feeInfo;
        this.setPriceValue(this.slug);
      },
      error: () => this.setPriceValue(this.slug),
    });
  }
  setPriceValue(slug: string) {
    switch (slug) {
      case routeEnum.rishikesh100:
        this.mainHeading = 'Pricing of 100 Hours TTC Rishikesh';
        this.subHeading =
          'The course fee includes accommodation in a shared room; a private room is available with an additional cost.';
        break;
      case routeEnum.rishkesh200:
        this.mainHeading = 'Pricing of 200 Hours TTC Rishikesh';
        this.subHeading =
          'The course fee includes accommodation in a shared room; a private room is available with an additional cost.';
        break;
      case routeEnum.rishikesh300:
        this.mainHeading = 'Pricing of 300 Hours TTC Rishikesh';
        this.subHeading =
          'The course fee includes accommodation in a shared room; a private room is available with an additional cost.';
        break;
      case routeEnum['200TTC']:
        this.mainHeading = '200 hours Yoga TTC online';
        break;
      case routeEnum.pranOnlinePranaArambh:
        this.mainHeading = 'Pricing of Prana Arambh';
        break;
      case routeEnum.bali200:
        this.mainHeading = 'Pricing of 200 Hours TTC Bali';
        this.subHeading =
          'The course fee includes accommodation in a shared room; a private room is available with an additional cost.';
        break;
      case routeEnum.bali300:
        this.mainHeading = 'Pricing of 300 Hours TTC Bali';
        break;
      case routeEnum.foundationOfSpirituality:
        this.mainHeading = 'Pricing of Foundation of Spirituality';
        break;
      default:
        break;
    }
  }
  goToPaymentPage(month?: string) {
    if (month) {
      this.router.navigate([`/checkout/${this.slug}`], {
        queryParams: { month: month },
      });
    } else {
      this.router.navigate([`/checkout/${this.slug}`]);
    }
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
  hidden?: boolean;
  data: feesDto[];
}
