import { CommonModule } from '@angular/common';
import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import { WebapiService } from '../../webapi.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
 @Input() data: any;
 datesItem:any;
 inquiryData:any={}
 slug:any='';
 courseName: any;
 isRegistrationPageLabelToggle = false;
 sliderImage:any='https://my-s3-images-bucket.s3.amazonaws.com/images/InternalBackground_lticg8.jpg'
  constructor(private webapiService: WebapiService,private spinner:NgxSpinnerService,private router: Router, private activatedRoute: ActivatedRoute) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;
    if(this.slug == '200-hour-yoga-teacher-training-in-bali' || this.slug == 'yoga-retreat-in-bali' || this.slug == '300-hour-yoga-teacher-training-in-bali'){
      this.sliderImage = 'https://my-s3-images-bucket.s3.amazonaws.com/images/image_1688020831747_aqnfh1.jpg'
    }
    else if(this.slug == 'yoga-retreat-in-mysore-india'){
      this.sliderImage = 'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1692698338795.jpg'
    }
    else if(this.slug == '200-hour-yoga-teacher-training-in-kerala-india' || this.slug=='yoga-retreat-in-kerala-india' || this.slug=='breath-detox-yoga' || this.slug == 'foundation-of-spirituality-an-online-spiritual-awakening-course' || this.slug=='yoga-inversion-workshop-headstand' || this.slug=='yoga-philosophy-course-free' || this.slug=='yoga-history-and-philosophy' || this.slug == 'online-hip-opening-workshop'){
      this.sliderImage = 'https://my-s3-images-bucket.s3.amazonaws.com/images/deafult_banner_ockzmy.jpg'
    }
    else if(this.slug == 'pranayama-course-online-pranarambha'){
      this.sliderImage = 'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1683209101048.JPG'
    }
    else if(this.slug == 'yoga-retreat-in-peru'){
      this.sliderImage = 'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721289105818.jpeg';
    }
    if(this.slug == '100-hours-yoga-teacher-training-in-rishikesh' ||
       this.slug == '200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh' ||
       this.slug == '200-hours-yoga-teacher-training-in-rishikesh' ||
       this.slug == '300-hours-yoga-teacher-training-in-rishikesh' ||
       this.slug == '200-hour-yoga-teacher-training-scholarship-in-rishikesh' ||
       this.slug == '300-hour-yoga-teacher-training-scholarship-in-rishikesh' ||
       this.slug == '200-hour-yoga-teacher-training-in-bali' ||
       this.slug == '300-hour-yoga-teacher-training-in-bali' ||
       this.slug == '200-hour-yoga-teacher-training-in-kerala-india' ||
        this.slug == '300-hour-yoga-teacher-training-in-kerala-india'
    ) {
      this.isRegistrationPageLabelToggle = true;
    }
    
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges):void {
    // console.log(changes['data'].currentValue);
    this.datesItem = changes['data']?.currentValue?.event;
    this.courseName = changes['data']?.currentValue?.courseName
  }


  saveInquiry(data: any) {
    if (data.name && data.to) {
      this.spinner.show();
      // if (this.slug == "online-yoga-classes") {
      //   if (data.courseDate) {
      //     data.startDate = data.courseDate
      //     // data.startDate = "10.30 AM – 11.30 AM"
      //   }
      // }
      // else {
        if (data.courseDate) {
          let arr = data.courseDate.split("~");
          data.startDate = arr[0];
        }
        else {
          data.startDate = '-';
        }
      // }
      data.courseName = this.courseName
      data.type = 1;
      this.webapiService.saveInquiry(data).subscribe((res: any) => {

        if (res.status == "ok") {
          this.spinner.hide();
          alert(res.msg);
          this.inquiryData = {};
        }
        else {
          alert('something went wrong');
        }
      })
    }
    else {
      alert("Name and email are required");
      this.spinner.hide();
    }


  }

}
