import { Component } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';
import { Router } from '@angular/router';
import { routeEnum } from '../../../enum/routes';
import { CommonModule } from '@angular/common';
import { WebapiService } from '../../../webapi.service';
import {
  baliCourseModel,
  FeeInfoItem,
  ScheduleItem,
} from '../../../models/bali';
import { BonusComponent } from '../../../certified/bonus/bonus.component';
import { MentorsComponent } from '../../../includes/home/mentors/mentors.component';
import { TestimonialsComponent } from '../../../includes/home/testimonials/testimonials.component';
import { Title } from '@angular/platform-browser';
import { faq, FaqComponent } from '../../../includes/home/faq/faq.component';

@Component({
  selector: 'app-bali-100-hour',
  standalone: true,
  imports: [
    CommonModule,
    BonusComponent,
    MentorsComponent,
    TestimonialsComponent,
    FaqComponent,
  ],
  templateUrl: './bali-100-hour.component.html',
  styleUrl: './bali-100-hour.component.css',
})
export class Bali100HourComponent {
  s3Bucket = s3Bucket;
  routeEnum = routeEnum;
  slugData: baliCourseModel = new baliCourseModel();
  scheduleArr: ScheduleItem[] = [];
  courseTeacher = [
    {
      course: 'Ashtanga',
      teacher: 'Pankaji',
    },
    {
      course: 'Pranayama',
      teacher: 'Prashantji',
    },
    {
      course: 'Alignment and Adjustment - Ayurveda',
      teacher: 'Pankaji - Naina',
    },
    {
      course: 'Philosophy',
      teacher: 'Swami Atmararrwanda Saraswati',
    },
    {
      course: 'Anatomy',
      teacher: 'Raj',
    },
    {
      course: 'Teaching Methodology',
      teacher: 'Tanyaji',
    },
    {
      course: 'Asana Practice with Alignment',
      teacher: 'Prashantji',
    },
    {
      course: 'Meditation',
      teacher: 'Aparnaji',
    },
  ];
  feesData: FeeInfoItem[] = [];
  chooseList = [
    'Ideal Combination of Tradition and Modern Practices: Seamlessly integrate age-old yogic knowledge with today’s evolved practices and imbibe them effortlessly in modern lifestyle',
    'Detailed Curriculum: A comprehensive syllabus with detailed modules dedicated to different styles of  asana practice, immersive pranayama and meditation and , deeply engaging ancient philosophy teachings',
    'Dedicated Yoga Masters: Understand and learn different yoga practices from yoga teachers who have graduated from credible, world-known yoga institutions. The yoga teachers at Yoga Vidya School are experts in their respective departments and committed towards providing you  traditional and authentic yoga knowledge.',
    'Supportive Environment: At Yoga Vidya School, aspiring yogis and yoginis understand the nuances of yoga in a nurturing environment that enhances learning outcomes',
    'Access to Online Courses: Enrich your yoga knowledge and enhance your physical asana  practice by getting access to a plethora of online yoga courses.',
  ];
  selectedIndex: number = -1;
  faqContent: faq[] = [];
  constructor(
    private router: Router,
    private webapiService: WebapiService,
    private _titleService: Title
  ) {
    this._titleService.setTitle(
      'Yoga Vidya School - 100 Hour Yoga Teacher Training in Bali'
    );
  }
  ngOnInit(): void {
    let data = {
      slug: routeEnum.bali100,
    };
    this.webapiService.getCourseById(data).subscribe((res: any) => {
      this.slugData = res.data[0];
      this.scheduleArr = this.slugData.scheduleInfo;
      this.feesData = this.slugData.feeInfo;
      this.faqContent = this.slugData.content;
    });
  }
  registerClick() {
    this.router.navigate(['checkout', routeEnum.bali100]);
  }
  openCloseTab(index: number) {
    if (this.selectedIndex === index) {
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = index;
    }
  }
}
