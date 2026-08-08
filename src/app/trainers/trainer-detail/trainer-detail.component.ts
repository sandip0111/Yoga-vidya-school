import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebapiService } from '../../webapi.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { SeoService } from '../../services/seo.service';

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

  constructor(
    private _activatedRoute: ActivatedRoute,
    private webapiService: WebapiService,
    private spinner: NgxSpinnerService,
    protected sanitizer: DomSanitizer,
    private router: Router,
    private seoService: SeoService
  ) {
    this._activatedRoute.params.subscribe(params => {
      this.slug = params['id'];
    })
    this.getMentorBySlug(this.slug);
  }
  ngOnInit(): void {
    this.spinner.show();
  }

  getMentorBySlug(slug: any) {
    this.webapiService.getMentorBySlug(slug).subscribe((res: any) => {
      if (res?.data) {
        this.mentorData = res.data;
        this.seoService.updateSeo({
          title: `${res.data.name} | Yoga Teacher & Mentor | Yoga Vidya School`,
          description: `Learn more about ${res.data.name}, expert yoga mentor at Yoga Vidya School in Rishikesh & Bali. Discover their background, expertise, and teaching journey.`,
          keywords: `${res.data.name}, Yoga Mentor Rishikesh, Yoga Teacher Bali`,
          url: `/mentor/${slug}`
        });
      }
      this.spinner.hide();
    });
  }

}
