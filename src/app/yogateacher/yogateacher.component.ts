import { Component, Renderer2, Inject, Input, DOCUMENT } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { BannerComponent } from '../course/banner/banner.component';
import { s3Bucket } from '../enum/s3Bucket';

import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-yogateacher',
  standalone: true,
  imports: [BannerComponent, CommonModule],
  templateUrl: './yogateacher.component.html',
  styleUrl: './yogateacher.component.css',
  host: { ngSkipHydration: 'true' },
})
export class YogateacherComponent {
  @Input() isModal: boolean = false;
  slug: any;
  s3Bucket = s3Bucket;
  constructor(
    private title: Title,
    private _activatedRoute: ActivatedRoute,
    private router: Router,
    private seoService: SeoService
  ) {}

  ngOnInit() {
    if (!this.isModal) {
      this._activatedRoute.params.subscribe((params) => {
        this.slug = params['id'];
      });
      if (this.slug != 'prashantjyoga') {
        this.router.navigate(['/']);
        return;
      }

      this.seoService.updateSeo({
        title: 'Acharya Prashant Jakhmola | Founder & Master Yoga Teacher',
        description: 'Meet Acharya Prashant Jakhmola, founder of Yoga Vidya School in Rishikesh. Revered yoga master specializing in Pranayama, Asana Alignment, and Spiritual Sadhana.',
        keywords: 'Acharya Prashant Jakhmola, Prashant J Yoga, Yoga Master Rishikesh, Yoga Vidya School Founder, Pranayama Master India',
        url: `/yoga-teacher/acharya-prashant-jakhmola/${this.slug}`,
        schema: {
          '@context': 'https://schema.org',
          '@type': 'Person',
          'name': 'Acharya Prashant Jakhmola',
          'jobTitle': 'Founder & Head Yoga Teacher',
          'worksFor': {
            '@type': 'Organization',
            'name': 'Yoga Vidya School'
          },
          'sameAs': [
            'https://www.instagram.com/yogavidyaschool/',
            'https://www.youtube.com/@yogavidyaschool/'
          ]
        }
      });
    } else {
      this.slug = 'prashantjyoga';
    }
  }
}
