import { CommonModule } from '@angular/common';
import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import { StartClassComponent } from '../start-class/start-class.component';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fee-structure',
  standalone: true,
  imports: [CommonModule,StartClassComponent],
  templateUrl: './fee-structure.component.html',
  styleUrls: ['./fee-structure.component.css'],
})
export class FeeStructureComponent implements OnInit {
  @Input() data:any
  feesData:any;
  slug:any='';
  list: item[] = [];
  courseName: any='';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;

    if(this.slug == '200-hour-yoga-teacher-training-in-bali' || this.slug == '300-hour-yoga-teacher-training-in-bali'){
      if(this.slug == '200-hour-yoga-teacher-training-in-bali'){
        this.courseName = 'Yoga Instructor Course Bali?';
      }
      this.list = [
       {
         image: 'https://placehold.co/80x80',
         title: 'Traditional Ceremony ',
         text: '',
       },
       {
         image: 'https://placehold.co/80x80',
         title: '3 Weeks of Tuition',
         text: '',
       },
       {
         image: 'https://placehold.co/80x80',
         title: 'Accommodation at beautiful Ananda Ubud Resort ',
         text: '',
       },
       {
         image: 'https://placehold.co/80x80',
         title: 'Bed Sheets, Blankets and Towels',
         text: '',
       },
       {
         image: 'https://placehold.co/80x80',
         title: '3 Vegetarian Meals',
         text: '',
       },
       {
         image: 'https://placehold.co/80x80',
         title: 'Morning + Evening Tea/ Indian Chai',
         text: '',
       },
       {
         image: 'https://placehold.co/80x80',
         title: 'Cleansing Kit',
         text: '',
       },
       {
         image: 'https://placehold.co/80x80',
         title: 'Course Manual, Books and Notebooks',
         text: '',
       },
       {
         image: 'https://placehold.co/80x80',
         title: 'Internationally recognised Yoga Alliance Certificate',
         text: ''
       },
       {
         image: 'https://placehold.co/80x80',
         title: 'Visit to Local Attractions',
         text: '',
       },
      ]
   }
   else if(this.slug == '100-hours-yoga-teacher-training-in-rishikesh' || this.slug=='200-hours-yoga-teacher-training-in-rishikesh'){
       this.list = [
        {
          image: 'https://placehold.co/80x80',
          title: 'Havan Ceremony',
          text: '',
        },
        {
          image: 'https://placehold.co/80x80',
          title: '2 Weeks of Tuition',
          text: '',
        },
        {
          image: 'https://placehold.co/80x80',
          title: 'Accommodation',
          text: '',
        },
        {
          image: 'https://placehold.co/80x80',
          title: 'Bed Sheets, Blankets and Towels',
          text: '',
        },
        {
          image: 'https://placehold.co/80x80',
          title: '3 Vegetarian Meals',
          text: '',
        },
        {
          image: 'https://placehold.co/80x80',
          title: 'Morning + Evening Tea/ Indian Chai',
          text: '',
        },
        {
          image: 'https://placehold.co/80x80',
          title: 'Cleansing Kit',
          text: '',
        },
        {
          image: 'https://placehold.co/80x80',
          title: 'Course Manual, Books and Notebooks',
          text: '',
        },
        {
          image: 'https://placehold.co/80x80',
          title: 'Internationally recognised Yoga Alliance Certificate',
          text: '',
        },
        {
          image: 'https://placehold.co/80x80',
          title: 'Visit to Local Attractions',
          text: '',
        },
        {
          image: 'https://placehold.co/80x80',
          title: 'Celebration of Indian Festivals',
          text: '',
        },
       ]
    }
    else if(this.slug == '200-hour-yoga-teacher-training-in-kerala-india' || this.slug=='300-hour-yoga-teacher-training-in-kerala-india'){
      this.list = [
       {
         image: 'https://placehold.co/80x80',
         title: 'Havan Ceremony',
         text: '',
       },
       {
         image: 'https://placehold.co/80x80',
         title: '4 Weeks of Tuition',
         text: '',
       },
       {
         image: 'https://placehold.co/80x80',
         title: 'Accommodation',
         text: '',
       },
       {
         image: 'https://placehold.co/80x80',
         title: 'Bed Sheets, Blankets and Towels',
         text: '',
       },
       {
         image: 'https://placehold.co/80x80',
         title: '3 Vegetarian Meals',
         text: '',
       },
       {
         image: 'https://placehold.co/80x80',
         title: 'Morning + Evening Tea/ Indian Chai',
         text: '',
       },
       {
         image: 'https://placehold.co/80x80',
         title: 'Cleansing Kit',
         text: '',
       },
       {
         image: 'https://placehold.co/80x80',
         title: 'Course Manual, Books and Notebooks',
         text: '',
       },
       {
         image: 'https://placehold.co/80x80',
         title: 'Internationally recognised Yoga Alliance Certificate',
         text: '',
       },
       {
         image: 'https://placehold.co/80x80',
         title: 'Visit to Local Attractions',
         text: '',
       },
       {
         image: 'https://placehold.co/80x80',
         title: 'Celebration of Indian Festivals',
         text: '',
       },
      ]
   }
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges):void {
    this.feesData = changes['data'].currentValue;
  }

}

interface item {
  image: string;
  title: string;
  text: string;
}
