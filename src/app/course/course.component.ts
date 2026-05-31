import { Component, Inject, Renderer2, DOCUMENT } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebapiService } from '../webapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, Title, Meta } from '@angular/platform-browser';
import { StartClassComponent } from './bali/start-class/start-class.component';
import { MentorsComponent } from '../includes/home/mentors/mentors.component';
import { BenifitsComponent } from '../includes/home/benifits/benifits.component';
import { TestimonialsComponent } from '../includes/home/testimonials/testimonials.component';
import { FaqComponent } from '../includes/home/faq/faq.component';
import { VideoReviewsComponent } from './video-reviews/video-reviews.component';
import { ReviewListComponentComponent } from '../text-review-list/review-list-component/review-list-component.component';
import { routeEnum } from '../enum/routes';
import { s3Bucket } from '../enum/s3Bucket';
import { PixelTrackingService } from '../services/pixel-tracking.service';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [
    CommonModule,
    StartClassComponent,
    MentorsComponent,
    BenifitsComponent,
    TestimonialsComponent,
    FaqComponent,
    VideoReviewsComponent,
    ReviewListComponentComponent,
  ],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  public defaultImageLandscape =
    'https://my-s3-images-bucket.s3.amazonaws.com/images/deafult_banner_ockzmy.jpg';
  coreValues = [
    {
      image: 'bullet.png',
      title: 'Authenticity',
      title1: '',
      text: 'Discover traditional yoga practices as mentioned in our ancient yoga texts, our experienced teachers don’t compromise with the authenticity but make the complex topics easy in accessible way.',
    },
    {
      image: 'bullet.png',
      title: 'Holistic',
      title1: 'Wellness',
      text: 'In the online yoga classes, we focus on total wellness through Movements, Breath and Meditation.',
    },
    {
      image: 'bullet.png',
      title: 'Inclusivity',
      title1: '',
      text: 'With more than 4 years of experience in online teaching, we offer accessible classes suitable for all levels, from beginners to advanced practitioners',
    },
    {
      image: 'bullet.png',
      title: 'Empowering',
      title1: '',
      text: 'At Yoga Vidya School, Rishikesh, we are committed to empower our students and community by offering  lifelong assistance and guidance',
    },
    {
      image: 'bullet.png',
      title: 'High ',
      title1: 'Standards',
      text: 'We are backed with the best yoga teachers of India and thus never compromise with the standards and quality of our classes.',
    },
  ];
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
      course: 'Aligment and Adjustment',
      teacher: 'Pankaji',
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
      course: 'Asana Practice with Aligment',
      teacher: 'Prashantji',
    },
    {
      course: 'Meditation',
      teacher: 'Aparnaji',
    },
    {
      course: 'Ayurveda',
      teacher: 'Naina',
    },
  ];
  slug: string | undefined = '';
  courseList: any;
  introLink: string = '';
  routEnum = routeEnum;
  s3Bucket = s3Bucket;
  constructor(
    private webapiService: WebapiService,
    private _activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title,
    private meta: Meta,
    protected sanitizer: DomSanitizer,
    private _renderer2: Renderer2,
    private pixelTracking: PixelTrackingService,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.slug = this._activatedRoute.snapshot.routeConfig?.path;
    if (this.slug) {
      this.getCourseBySlug(this.slug);
    }
  }
  ngOnInit(): void {
    this.ogMetaTag(this.slug ?? '');
    const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
    const link = this._document.querySelector('link[rel="canonical"]');
    this._renderer2.setAttribute(link, 'href', canonicalUrl);
  }

  getCourseBySlug(slug: any) {
    let data = {
      slug: slug,
    };
    this.webapiService.getCourseById(data).subscribe({
      next: (res: any) => {
        // console.log(res.data, 'course Data');
        const currentDate = new Date();
        if (res.data.length > 0) {
          this.courseList = res.data[0];
          // this.courseName = res.data[0].coursetitle;
          // const currentDate = new Date();
          // this.upcomingDates = res.data[0]?.upcomingEventInfo.filter((item: any) => {
          //   const itemDate = new Date(item.startDate);
          //   return itemDate >= currentDate;
          // });
          this.introLink =
            'https://www.youtube.com/embed/' + res.data[0].courseintrovideoId;
          //console.log(this.introLink,'--');

          this.title.setTitle(res.data[0].metaTitle);
          this.meta.updateTag({
            name: 'keywords',
            content: res.data[0].metaKeyword,
          });
          this.meta.updateTag({
            name: 'description',
            content: res.data[0].metaDescription,
          });
          // this.checkForCourse(this.userId, res.data[0]._id);
        } else {
          // this.router.navigate(['/']);
          // this.spinner.hide();
        }
      },
      error: () => {},
    });
  }

  ogMetaTag(slug: string) {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    console.log(slug, 'slug--- ');
    this.pixelTracking.trackViewContent(
      'online-yoga-classes',
      'online-yoga-classes'
    );
    this.trackScrollDepth();
    this.trackTimeOnPage();
  }
  trackTimeOnPage() {
    const timeThresholds = [30, 60, 120, 300];
    const trackedTimes = new Set<number>();
    timeThresholds.forEach((threshold) => {
      setTimeout(() => {
        if (!trackedTimes.has(threshold)) {
          trackedTimes.add(threshold);
          this.pixelTracking.trackTimeOnPage(threshold);
        }
      }, threshold * 1000);
    });
  }
  trackScrollDepth() {
    const scrollThresholds = [25, 50, 75, 100];
    const trackedThresholds = new Set<number>();
    window.addEventListener('scroll', () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / scrollHeight) * 100);
      scrollThresholds.forEach((threshold) => {
        if (scrollPercent == threshold) {
          trackedThresholds.add(threshold);
          this.pixelTracking.trackScroll(threshold);
        }
      });
    });
  }
}
