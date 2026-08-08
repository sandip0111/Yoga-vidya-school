import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { s3Bucket } from '../../enum/s3Bucket';
import { routeEnum } from '../../enum/routes';
import { Router } from '@angular/router';

import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-pre-recorded-pranayama-courses',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './pre-recorded-pranayama-courses.component.html',
  styleUrl: './pre-recorded-pranayama-courses.component.css',
})
export class PreRecordedPranayamaCoursesComponent {
  s3Bucket = s3Bucket;
  routEnum = routeEnum;
  constructor(private router: Router, private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Online Pre-Recorded Pranayama & Breathwork Courses | Yoga Vidya School',
      description: 'Self-paced authentic online Pranayama courses guided by Acharya Prashant Jakhmola. Learn foundational to advanced breath control, breath detox, and energy expansion.',
      keywords: 'Pre Recorded Pranayama Courses, Online Breathwork Training, Self Paced Pranayama, Prana Arambha, Breath Detox Yoga',
      url: `/${routeEnum.preRecordPranayamaCourse}`
    });
  }

  goToLink(pageLink: string) {
    this.router.navigate([pageLink]);
  }
}
