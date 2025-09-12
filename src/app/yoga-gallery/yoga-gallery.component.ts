import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { s3Bucket } from '../enum/s3Bucket';

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
    private meta: Meta,
    private title: Title,
    private router: Router,
    @Inject(DOCUMENT) private _document: Document,
    private _renderer2: Renderer2
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.title.setTitle('Photo Gallery | Yoga Vidya School');
      const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
      const link = this._document.querySelector('link[rel="canonical"]');
      this._renderer2.setAttribute(link, 'href', canonicalUrl);
    }, 1000);
  }
}
