import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebapiService } from '../../webapi.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private router: Router
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
        
      }
      this.spinner.hide();
    });
  }

}
