import { Component,Renderer2,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { WebapiService } from '../../webapi.service';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-trainer-detail',
  standalone: true,
  imports: [],
  templateUrl: './trainer-detail.component.html',
  styleUrl: './trainer-detail.component.css'
})
export class TrainerDetailComponent {

  slug: any;
  mentorData: any

  constructor(private _activatedRoute: ActivatedRoute, private webapiService: WebapiService, private title: Title, private spinner: NgxSpinnerService, protected sanitizer: DomSanitizer,@Inject(DOCUMENT) private _document: Document, private _renderer2: Renderer2,private router:Router) {
    this._activatedRoute.params.subscribe(params => {
      this.slug = params['id'];
    })
    this.getMentorBySlug(this.slug);
  }
  ngOnInit(): void {
    const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
    const link = this._document.querySelector('link[rel="canonical"]');
    this._renderer2.setAttribute(link, 'href', canonicalUrl);
    this.spinner.show();
  }

  getMentorBySlug(slug: any) {
    this.webapiService.getMentorBySlug(slug).subscribe((res: any) => {
      this.mentorData = res.data;
      setTimeout(() => {
        this.title.setTitle(res.data.name);
      }, 1000)
      this.spinner.hide();
    });
  }

}
