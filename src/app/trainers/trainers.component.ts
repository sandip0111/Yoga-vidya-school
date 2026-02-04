import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WebapiService } from '../webapi.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { s3Bucket } from '../enum/s3Bucket';

@Component({
  selector: 'app-trainers',
  standalone: true,
  imports: [CommonModule, RouterLink, LazyLoadImageModule],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.css',
})
export class TrainersComponent {
  public defaultImage =
    'https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';
  mentorList: any;
  imageUrl: any;
  selectedMentor: any = null;
  selectedMentorSlug: string = '';
  showModal: boolean = false;
  s3Bucket = s3Bucket;

  constructor(
    private webapiService: WebapiService,
    private spinner: NgxSpinnerService,
    private title: Title,
    private meta: Meta,
    private router: Router,
    @Inject(DOCUMENT) private _document: Document,
    private _renderer2: Renderer2,
    public sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.imageUrl = this.webapiService.imageUrl;
    this.getAllMentors();
    setTimeout(() => {
      this.title.setTitle('Mentors');
      this.meta.updateTag({
        name: 'keywords',
        content: 'Yoga Vidya School Rishikesh Contact Details',
      });
      this.meta.updateTag({
        name: 'description',
        content:
          'We would love to hear from you. Whether you want more information on our classes or want to attend any events that we hold, just give us a quick call.',
      });
      const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
      const link = this._document.querySelector('link[rel="canonical"]');
      this._renderer2.setAttribute(link, 'href', canonicalUrl);
    }, 1000);
  }

  getAllMentors() {
    this.webapiService.getAllMentors().subscribe((res: any) => {
      this.mentorList = res.user;
      this.spinner.hide();
    });
  }

  openModal(slug: string) {
    this.selectedMentorSlug = slug;
    this.showModal = true;

    if (slug === 'acharya-prashant-jakhmola') {
      // Static content, no need to fetch
      this.selectedMentor = null; // or set a dummy object if needed
      this._renderer2.addClass(this._document.body, 'modal-open');
    } else {
      this.spinner.show();
      this.webapiService.getMentorBySlug(slug).subscribe((res: any) => {
        this.selectedMentor = res.data;
        this.spinner.hide();
        this._renderer2.addClass(this._document.body, 'modal-open');
      });
    }
  }

  closeModal() {
    this.showModal = false;
    this.selectedMentor = null;
    this.selectedMentorSlug = '';
    this._renderer2.removeClass(this._document.body, 'modal-open');
  }
}
