import { Component,Renderer2, Inject } from '@angular/core';
import { DOCUMENT,CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {

  constructor(private router: Router,@Inject(DOCUMENT) private _document: Document, private _renderer2: Renderer2,private title:Title,private meta:Meta) {
  }

  ngOnInit():void{
    setTimeout(() => {
      this.title.setTitle('Change Password');
      this.meta.updateTag({ name: 'keywords', content: '' });
      this.meta.updateTag({ name: 'description', content: '' });
      const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
      const link = this._document.querySelector('link[rel="canonical"]');
      this._renderer2.setAttribute(link, 'href', canonicalUrl);
    }, 1000)
  }

}
