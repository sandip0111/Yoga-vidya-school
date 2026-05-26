import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { WebapiService } from '../webapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { WebinarVideosInterface } from '../models/WebinarVideosInterface';
import { ToastrService } from 'ngx-toastr';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-webinar-videos',
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  templateUrl: './webinar-videos.component.html',
  styleUrl: './webinar-videos.component.css'
})


export class WebinarVideosComponent implements OnInit, OnDestroy {
  
  reverseArr : WebinarVideosInterface[] = [];
  name!: any;
  activeTabIndex = 0;
  userId: any;
  readonly pdfUrl = '/assets/Swar-Yoga.pdf';
  pdfSrc: any = this.pdfUrl;
  pdfSafeUrl: SafeResourceUrl;
  showNativePdfFallback = false;
  private pdfRequestStarted = false;
  private pdfObjectUrl = '';
  private pdfFallbackTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(private webapiService: WebapiService, private _activatedRoute: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService, private toastr: ToastrService, private http: HttpClient, private sanitizer: DomSanitizer, @Inject(PLATFORM_ID) private platformId: Object) {
    this.pdfSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);
    this._activatedRoute.params.subscribe(params => {
      this.name = params['name'];
    });  
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.userId = sessionStorage.getItem('webinarLoginId');
    if(!this.userId){
      this.router.navigate(['/login']);
      return;
    }
    this.loadPdfIndependently();
    this.getWebinarVideosByName(this.name);
  }

  ngOnDestroy(): void {
    this.clearPdfFallbackTimer();
    if (this.pdfObjectUrl) {
      URL.revokeObjectURL(this.pdfObjectUrl);
    }
  }

  setActiveTab(index: number) {
    this.activeTabIndex = index;
    setTimeout(() => {
      this.pdfSrc = this.pdfObjectUrl || this.pdfUrl;
      this.startPdfFallbackTimer();
    }, 100);
  }

  handlePdfLoaded() {
    this.showNativePdfFallback = false;
    this.clearPdfFallbackTimer();
  }

  handlePdfLoadingFailed() {
    this.showNativePdfFallback = true;
    this.clearPdfFallbackTimer();
  }

  private loadPdfIndependently() {
    if (this.pdfRequestStarted) {
      return;
    }

    this.pdfRequestStarted = true;
    this.startPdfFallbackTimer();

    this.http.get(this.pdfUrl, { responseType: 'blob' }).subscribe({
      next: (pdfBlob) => {
        if (this.pdfObjectUrl) {
          URL.revokeObjectURL(this.pdfObjectUrl);
        }

        this.pdfObjectUrl = URL.createObjectURL(pdfBlob);
        this.pdfSrc = this.pdfObjectUrl;
        this.pdfSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfObjectUrl);
      },
      error: () => {
        this.pdfSrc = this.pdfUrl;
        this.pdfSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);
        this.showNativePdfFallback = true;
      },
    });
  }

  private startPdfFallbackTimer() {
    this.clearPdfFallbackTimer();
    this.pdfFallbackTimer = setTimeout(() => {
      this.showNativePdfFallback = true;
    }, 3000);
  }

  private clearPdfFallbackTimer() {
    if (this.pdfFallbackTimer) {
      clearTimeout(this.pdfFallbackTimer);
      this.pdfFallbackTimer = null;
    }
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
    
  }
}
