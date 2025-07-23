import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';

@Component({
  selector: 'app-we-offer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './we-offer.component.html',
  styleUrls: ['./we-offer.component.css']
})
export class WeOfferComponent implements OnInit {
  s3Bucket = s3Bucket;
  offers:offer[]=[
    {
      boxHeading:"In-School",
      titleBox1:"Yoga Teacher Training",
      titleBox2:"Yoga Retreats and Wellness Stays ",
      paraBox1:`Yoga Alliance Certified  100, 200, 300 and 500 Hr. Yoga TTCs`,
      paraBox2:"Private and Group Retreats covering Asanas, Meditation, Pranayama, Ayurveda Guided Local Excursions ",
      dateTimeBox1:"Starts on 3rd of Every Month",
      dateTimeBox2:"Every Monday",
      imgBox1:"https://my-s3-images-bucket.s3.amazonaws.com/images/online4_tuiozj.jpg",
      imgBox2:"https://my-s3-images-bucket.s3.amazonaws.com/images/onluneoff_vriefa.jpg",
      durationBox1:"14 Days to 30 Days ",
      durationBox2:"3 Days to 15 Days ",
      url1:"/200-hours-yoga-teacher-training-in-rishikesh",
      url2:"/yoga-retreat-in-rishikesh-india"
    },
    {
      boxHeading:"Online Offerings",
      titleBox1:"Live Classes/Courses",
      titleBox2:"Recorded Courses",
      paraBox1:`Daily Yoga Classes, Yoga Workshops and 200 Hour Yoga Teacher Training Private Classes also Available `,
      paraBox2:"Exclusively designed by Prashant J Yoga, Breath Detox, Prana Arambha Courses on Alignments and Yoga Philosophy ",
      dateTimeBox1:"First Monday of Every Months ",
      dateTimeBox2:"Starts Anytime",
      imgBox1:"https://my-s3-images-bucket.s3.amazonaws.com/images/online3_pseqg1.jpg",
      imgBox2:"https://my-s3-images-bucket.s3.amazonaws.com/images/onlinr2_lunr65.jpg",
      durationBox1:"One Month for Classes",
      durationBox2:"1 Week to 30 Days",
      url1:"/200-hours-yoga-teacher-training-online",
      url2:"/pranayama-course-online-pranarambha"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}

interface offer{
  boxHeading: string,
  titleBox1:string,
  titleBox2:string,
  paraBox1:string,
  paraBox2:string,
  dateTimeBox1:string,
  dateTimeBox2:string,
  imgBox1:string,
  imgBox2:string,
  durationBox1:string,
  durationBox2:string,
  url1:string,
  url2:string,
}
