import { Component } from '@angular/core';
import { StartClassComponent } from '../bali/start-class/start-class.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { s3Bucket } from '../../enum/s3Bucket';

@Component({
  selector: 'app-course-mentor',
  standalone: true,
  imports: [CommonModule, StartClassComponent],
  templateUrl: './course-mentor.component.html',
  styleUrl: './course-mentor.component.css',
})
export class CourseMentorComponent {
  slug: string | undefined = '';
  courseMentor: mentorTimings[] = [];
  isShowAddToCart: boolean = false;
  s3Bucket = s3Bucket;
  constructor(private _activatedRoute: ActivatedRoute, private router: Router) {
    this.slug = this._activatedRoute.snapshot.routeConfig?.path;
    if (this.slug == 'online-yoga-classes') {
      this.isShowAddToCart = true;
      this.courseMentor = jsonData;
    }
    // else if (
    //   this.slug == 'breath-detox-yoga' ||
    //   this.slug == 'pranayama-course-online-pranarambha' ||
    //   this.slug == 'yoga-inversion-workshop-headstand' ||
    //   this.slug == 'yoga-philosophy-course-free' ||
    //   this.slug == 'pranic-purification' ||
    //   this.slug == '21-days-ashtanga-yoga-immersion' ||
    //   this.slug == 'pranayama-therapy-course-online' ||
    //   this.slug == 'adjustment-and-alignment' ||
    //   this.slug == 'adjustment-and-alignment-level-2' ||
    //   this.slug == 'yoga-teacher-training-in-india' ||
    //   this.slug == 'drop-in-yoga-classes' ||
    //   this.slug == 'yoga-for-weight-loss'
    // ) {
    //   this.courseMentor = [
    //     {
    //       name: 'Acharya Prashant Jakhmola',
    //       image: 'image_1673271873934.jfif',
    //       intro: 'Morning Sadhana',
    //       time: '',
    //       price: '',
    //     },
    //   ];
    // } else if (
    //   this.slug == 'online-hip-opening-workshop' ||
    //   this.slug == 'yoga-history-and-philosophy'
    // ) {
    //   this.courseMentor = [
    //     {
    //       name: 'Acharya Prashant Jakhmola',
    //       image: 'image_1673271873934.jfif',
    //       intro: 'Morning Sadhana',
    //       time: '',
    //       price: '',
    //     },
    //     {
    //       name: 'Swami Atmatattwananda Sarawati',
    //       image: 'image_1673271849951.jpg',
    //       intro: 'Yoga Philosophy',
    //       time: '',
    //       price: '',
    //     },
    //     {
    //       name: 'Aparna Sharma',
    //       image: 'image_1673271914610.jpeg',
    //       intro: 'Meditation & Mantras',
    //       time: '',
    //       price: '',
    //     },
    //     {
    //       name: 'Pankaj Sharma',
    //       image: 'image_1675167512673.jpeg',
    //       intro: 'Ashtanga Yoga',
    //       time: '',
    //       price: '',
    //     },
    //     {
    //       name: 'Taniya',
    //       image: 'image_1675243508012.jpg',
    //       intro: 'Hatha/ Yoga Therapy',
    //       time: '',
    //       price: '',
    //     },
    //     {
    //       name: 'Shivam Joshi',
    //       image: 'image_1673271925503.jpeg',
    //       intro: 'Pranayama',
    //       time: '',
    //       price: '',
    //     },
    //     {
    //       name: 'Ksenia Rasapriya Bodhi Ji',
    //       image: 'image_1673271882991.jpg',
    //       intro: 'Yoga Anatomy',
    //       time: '',
    //       price: '',
    //     },
    //   ];
    // } else if (this.slug == '200-hours-yoga-teacher-training-online') {
    //   this.courseMentor = [
    //     {
    //       name: 'Acharya Prashant Jakhmola',
    //       image: 'image_1673271873934.jfif',
    //       intro: 'Morning Sadhana',
    //       time: '',
    //       price: '',
    //     },
    //     {
    //       name: 'Swami Atmatattwananda Sarawati',
    //       image: 'image_1673271849951.jpg',
    //       intro: 'Yoga Philosophy',
    //       time: '',
    //       price: '',
    //     },
    //     {
    //       name: 'Shivam Joshi',
    //       image: 'image_1673271925503.jpeg',
    //       intro: 'Pranayama',
    //       time: '',
    //       price: '',
    //     },
    //   ];
    // }
  }
  goToMentorPage(url: string, id: number): void {
    if (url) {
      this.router.navigate([url, id]).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }
}

export interface mentorTimings {
  id: number;
  name: string;
  image: string;
  title: string;
  weeklyTime: string;
  time: {
    time1: string;
    time2: string;
    stamp: String;
  };
  nextBatch: string;
  price: {
    priceInIndian: number;
    priceInUSD: number;
    discountIndian?: number;
    discountUSD?: number;
  };
  description: string;
  url: string;
}
export let jsonData = [
{
    id: 1,
    name: 'Acharya Prashant Jakhmola',
    image: s3Bucket.courseMentro1,
    title: 'Yoga Sadhana',
    weeklyTime: 'From Monday to Friday',
    time: {
      time1: '6:00 am',
      time2: '7:00 am',
      stamp: 'IST',
    },
    nextBatch: 'October the 6th(Not available during September)',
    price: {
      priceInIndian: 2999,
      priceInUSD: 70,
      discountIndian: 2249,
      discountUSD: 52,
    },
    description:
      'Interactive class combining Hatha asanas and pranayama each morning for holistic physical, mental, and spiritual growth. Suitable for all levels, with focus on correct alignment and routine building.',
    url: 'prashant-jhakmola-online-class',
  },
  // {
  //   id: 2,
  //   name: 'Anuj Pareek',
  //   image: s3Bucket.courseMentor2,
  //   title: 'Therapeutic Hatha Yoga',
  //   weeklyTime: 'From Monday to Thursday',
  //   time: {
  //     time1: '5:30 am',
  //     time2: '6:30 am',
  //     stamp: 'IST',
  //   },
  //   nextBatch: 'October the 6th',
  //   price: { priceInIndian: 1999, priceInUSD: 50 },
  //   description:
  //     'Progressive, dynamic and therapeutic Hatha sequence tailored for mobility and release of long-held tension from sedentaries lifestyles.',
  //   url: 'anuj-online-class',
  // },
  {
    id: 3,
    name: 'Taniya Verma',
    image: s3Bucket.courseMentor3,
    title: 'Woman Wellness Yoga',
    weeklyTime: 'From Monday to Thursday',
    time: {
      time1: '5:00 PM',
      time2: '6:00 PM',
      stamp: 'IST',
    },
    nextBatch: 'Coming soon....',
    price: { priceInIndian: 1999, priceInUSD: 40 },
    description:
      'A gentle and supportive practice designed specially for women from menstruation to menopause combining asana, pranayama, nutrition tips and hormone-balancing restorative techniques.',
    url: 'taniya-verma-online-class',
  },
  // {
  //   id: 4,
  //   name: 'Anuj Pareek',
  //   image: s3Bucket.courseMentor2,
  //   title: 'Intermediate Alignment Based Class',
  //   weeklyTime: 'Monday / Wednesday / Friday',
  //   time: {
  //     time1: '6:15 pm',
  //     time2: '7:15 pm',
  //     stamp: 'IST',
  //   },
  //   nextBatch: 'October the 6th',
  //   price: { priceInIndian: 3500, priceInUSD: 70 },
  //   description:
  //     'Advanced, mobility-rich sessions emphasizing arm balance and inversions with therapeutic methods. Ideal for progressing students beyond basic.',
  //   url: 'anuj-online-class',
  // }

];
