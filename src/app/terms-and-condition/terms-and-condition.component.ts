import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-terms-and-condition',
  standalone: true,
  imports: [],
  templateUrl: './terms-and-condition.component.html',
  styleUrl: './terms-and-condition.component.css'
})
export class TermsAndConditionComponent {

  constructor(private router: Router, private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Terms & Conditions | Yoga Vidya School',
      description: 'Official Terms & Conditions of Yoga Vidya School for course registration, payment policy, code of conduct, and refund guidelines in Rishikesh & Bali.',
      keywords: 'Yoga Vidya School Terms, Course Terms and Conditions, Refund Policy, Student Code of Conduct',
      url: '/terms-and-condition'
    });
  }
}
