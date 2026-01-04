import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { s3Bucket } from '../../enum/s3Bucket';
import { VideoReviewsComponent } from '../video-reviews/video-reviews.component';
import { faq, FaqComponent } from '../../includes/home/faq/faq.component';
import { ActivatedRoute, Router } from '@angular/router';
import { routeEnum } from '../../enum/routes';
import { Title } from '@angular/platform-browser';
import { WebapiService } from '../../webapi.service';
import { feesDto } from '../rishikesh/pricing/pricing.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-swara-sadhana',
  standalone: true,
  imports: [CommonModule, BannerComponent, VideoReviewsComponent, FaqComponent],
  templateUrl: './swara-sadhana.component.html',
  styleUrl: './swara-sadhana.component.css',
})
export class SwaraSadhanaComponent {
  s3Bucket = s3Bucket;
  faqData: faq[] = [];
  price: number = 0;
  priceUsd: number = 0;
  slug: string = '';
  constructor(
    private router: Router,
    private titleService: Title,
    private webapiService: WebapiService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path ?? '';
    this.titleService.setTitle('Swara Sadhana');
  }
  ngOnInit(): void {
    this.spinner.show();
    let data = {
      slug: this.slug,
    };
    this.webapiService.getCourseById(data).subscribe((res: any) => {
      const courseData = res.data[0];
      this.price = courseData.feeInfo[0].data.find(
        (a: feesDto) => a.currency == 'INR'
      ).amount;

      this.priceUsd = courseData.feeInfo[0].data.find(
        (a: feesDto) => a.currency == 'USD'
      ).amount;
      this.spinner.hide();
    });
    this.faqData = [
      {
        title: 'What is SWARA YOGA?',
        para: `<strong>SWARA YOGA</strong> It is an ancient science of energy, body rhythms,
        which explains how the movement of your energy can be controlled by manipulation
        of breath swara means sound of breath, which means your breath also talk to you regularly,
        and once you understand the language of this breath, through the deeper practices,
        you can have complete control over your emotional body, energy, body, and physical.`,
      },
      {
        title: 'Is this worshop suitable for beginners?',
        para: `<strong>Yes,</strong> as this is an introduction to. Swara yoga there will be few basic
        techniques which will be explained by teacher which can give strong foundation for all the
        practitioners and their Pranayam Practice can be strengthen.`,
      },
      {
        title: 'Will any techniques be taught in this workshop?',
        para: `<strong>Yes, </strong>there will be few techniques which can be very beneficial
        to understand the energy and relation with physical, mental and emotional body. Also,
        how to control the breath in order to expand, the consciousness will be taught in this works.`,
      },
      {
        title: 'Can I use the techniques of this workshop in my daily life?',
        para: `<strong>Yes,</strong> absolutely. This is a reason. This workshop is design the techniques
        which wil be learning right from the first day. You can apply and see the results, but as this
        is not a complete course on. Swara yoga - so you must add your. Pranayama practice
        (pranaarambha) with it.`,
      },
    ];
  }
  goToPayment() {
    this.router.navigate([`/checkout/${routeEnum.sa}`]);
  }
}
