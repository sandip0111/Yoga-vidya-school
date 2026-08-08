import { Component } from '@angular/core';
import { BannerComponent } from '../../banner/banner.component';
import { s3Bucket } from '../../../enum/s3Bucket';
import { RegistrationFormComponent } from '../../../student/registration-form/registration-form.component';
import { BenifitsComponent } from '../../../includes/home/benifits/benifits.component';

import { SeoService } from '../../../services/seo.service';
import { routeEnum } from '../../../enum/routes';

@Component({
  selector: 'app-breatchdtox',
  standalone: true,
  imports: [BannerComponent, RegistrationFormComponent, BenifitsComponent],
  templateUrl: './breatchdtox.component.html',
  styleUrl: './breatchdtox.component.css',
})
export class BreatchdtoxComponent {
  s3Bucket = s3Bucket;
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Breath Detox Yoga Course | Free Online Breathwork | Yoga Vidya School',
      description: 'Join our Free Breath Detox Yoga course. Purify respiratory channels, boost oxygenation, release stress, and master foundational pranayama exercises.',
      keywords: 'Breath Detox Yoga, Free Pranayama Course, Respiratory Detox, Online Breathwork, Yoga Vidya School',
      url: `/${routeEnum.bDtox}`
    });
  }
}
