import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WebapiService } from '../webapi.service';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formData: any = {};
  user = 'info';
  domain = 'yogavidyaschool.com';
  email: string = "";
  constructor(private webapiService: WebapiService, private title: Title, private meta: Meta, private router: Router, @Inject(DOCUMENT) private _document: Document, private _renderer2: Renderer2) { }

  ngOnInit(): void {
    this.email = `${this.user}@${this.domain}`;
    setTimeout(() => {
      this.title.setTitle('Contact Us');
      this.meta.updateTag({ name: 'keywords', content: 'Yoga Vidya School Rishikesh Contact Details' });
      this.meta.updateTag({ name: 'description', content: 'We would love to hear from you. Whether you want more information on our classes or want to attend any events that we hold, just give us a quick call.' });
      const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
      const link = this._document.querySelector('link[rel="canonical"]');
      this._renderer2.setAttribute(link, 'href', canonicalUrl);
    }, 1000)

  }

  insertInquiry(data: any) {
    data.type = 2;
    this.webapiService.saveContactInquiry(data).subscribe((res: any) => {
      console.log(res);
      if (res.status == "ok") {
        alert('Enquiry has been sent');
        this.formData = {};
      }
      else {
        alert('something went wrong')
      }
    });
  } 

}
