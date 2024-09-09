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
      <p>Deepen your yoga knowledge and skills as you further delve deeper into advanced asana practices and immerse into the profound wisdom of ancient yogic philosophy. Experience these authentic and traditional yoga practices amidst the beauty of the island nation of Bali.</p>
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
    let url = `https://www.youtube.com/embed/${this.ytData?.videoId}`
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);

  }
}
