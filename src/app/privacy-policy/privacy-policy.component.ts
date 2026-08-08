import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {
  user = 'info';
  domain = 'yogavidyaschool.com';
  email: string = "";
  constructor(private router: Router, private seoService: SeoService) {}

  ngOnInit(): void {
    this.email = `${this.user}@${this.domain}`;
    this.seoService.updateSeo({
      title: 'Privacy Policy | Yoga Vidya School',
      description: 'Privacy Policy of Yoga Vidya School Rishikesh & Bali regarding student data protection, cookies, course bookings, and website privacy standards.',
      keywords: 'Yoga Vidya School Privacy Policy, Data Protection, Privacy Terms',
      url: '/privacy-policy'
    });
  }
}
