import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

  constructor(private title: Title, private meta: Meta, private router: Router, @Inject(DOCUMENT) private _document: Document, private _renderer2: Renderer2) {

  }
  ngOnInit(): void {
    setTimeout(() => {
      this.title.setTitle('Frequently Asked Questions');
      this.meta.updateTag({ name: 'keywords', content: 'Yoga Frequently Asked Questions, Yoga FAQ' });
      this.meta.updateTag({ name: 'description', content: '' });
      const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
      const link = this._document.querySelector('link[rel="canonical"]');
      this._renderer2.setAttribute(link, 'href', canonicalUrl);
    }, 1000)

  }

}
