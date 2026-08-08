import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

  constructor(private router: Router, private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Frequently Asked Questions | Yoga Vidya School',
      description: 'Find answers to common questions about Yoga Teacher Training in Rishikesh & Bali, Yoga Alliance certification, course curriculum, accommodation, food, and prerequisites.',
      keywords: 'Yoga FAQ, Yoga Teacher Training Questions, Yoga Alliance Certification FAQ, Rishikesh Yoga Course FAQ',
      url: '/faq',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Why Do Yoga Teacher Training in Rishikesh?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Rishikesh is the birthplace and world capital of yoga, offering authentic spiritual energy, experienced traditional gurus, and immersion in Himalayan yogic culture.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is Yoga Vidya School Yoga Alliance certified?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, all our 100, 200, 300, and 500 hour Yoga Teacher Training programs are fully registered and accredited by Yoga Alliance USA.'
            }
          }
        ]
      }
    });
  }
}
