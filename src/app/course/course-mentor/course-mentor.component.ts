import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { s3Bucket } from '../../enum/s3Bucket';
import { razorPayReturnModel } from '../../models/checkout';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-course-mentor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-mentor.component.html',
  styleUrl: './course-mentor.component.css',
})
export class CourseMentorComponent {
  slug: string | undefined = '';
  courseMentor: any[] = [];
  isShowAddToCart: boolean = false;
  s3Bucket = s3Bucket;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {
    this.slug = this._activatedRoute.snapshot.routeConfig?.path;
    if (this.slug == 'online-yoga-classes') {
      this.getTeachersData(this.slug);
      this.isShowAddToCart = true;
    }
  }
  getTeachersData(slug: string) {
    this.cartService.getTeachersData(slug).subscribe({
      next: (data) => {
        this.courseMentor = data;
      },
      error: (error) => {
        console.error('Failed to load teachers:', error);
      },
    });
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
  teacher: string;
  weeklyTime: string;
  time: string;
  date: string;
  price: razorPayReturnModel[];
  description: string;
  url: string;
}
export let jsonData = [
  {
    id: 1,
    name: 'Acharya Prashant Jakhmola',
    image: s3Bucket.courseMentro1,
    title: 'Yoga Sadhana',
    weeklyTime: 'From Monday to Thursday',
    time: {
      time1: '6:00 AM',
      time2: '7:00 AM',
      stamp: 'IST',
    },
    nextBatch: 'November, the 3rd',
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
