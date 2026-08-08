import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { s3Bucket } from '../enum/s3Bucket';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-yoga-gallery',
  standalone: true,
  imports: [],
  templateUrl: './yoga-gallery.component.html',
  styleUrl: './yoga-gallery.component.css',
})
export class YogaGalleryComponent {
  s3bucket = s3Bucket;
  constructor(
    private router: Router,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Photo Gallery | Yoga Vidya School Rishikesh & Bali',
      description: 'Browse photos of Yoga Vidya School campuses in Rishikesh & Bali, yoga teacher training classes, excursion trips, graduation ceremonies, and ashram life.',
      keywords: 'Yoga Gallery, Yoga Vidya School Photos, Rishikesh Ashram Photos, Yoga Student Life, Bali Yoga Gallery',
      url: '/gallery'
    });
  }
}
