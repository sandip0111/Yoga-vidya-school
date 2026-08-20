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

      
    } else {
      this.slug = 'prashantjyoga';
    }
  }
}
