import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-testinomial',
  standalone: true,
  imports: [],
  templateUrl: './testinomial.component.html',
  styleUrl: './testinomial.component.css'
})
export class TestinomialComponent {

  constructor(private spinner: NgxSpinnerService, private router: Router, private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Student Testimonials & Reviews | Yoga Vidya School',
      description: 'Read genuine reviews and watch video testimonials from international graduates of our 100, 200 & 300 Hour Yoga Teacher Training courses in Rishikesh & Bali.',
      keywords: 'Yoga Vidya School Reviews, Yoga Teacher Training Testimonials, Rishikesh Yoga Course Reviews, Student Experiences Bali Yoga',
      url: '/testimonial'
    });
  }
}
