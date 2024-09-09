import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-workshop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './online-workshop.component.html',
  styleUrls: ['./online-workshop.component.css']
})
export class OnlineWorkshopComponent implements OnInit {
  workshops:workshop[]=[
    {
      img:"workshop1.png",
      title:"Free Yoga Workshops",
      description:"Workshops with Yogi Prashant J Yoga",
      title2:"",
      link:"Enroll Now",
      contact:"Get Any Question ?",
      mobile:"+91 9818660954",
      image:"https://my-s3-images-bucket.s3.amazonaws.com/images/free-wkshop_jtvkw7.jpg",
      url:"/breath-detox-yoga"
    },
    {
      img:"workshop2.png",
      title:"Paid Yoga Workshops",
      description:"Online from The Land of Yoga - Rishikesh",
      title2:"",
      link:"Enroll Now",
      contact:"Get Any Question ?",
      mobile:"+91 9818660954",
      image:"https://my-s3-images-bucket.s3.amazonaws.com/images/paid-wkshop_guyohr.jpg",
      url:"/"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}

interface workshop{
  img:string,
  title:string,
  description:string,
  title2:string,
  link:string
  contact:string
  mobile:string
  image:string,
  url:string
}
