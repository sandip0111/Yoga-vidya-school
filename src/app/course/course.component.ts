import {
  Component,
  Inject,
  Renderer2,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { WebapiService } from '../webapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import {
  DomSanitizer,
  Title,
  Meta,
} from '@angular/platform-browser';
import { BottomNavComponent } from '../includes/home/bottom-nav/bottom-nav.component';
import { AboutComponent } from '../includes/home/about/about.component';
import { JoinTrainingComponent } from '../includes/home/join-training/join-training.component';
import { AboutYogaComponent } from '../includes/home/about-yoga/about-yoga.component';
import { MeetComponent } from '../includes/home/meet/meet.component';
import { TraningImportanceComponent } from '../includes/home/traning-importance/traning-importance.component';
import { CourseBannerComponent } from './course-banner/course-banner.component';
import { StartClassComponent } from './bali/start-class/start-class.component';
import { MentorsComponent } from '../includes/home/mentors/mentors.component';
import { BenifitsComponent } from '../includes/home/benifits/benifits.component';
import { TestimonialsComponent } from '../includes/home/testimonials/testimonials.component';
import { FaqComponent } from '../includes/home/faq/faq.component';
import { CourseMentorComponent } from './course-mentor/course-mentor.component';
import { SafePipe } from '../safe.pipe';
import { VideoReviewsComponent } from './video-reviews/video-reviews.component';
import { ReviewListComponentComponent } from '../text-review-list/review-list-component/review-list-component.component';
import { routeEnum } from '../enum/routes';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [
    CommonModule,
    BottomNavComponent,
    AboutComponent,
    JoinTrainingComponent,
    AboutYogaComponent,
    MeetComponent,
    TraningImportanceComponent,
    CourseBannerComponent,
    StartClassComponent,
    MentorsComponent,
    BenifitsComponent,
    TestimonialsComponent,
    MeetComponent,
    FaqComponent,
    CourseMentorComponent,
    SafePipe,
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
  slug: string | undefined = '';
  imageUrl: string = '';
  courseList: any;
  introLink: string = '';
  routEnum = routeEnum;
  constructor(
    private webapiService: WebapiService,
    private _activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title,
    private meta: Meta,
    protected sanitizer: DomSanitizer,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.slug = this._activatedRoute.snapshot.routeConfig?.path;
    this.imageUrl = this.webapiService.imageUrl;
    if (this.slug) {
      this.getCourseBySlug(this.slug);
    }
  }
  ngOnInit(): void {
    const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
    const link = this._document.querySelector('link[rel="canonical"]');
    this._renderer2.setAttribute(link, 'href', canonicalUrl);
  }

  getCourseBySlug(slug: any) {
    let data = {
      slug: slug,
    };
    this.webapiService.getCourseById(data).subscribe((res: any) => {
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
    });
  }
}
