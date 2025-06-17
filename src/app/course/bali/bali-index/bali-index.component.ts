import {
  Component,
  OnInit,
  Inject,
  Renderer2,
  ViewChild,
  ElementRef,
  PLATFORM_ID,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { BottomNavComponent } from '../../../includes/home/bottom-nav/bottom-nav.component';
import { AboutBaliComponent } from '../about-bali/about-bali.component';
import { CurriculumComponent } from '../curriculum/curriculum.component';
import { IncludesComponent } from '../includes/includes.component';
import { FeeStructureComponent } from '../fee-structure/fee-structure.component';
import { ChooseUsComponent } from '../choose-us/choose-us.component';
import { MentorsComponent } from '../../../includes/home/mentors/mentors.component';
import { ServicesComponent } from '../services/services.component';
import { LearningComponent } from '../learning/learning.component';
import { CodeConductComponent } from '../code-conduct/code-conduct.component';
import { WatchVideoComponent } from '../watch-video/watch-video.component';
import { TestimonialsComponent } from '../../../includes/home/testimonials/testimonials.component';
import { GalleryComponent } from '../../../includes/home/gallery/gallery.component';
import { VideoTestimonialsComponent } from '../video-testimonials/video-testimonials.component';
import { AchievementsComponent } from '../../../includes/home/achievements/achievements.component';
import { FaqComponent } from '../../../includes/home/faq/faq.component';
import { BenifitsComponent } from '../../../includes/home/benifits/benifits.component';
import { BannerComponent } from '../../banner/banner.component';
import { WebapiService } from '../../../webapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { YogaAllianceComponent } from '../../rishikesh/yoga-alliance/yoga-alliance.component';
import { ScheduleComponent } from '../../rishikesh/schedule/schedule.component';
import { BottomNavCourseComponent } from '../../../includes/home/bottom-nav-course/bottom-nav-course.component';
import { ReviewListComponentComponent } from '../../../text-review-list/review-list-component/review-list-component.component';
import { VideoReviewsComponent } from '../../video-reviews/video-reviews.component';
import { feesStructureModel } from '../../../models/rishikesh';
@Component({
  selector: 'app-bali-index',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    BottomNavComponent,
    AboutBaliComponent,
    CurriculumComponent,
    IncludesComponent,
    FeeStructureComponent,
    ChooseUsComponent,
    MentorsComponent,
    ServicesComponent,
    LearningComponent,
    CodeConductComponent,
    WatchVideoComponent,
    TestimonialsComponent,
    GalleryComponent,
    VideoTestimonialsComponent,
    AchievementsComponent,
    FaqComponent,
    BenifitsComponent,
    YogaAllianceComponent,
    ScheduleComponent,
    BottomNavCourseComponent,
    ReviewListComponentComponent,
    VideoReviewsComponent,
  ],
  templateUrl: './bali-index.component.html',
  styleUrls: ['./bali-index.component.css'],
})
export class BaliIndexComponent implements OnInit {
  slug: any = '';
  faqData: any;
  ispranayamaCourseOnlinePranarambha = false;
  upEventData: any;
  youtubeVideoData: feesStructureModel = new feesStructureModel();
  accomData: any;
  feesData: any = {};
  codecond: any = {};
  currData: any;
  schEventData: any = {};
  bannerData: any = {};
  @ViewChild('banner', { read: ElementRef }) banner!: ElementRef;
  @ViewChild(BannerComponent) appBannerComponent!: BannerComponent;
  isBannerVisible = true;
  isYoutubeDataReady: boolean = false;
  constructor(
    private webapiService: WebapiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;
    if (this.slug == 'pranayama-course-online-pranarambha') {
      this.ispranayamaCourseOnlinePranarambha = true;
    }
    if (this.slug) {
      this.getCourseBySlug(this.slug);
    }
  }

