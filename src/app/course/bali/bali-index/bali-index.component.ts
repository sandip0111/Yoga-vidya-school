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
import { faq, FaqComponent } from '../../../includes/home/faq/faq.component';
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
import { routeEnum } from '../../../enum/routes';
import { PixelTrackingService } from '../../../services/pixel-tracking.service';
import { PricingComponent } from '../../rishikesh/pricing/pricing.component';
import { BonusComponent } from '../../../certified/bonus/bonus.component';
@Component({
  selector: 'app-bali-index',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
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
    PricingComponent,
    BonusComponent,
  ],
  templateUrl: './bali-index.component.html',
  styleUrls: ['./bali-index.component.css'],
})
export class BaliIndexComponent implements OnInit {
  slug: string = '';
  faqData: faq[] = [];
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
  routeEnum = routeEnum;
  constructor(
    private webapiService: WebapiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
    private title: Title,
    private meta: Meta,
    private pixelTracking: PixelTrackingService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path ?? '';
    if (this.slug) {
      this.getCourseBySlug(this.slug);
    }
  }
  ngOnInit() {
    this.spinner.show();
    this.ogMetaTag(this.slug);
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
    this.observeBannerVisibility();
  }
  scrollToBanner() {
    if (this.banner?.nativeElement) {
      this.banner.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
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
      { threshold: 0.1 }
    );
    observer.observe(this.banner.nativeElement);
  }
  getCourseBySlug(slug: string) {
    let data = {
      slug: slug,
    };
    this.webapiService.getCourseById(data).subscribe((res: any) => {
      const currentDate = new Date();
      if (res.data.length > 0) {
        this.spinner.hide();
        const courseData = res.data[0];
        this.faqData = courseData.content;
        this.upEventData = courseData?.upcomingEventInfo.filter((item: any) => {
          const itemDate = new Date(item.startDate);
          return itemDate >= currentDate;
        });
        this.bannerData = {
          event: this.upEventData,
          courseName: courseData.coursetitle,
        };
        this.schEventData = {
          title: courseData.coursetitle,
          events: this.upEventData,
          url: courseData.slug,
          loc: 'Bali',
        };
        this.currData = {
          title: courseData.coursetitle,
          curr: courseData.curriculumInfo,
        };
        this.youtubeVideoData = {
          title: courseData.coursetitle,
          videoId: courseData.courseintrovideoId,
          amount: '',
          currency: '',
        };
        this.isYoutubeDataReady = true;
        this.accomData = {
          accom: courseData.accommodationInfo[0]?.para,
          food: courseData.foodInfo[0]?.para,
        };

        this.feesData = {
          amount: courseData.feeInfo[0]?.amount,
          currency: courseData.feeInfo[0]?.currency,
        };

        this.codecond = {
          title: courseData.coursetitle,
        };
        this.title.setTitle(courseData.metaTitle);
        this.meta.updateTag({
          name: 'keywords',
          content: courseData.metaKeyword,
        });
        this.meta.updateTag({
          name: 'description',
          content: courseData.metaDescription,
        });
      } else {
        this.router.navigate(['/']);
        this.spinner.hide();
      }
    });
  }
  ogMetaTag(slug: string) {
    switch (slug) {
      case routeEnum.bDtox:
        this.pixelTracking.trackCourseSelection(
          '',
          'Breath Dtox',
          'Breath Detox Yoga - Online FREE pre-recorded course'
        );
        this.trackScrollDepth();
        this.trackTimeOnPage();
        break;
      case routeEnum.pranOnlinePranaArambh:
        this.pixelTracking.trackCourseSelection(
          '',
          'Prana rambha',
          'Enhance your quality of life by improving your breath'
        );
        this.trackScrollDepth();
        this.trackTimeOnPage();
        break;
      default:
        break;
    }
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
