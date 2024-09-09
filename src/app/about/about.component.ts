import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private title: Title, private meta: Meta, private router: Router, @Inject(DOCUMENT) private _document: Document, private _renderer2: Renderer2) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.title.setTitle('About Us');
      this.meta.updateTag({ name: 'keywords', content: 'About Yoga Vidya School' });
      this.meta.updateTag({ name: 'description', content: 'About Yoga Vidya School Rishikesh, Uttarakhand' });
      const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
      const link = this._document.querySelector('link[rel="canonical"]');
      this._renderer2.setAttribute(link, 'href', canonicalUrl);
    }, 1000)
  }

}
