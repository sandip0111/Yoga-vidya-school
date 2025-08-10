import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { s3Bucket } from '../../../enum/s3Bucket';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class PricingComponent {
  s3Bucket = s3Bucket;
  pricing = [
    {
      title: 'Private Room',
      usd: 1600,
      inr: '₹85,000',
      image: s3Bucket.room2,
      link: '/checkout/200-hours-yoga-teacher-training-in-rishikesh',
      bgColor: '#f5f0e6',
    },
    {
      title: 'Shared Room',
      usd: 1300,
      inr: '₹70,000',
      image: s3Bucket.room4,
      link: '/checkout/200-hours-yoga-teacher-training-in-rishikesh',
      bgColor: '#eef6f8',
    },
  ];
  @Input() slug: string = '';

  constructor(private router: Router) {}

  goToPaymentPage() {
    this.router.navigate([`/checkout/${this.slug}`]);
  }
}
