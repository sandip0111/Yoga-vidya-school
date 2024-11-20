import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-testimonials',
  standalone: true,
  templateUrl: './video-testimonials.component.html',
  styleUrls: ['./video-testimonials.component.css']
})
export class VideoTestimonialsComponent implements OnInit {
  slug: any ='';
  YtLink: string = '';
  youtubeUrlSafe?: SafeResourceUrl;
  constructor(private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;
    this.YtLink = 'https://www.youtube.com/embed/vPD1NGMY_8E?si=PZ1aqfhF5s0UKkaA';
    if(this.slug == '200-hour-yoga-teacher-training-in-bali'){
      this.YtLink = 'https://www.youtube.com/embed/f6iCxlGPxsc?si=7Whb6zfk1xgpx0IQ';
    }
    else if(this.slug == '300-hour-yoga-teacher-training-in-bali'){
      this.YtLink = 'https://www.youtube.com/embed/HbQjFDSWZjo?si=vOAZGj1JjWGDyIhc';
    }
   }

  ngOnInit() {
    this.youtubeUrlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.YtLink);
  }

}
