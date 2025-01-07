import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import { StartClassComponent } from '../start-class/start-class.component';
import { ActivatedRoute,Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-watch-video',
  standalone: true,
  imports: [CommonModule,StartClassComponent],
  templateUrl: './watch-video.component.html',
  styleUrls: ['./watch-video.component.css']
})
export class WatchVideoComponent implements OnInit {
  @Input() data:any
  slug:any;
  title:any='';
  ytData:any
  safeUrl: any;
  content:any='';
   constructor(private activatedRoute: ActivatedRoute, private router: Router,private sanitizer:DomSanitizer) {
     this.slug = this.activatedRoute.snapshot.routeConfig?.path;
     if(this.slug == '200-hour-yoga-teacher-training-in-bali'){
      this.content = `
      <p>Embark on a life-transforming journey as you join Yoga Vidya School’s revolutionary 200 Hour Yoga Teacher Training in Bali. Learn authentic and traditional forms of yoga as you are introduced to foundational principles and practices in yoga. Engage in the traditional Hatha yoga and Ashtanga Yoga asana styles, delve into ancient and much revered Indian texts of Bhagavad Gita and the Patanjali Sutras, indulge in immersive pranayama and meditation sessions and other yoga practices as you dwell in the coastal beauty of Bali.</p>
      <p>Depend your yoga knowledge and skills as you further delve deeper into advanced asana practices and immerse into the profound wisdom of ancient yogic philosophy. With a yoga instructor course bali experience these authentic and traditional yoga practices amidst the beauty of the island nation of Bali.</p>
      `
     }
     else if(this.slug == '300-hour-yoga-teacher-training-in-bali'){
      this.content = `
      <p>Aspire to become an accomplished yogi by enrolling in Yoga Vidya School’s 300 Hour Yoga Teacher Training in Bali. Deepen your yoga knowledge and skills as you further delve deeper into advanced asana practices and immerse into the profound wisdom of ancient yogic philosophy. Experience these authentic and traditional yoga practices amidst the beauty of the island nation of Bali. </p>
      `
     }
   }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges):void {
    this.ytData = changes['data'].currentValue;
    // console.log(this.ytData,'--');
    let url= '';
    if(this.slug == 'pranayama-course-online-pranarambha'){
      url = 'https://d3mzqk1fxuwngx.cloudfront.net/reviews/pranarambha_intro.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAWGOLULIWBNKET5SM%2F20250106%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250106T163245Z&X-Amz-Expires=3600&X-Amz-Signature=bd6d68f4499c266e99fa1d35bf90b00551ac35dbc778f4838cc74787908c8375&X-Amz-SignedHeaders=host&x-id=GetObject';
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }else{
      url = `https://www.youtube.com/embed/${this.ytData?.videoId}`
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
     

  }
}
