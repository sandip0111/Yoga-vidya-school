import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BannerComponent } from '../course/banner/banner.component';
import { s3Bucket } from '../enum/s3Bucket';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  s3Bucket = s3Bucket;
  constructor(
    private router: Router,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'About Us | Yoga Vidya School Rishikesh & Bali',
      description: 'Learn about Yoga Vidya School, founded by Acharya Prashant Jakhmola in Rishikesh. We provide traditional, Yoga Alliance certified Yoga Teacher Training courses in Rishikesh, India & Bali.',
      keywords: 'About Yoga Vidya School, Acharya Prashant Jakhmola, Yoga School Rishikesh, Yoga Alliance Certified School India',
      url: '/about-us',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        'name': 'About Yoga Vidya School',
        'description': 'Learn about Yoga Vidya School, founded by Acharya Prashant Jakhmola in Rishikesh.',
        'url': 'https://www.yogavidyaschool.com/about-us'
      }
    });
  }
}
