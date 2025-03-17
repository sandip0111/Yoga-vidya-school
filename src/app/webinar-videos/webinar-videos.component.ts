import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WebapiService } from '../webapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { WebinarVideosInterface } from '../models/WebinarVideosInterface';
import { ToastrService } from 'ngx-toastr';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-webinar-videos',
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  templateUrl: './webinar-videos.component.html',
  styleUrl: './webinar-videos.component.css'
})


export class WebinarVideosComponent {
  
  reverseArr : WebinarVideosInterface[] = [];
  name!: any;
  activeTabIndex = 0;
  userId: any;
  pdfSrc: any;
  constructor(private webapiService: WebapiService, private _activatedRoute: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService, private toastr: ToastrService) {
    this._activatedRoute.params.subscribe(params => {
      this.name = params['name'];
    });  
  }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('webinarLoginId');
    if(!this.userId){
      this.router.navigate(['/login']);
      return;
    }
    this.pdfSrc = 'assets/Swar-Yoga.pdf';
    this.getWebinarVideosByName(this.name);
  }

  setActiveTab(index: number) {
    this.activeTabIndex = index;
    setTimeout(() => {
      this.pdfSrc = 'assets/Swar-Yoga.pdf' ;
    }, 100);
  }
  getWebinarVideosByName(name: any) {
    this.spinner.show();
    let data = {
      "name": name
    }

    this.webapiService.getWebinarVideosByName(data).subscribe({
      next: (res: any) => {
        if (res) {
          this.reverseArr = res;
  
        }
        
        this.spinner.hide();
      },
      error: (error) => {
        this.spinner.hide();
        this.toastr.error(error.error.message, 'Error');
      },
    });
    this.webapiService.getWebinarVideosByName(data).subscribe((res: any) => {
      // console.log(res.data, 'course Data');
      
    })
  }
}
