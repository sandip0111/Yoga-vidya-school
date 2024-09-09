import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgxSpinnerService } from "ngx-spinner";
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-testinomial',
  standalone: true,
  imports: [],
  templateUrl: './testinomial.component.html',
  styleUrl: './testinomial.component.css'
})
export class TestinomialComponent {

  constructor(private spinner: NgxSpinnerService, private title: Title, private meta: Meta, private router: Router, @Inject(DOCUMENT) private _document: Document, private _renderer2: Renderer2) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.title.setTitle('Testimonials');
      this.meta.updateTag({ name: 'keywords', content: 'Yoga Vidya School Testimonials' });
      this.meta.updateTag({ name: 'description', content: 'Yoga Vidya School Testimonials, Reviews' });
      const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
      const link = this._document.querySelector('link[rel="canonical"]');
      this._renderer2.setAttribute(link, 'href', canonicalUrl);
    }, 1000)
  }

}