  ngOnInit() {
    this.spinner.show();
    if (this.slug == '200-hour-yoga-teacher-training-in-bali') {
      let script = this._renderer2.createElement('script');
      script.type = `application/ld+json`;
      script.text = `
      {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "200 Hour Yoga Teacher Training in Bali",
        "description": "Bali, with its beautiful beaches and exotic temples, has every kind of natural beauty that makes it the best place to practice and learn Yoga. The wonderful mix of ancient culture, art, spirituality, pleasant weather and healthy food will relax your body, mind and spirit deeply, ensuring every moment of your yoga teacher training or yoga retreat a magical experience.",
        "image": "https://my-s3-images-bucket.s3.amazonaws.com/images/includesImg_gyw8ra.jpg",
        "startDate": "2024-04-03",
        "endDate": "2024-04-30",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "Yoga Vidya School",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Bali",
            "postalCode": "",
            "addressCountry": "ID"
          }
        },
        "performer": {
          "@type": "Person",
          "name": "Prashant Jakhmola"
        },
        "offers": {
          "@type": "Offer",
          "name": "Signup",
          "price": "1200",
          "priceCurrency": "USD",
          "validFrom": "",
          "url": "https://www.yogavidyaschool.com/200-hour-yoga-teacher-training-in-bali",
          "availability": "https://schema.org/InStock"
        }
      }`;
      this._renderer2.appendChild(this._document.head, script);
    }

    const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
    const link = this._document.querySelector('link[rel="canonical"]');
    if (link) {
      this._renderer2.setAttribute(link, 'href', canonicalUrl);
    }
  }

  ngAfterViewInit() {
    // Dynamically button hide and show when banneris not visible in viewport
    this.observeBannerVisibility();
  }

  scrollToBanner() {
    if (this.banner?.nativeElement) {
      // Scroll to the banner
      this.banner.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // Wait for scrolling to complete, then call highlight function in the child component
      setTimeout(() => {
        this.appBannerComponent.highlightRegisterForm();
      }, 500);
    }
  }

  private observeBannerVisibility() {
    if (!isPlatformBrowser(this.platformId) || !this.banner) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        this.isBannerVisible = entry.isIntersecting;
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    observer.observe(this.banner.nativeElement);
  }

  getCourseBySlug(slug: any) {
    let data = {
      slug: slug,
    };
    this.webapiService.getCourseById(data).subscribe((res: any) => {
      const currentDate = new Date();
      if (res.data.length > 0) {
        this.spinner.hide();
        this.faqData = res.data[0].content;
        this.upEventData = res.data[0]?.upcomingEventInfo.filter(
          (item: any) => {
            const itemDate = new Date(item.startDate);
            return itemDate >= currentDate;
          }
        );
        this.bannerData = {
          event: this.upEventData,
          courseName: res.data[0].coursetitle,
        };
        this.schEventData = {
          title: res.data[0].coursetitle,
          events: this.upEventData,
          url: res.data[0].slug,
          loc: 'Bali',
        };
        this.currData = {
          title: res.data[0].coursetitle,
          curr: res.data[0].curriculumInfo,
        };
        this.youtubeVideoData = {
          title: res.data[0].coursetitle,
          videoId: res.data[0].courseintrovideoId,
          amount: '',
          currency: '',
        };
        this.isYoutubeDataReady = true;
        this.accomData = {
          accom: res.data[0].accommodationInfo[0]?.para,
          food: res.data[0].foodInfo[0]?.para,
        };

        this.feesData = {
          title: res.data[0].coursetitle,
          amount: res.data[0].feeInfo[0]?.amount,
          currency: res.data[0].feeInfo[0]?.currency,
        };

        this.codecond = {
          title: res.data[0].coursetitle,
        };

        // this.courseList = res.data[0];
        // this.courseName = res.data[0].coursetitle;
        // const currentDate = new Date();
        // this.upcomingDates = res.data[0]?.upcomingEventInfo.filter((item: any) => {
        //   const itemDate = new Date(item.startDate);
        //   return itemDate >= currentDate;
        // });
        // let url = `https://www.youtube.com/embed/${res.data[0].courseintrovideoId}`
        // this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
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
        this.router.navigate(['/']);
        this.spinner.hide();
      }
    });
  }
}
