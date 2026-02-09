import { Component, Renderer2, Inject, Input } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { BannerComponent } from '../course/banner/banner.component';
import { s3Bucket } from '../enum/s3Bucket';

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
    @Inject(DOCUMENT) private _document: Document,
    private _renderer2: Renderer2,
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

      setTimeout(() => {
        this.title.setTitle('Acharya Prashant Jakhmola');
        const canonicalUrl =
          'https://www.yogavidyaschool.com' + this.router.url;
        const link = this._document.querySelector('link[rel="canonical"]');
        if (link) {
          this._renderer2.setAttribute(link, 'href', canonicalUrl);
        }
      }, 1000);
    } else {
      // If modal, we assume it is valid for this component
      this.slug = 'prashantjyoga';
    }
  }
}
