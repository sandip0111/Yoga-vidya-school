import { Component,Renderer2,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WebapiService } from '../webapi.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { Title,Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-trainers',
  standalone: true,
  imports: [CommonModule,RouterLink,LazyLoadImageModule],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.css'
})
export class TrainersComponent {

  public defaultImage = 'https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';
  mentorList: any
  imageUrl: any

  constructor(private webapiService: WebapiService, private spinner: NgxSpinnerService, private title: Title, private meta: Meta, private router: Router, @Inject(DOCUMENT) private _document: Document, private _renderer2: Renderer2) { }

  ngOnInit(): void {
    this.spinner.show();
    this.imageUrl = this.webapiService.imageUrl;
    this.getAllMentors();
    setTimeout(() => {
      this.title.setTitle('Mentors');
      this.meta.updateTag({ name: 'keywords', content: 'Yoga Vidya School Rishikesh Contact Details' });
      this.meta.updateTag({ name: 'description', content: 'We would love to hear from you. Whether you want more information on our classes or want to attend any events that we hold, just give us a quick call.' });
      const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
      const link = this._document.querySelector('link[rel="canonical"]');
      this._renderer2.setAttribute(link, 'href', canonicalUrl);
    }, 1000)
  }

  getAllMentors() {
    this.webapiService.getAllMentors().subscribe((res: any) => {
      this.mentorList = res.user;
      this.spinner.hide();
    });
  }

}
