import { Component, OnInit,Renderer2,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BannerComponent } from '../../banner/banner.component';
import { BottomNavComponent } from '../../../includes/home/bottom-nav/bottom-nav.component';
import { AboutRishikeshComponent } from '../about-rishikesh/about-rishikesh.component';
import { EducationCategoriesComponent } from '../education-categories/education-categories.component';
import { CertifiedYogaComponent } from '../certified-yoga/certified-yoga.component';
import { BenifitsComponent } from '../../../includes/home/benifits/benifits.component';
import { IncludesComponent } from '../../bali/includes/includes.component';
import { ChooseUsComponent } from '../../bali/choose-us/choose-us.component';
import { MentorsComponent } from '../../../includes/home/mentors/mentors.component';
import { ServicesComponent } from '../../bali/services/services.component';
import { FeeStructureComponent } from '../../bali/fee-structure/fee-structure.component';
import { CodeConductComponent } from '../../bali/code-conduct/code-conduct.component';
import { TestimonialsComponent } from '../../../includes/home/testimonials/testimonials.component';
import { GalleryComponent } from '../../../includes/home/gallery/gallery.component';
import { YoutubeChannelComponent } from '../../../includes/home/youtube-channel/youtube-channel.component';
import { WatchVideoComponent } from '../../bali/watch-video/watch-video.component';
import { FaqComponent } from '../../../includes/home/faq/faq.component';
import { WebapiService } from '../../../webapi.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ExcursionsComponent } from '../excursions/excursions.component';
import { KnowMoreComponent } from '../know-more/know-more.component';
import { ScheduleComponent } from '../schedule/schedule.component';
import { RishikeshCurriculumComponent } from '../rishikesh-curriculum/rishikesh-curriculum.component';
import { DailyScheduleComponent } from '../daily-schedule/daily-schedule.component';
import { YogaAllianceComponent } from '../yoga-alliance/yoga-alliance.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { Meta,Title } from '@angular/platform-browser';
import { LearningComponent } from '../../bali/learning/learning.component';
import { BottomNavCourseComponent } from '../../../includes/home/bottom-nav-course/bottom-nav-course.component';

@Component({
  selector: 'app-rishikesh-index',
  standalone: true,
  imports: [
    BannerComponent,
    BottomNavComponent,
    AboutRishikeshComponent,
    EducationCategoriesComponent,
    CertifiedYogaComponent,
    BenifitsComponent,
    IncludesComponent,
    ChooseUsComponent,
    MentorsComponent,
    ServicesComponent,
    FeeStructureComponent,
    CodeConductComponent,
    TestimonialsComponent,
    GalleryComponent,
    WatchVideoComponent,
    FaqComponent,
    ExcursionsComponent,
    KnowMoreComponent,
    ScheduleComponent,
    RishikeshCurriculumComponent,
    DailyScheduleComponent,
    YogaAllianceComponent,
    LearningComponent,
    BottomNavCourseComponent
  ],
  templateUrl: './rishikesh-index.component.html',
  styleUrls: ['./rishikesh-index.component.css']
})
export class RishikeshIndexComponent implements OnInit {
  slug:any='';
  faqData: any;
  upEventData:any;
  youtubeVideoData:any;
  accomData:any;
  feesData: any ={};
  codecond: any={};
  currData:any;
  schData:any;
  bannerData:any;
  schEventData:any={};
  constructor(private webapiService: WebapiService,private activatedRoute: ActivatedRoute,private router:Router,private spinner: NgxSpinnerService,private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,private title: Title, private meta: Meta) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;

    if(this.slug){
      this.getCourseBySlug(this.slug);
    }
  }

  ngOnInit() {
    this.spinner.show();
    if (this.slug == "100-hours-yoga-teacher-training-in-rishikesh") {


      let script = this._renderer2.createElement('script');
      script.type = `application/ld+json`;
      script.text = `
      {
        "@context": "http://schema.org",
        "@type": "Event",
        "name": "100 Hour Yoga TTC",
        "url": "https://www.yogavidyaschool.com/100-hours-yoga-teacher-training-in-rishikesh",
        "image": "https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674053863047.jpg",
        "description": "Venture out to Rishikesh, India for the powerful shift in your life – Physically, Mentally and Spiritually. The 100 Hour Yoga Teacher Training in Rishikesh at Yoga Vidya School will take you through great intentions for personal transformation.",
        "startDate": "2023-10-03",
        "endDate": "2023-10-19",
        "location": {
          "@type": "Place",
          "name": "Rishikesh",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jonk Village",
            "addressLocality": "Rishikesh",
            "addressRegion": "Uttarakhand",
            "postalCode": "249304",
            "addressCountry": "India"
          }
        }
      }
       `;

      this._renderer2.appendChild(this._document.head, script);

      let script1 = this._renderer2.createElement('script');
      script1.type = `application/ld+json`;
      script1.text = `
      {
        "@context": "http://schema.org",
        "@type": "Event",
        "name": "100 Hour Yoga TTC",
        "url": "https://www.yogavidyaschool.com/100-hours-yoga-teacher-training-in-rishikesh",
        "image": "https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674053863047.jpg",
        "description": "Venture out to Rishikesh, India for the powerful shift in your life – Physically, Mentally and Spiritually. The 100 Hour Yoga Teacher Training in Rishikesh at Yoga Vidya School will take you through great intentions for personal transformation.",
        "startDate": "2023-11-03",
        "endDate": "2023-11-19",
        "location": {
          "@type": "Place",
          "name": "Rishikesh",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jonk Village",
            "addressLocality": "Rishikesh",
            "addressRegion": "Uttarakhand",
            "postalCode": "249304",
            "addressCountry": "India"
          }
        }
      }
     `;

      this._renderer2.appendChild(this._document.head, script1);

      let script2 = this._renderer2.createElement('script');
      script2.type = `application/ld+json`;
      script2.text = `
      {
        "@context": "http://schema.org",
        "@type": "Event",
        "name": "100 Hour Yoga TTC",
        "url": "https://www.yogavidyaschool.com/100-hours-yoga-teacher-training-in-rishikesh",
        "image": "https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674053863047.jpg",
        "description": "Venture out to Rishikesh, India for the powerful shift in your life – Physically, Mentally and Spiritually. The 100 Hour Yoga Teacher Training in Rishikesh at Yoga Vidya School will take you through great intentions for personal transformation.",
        "startDate": "2023-12-03",
        "endDate": "2023-12-19",
        "location": {
          "@type": "Place",
          "name": "Rishikesh",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jonk Village",
            "addressLocality": "Rishikesh",
            "addressRegion": "Uttarakhand",
            "postalCode": "249304",
            "addressCountry": "India"
          }
        }
      }`;

      this._renderer2.appendChild(this._document.head, script2);

      let script3 = this._renderer2.createElement('script');
      script3.type = `application/ld+json`;
      script3.text = `
      {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "100 Hour Yoga Teacher Training In Rishikesh",
        "image": "https://www.yogavidyaschool.com/100-hours-yoga-teacher-training-in-rishikesh",
        "description": "Join 100 Hour Yoga Teacher Training Course at Yoga Vidya School in
        Rishikesh, which is globally known for yoga courses along with yoga alliance approved. Yoga
        Vidya school has pledged itself to share and spread the knowledge of yoga by becoming a
        beacon of light.",
        "brand": {
        "@type": "Brand",
        "name": "Yoga Vidya School"
        },
        "sku": "YTTC100",
        "offers": {
        "@type": "AggregateOffer",
        "url": "https://www.yogavidyaschool.com/100-hours-yoga-teacher-training-in-rishikesh",
        "priceCurrency": "USD",
        "lowPrice": "700"
        },
        "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "4.5",
        "ratingCount": "5678"
        }
        }`;

      this._renderer2.appendChild(this._document.head, script3);

    } else if (this.slug == "200-hours-yoga-teacher-training-in-rishikesh") {

      let script = this._renderer2.createElement('script');
      script.type = `application/ld+json`;
      script.text = `
      {
        "@context": "http://schema.org",
        "@type": "Event",
        "name": "200 Hour Yoga TTC",
        "url": "https://www.yogavidyaschool.com/200-hours-yoga-teacher-training-in-rishikesh",
        "image": "https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674053863047.jpg",
        "description": "Venture out to Rishikesh, India for the powerful shift in your life – Physically, Mentally and Spiritually. The 200 Hour Yoga Teacher Training in Rishikesh at Yoga Vidya School will take you through great intentions for personal transformation.",
        "startDate": "2023-10-03",
        "endDate": "2023-10-30",
        "location": {
          "@type": "Place",
          "name": "Rishikesh",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jonk Village",
            "addressLocality": "Rishikesh",
            "addressRegion": "Uttarakhand",
            "postalCode": "249304",
            "addressCountry": "India"
          }
        }
      }`;

      this._renderer2.appendChild(this._document.head, script);

      let script1 = this._renderer2.createElement('script');
      script1.type = `application/ld+json`;
      script1.text = `
      {
        "@context": "http://schema.org",
        "@type": "Event",
        "name": "200 Hour Yoga TTC",
        "url": "https://www.yogavidyaschool.com/200-hours-yoga-teacher-training-in-rishikesh",
        "image": "https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674053863047.jpg",
        "description": "Venture out to Rishikesh, India for the powerful shift in your life – Physically, Mentally and Spiritually. The 200 Hour Yoga Teacher Training in Rishikesh at Yoga Vidya School will take you through great intentions for personal transformation.",
        "startDate": "2023-11-03",
        "endDate": "2023-11-30",
        "location": {
          "@type": "Place",
          "name": "Rishikesh",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jonk Village",
            "addressLocality": "Rishikesh",
            "addressRegion": "Uttarakhand",
            "postalCode": "249304",
            "addressCountry": "India"
          }
        }
      }`;

      this._renderer2.appendChild(this._document.head, script1);

      let script2 = this._renderer2.createElement('script');
      script2.type = `application/ld+json`;
      script2.text = `
      {
        "@context": "http://schema.org",
        "@type": "Event",
        "name": "200 Hour Yoga TTC",
        "url": "https://www.yogavidyaschool.com/200-hours-yoga-teacher-training-in-rishikesh",
        "image": "https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674053863047.jpg",
        "description": "Venture out to Rishikesh, India for the powerful shift in your life – Physically, Mentally and Spiritually. The 200 Hour Yoga Teacher Training in Rishikesh at Yoga Vidya School will take you through great intentions for personal transformation.",
        "startDate": "2023-12-03",
        "endDate": "2023-12-30",
        "location": {
          "@type": "Place",
          "name": "Rishikesh",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jonk Village",
            "addressLocality": "Rishikesh",
            "addressRegion": "Uttarakhand",
            "postalCode": "249304",
            "addressCountry": "India"
          }
        }
      }
    `;

      this._renderer2.appendChild(this._document.head, script2);


      let script3 = this._renderer2.createElement('script');
      script3.text = `function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-316876693/ppC-CJ7Mjv0YEJXPjJcB',
            'event_callback': callback
        });
        return false;
      }`;

      this._renderer2.appendChild(this._document.head, script3);

      let script4 = this._renderer2.createElement('script');
      script4.type = `application/ld+json`;
      script4.text = `
      {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "200 Hour Yoga Teacher Training in Rishikesh",
        "image": "https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674197755914.jpg",
        "description": "In this Yoga training course, you will get more than 14 subjects, which will cover the ancient secrets of Yogic Life that can use in your daily living to balance personal life, social life (family) and spiritual life. The foundation of 200 hour yoga teacher training course in Rishikesh is based on the research of human alignment functional Asana and the variations that happen within the adjustments.",
        "brand": {
          "@type": "Brand",
          "name": "Yoga Vidya Schools"
        },
        "sku": "YTTC",
        "offers": {
          "@type": "Offer",
          "url": "https://www.yogavidyaschool.com/200-hours-yoga-teacher-training-in-rishikesh",
          "priceCurrency": "USD",
          "price": "1200",
          "priceValidUntil": "2024-03-17",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "4.5",
          "ratingCount": "4500"
        }
      }
    `;

      this._renderer2.appendChild(this._document.head, script4);

    } else if (this.slug == "300-hours-yoga-teacher-training-in-rishikesh") {

      let script = this._renderer2.createElement('script');
      script.type = `application/ld+json`;
      script.text = `
      {
        "@context": "http://schema.org",
        "@type": "Event",
        "name": "300 Hour Yoga TTC",
        "url": "https://www.yogavidyaschool.com/300-hours-yoga-teacher-training-in-rishikesh",
        "image": "https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674053863047.jpg",
        "description": "Venture out to Rishikesh, India for the powerful shift in your life – Physically, Mentally and Spiritually. The 300 Hour Yoga Teacher Training in Rishikesh at Yoga Vidya School will take you through great intentions for personal transformation.",
        "startDate": "2023-10-03",
        "endDate": "2023-11-02",
        "location": {
          "@type": "Place",
          "name": "Rishikesh",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jonk Village",
            "addressLocality": "Rishikesh",
            "addressRegion": "Uttarakhand",
            "postalCode": "249304",
            "addressCountry": "India"
          }
        }
      }`;

      this._renderer2.appendChild(this._document.head, script);

      let script1 = this._renderer2.createElement('script');
      script1.type = `application/ld+json`;
      script1.text = `
    {
      "@context": "http://schema.org",
      "@type": "Event",
      "name": "300 Hour Yoga TTC",
      "url": "https://www.yogavidyaschool.com/300-hours-yoga-teacher-training-in-rishikesh",
      "image": "https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674053863047.jpg",
      "description": "Venture out to Rishikesh, India for the powerful shift in your life – Physically, Mentally and Spiritually. The 300 Hour Yoga Teacher Training in Rishikesh at Yoga Vidya School will take you through great intentions for personal transformation.",
      "startDate": "2023-10-03",
      "endDate": "2023-11-02",
      "location": {
        "@type": "Place",
        "name": "Rishikesh",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jonk Village",
          "addressLocality": "Rishikesh",
          "addressRegion": "Uttarakhand",
          "postalCode": "249304",
          "addressCountry": "India"
        }
      }
    }`;

      this._renderer2.appendChild(this._document.head, script1);


      let script2 = this._renderer2.createElement('script');
      script2.type = `application/ld+json`;
      script2.text = `
      {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "300 Hour Yoga Teacher Training In Rishikesh",
        "image": "https://www.yogavidyaschool.com/300-hours-yoga-teacher-training-in-rishikesh",
        "description": "This 300 Hour Yoga Teacher Training in Rishikesh India is for 200 Hour Yoga
        TTC Rishikesh India certified yoga practitioners coming deepen their skill by joining Yoga
        Classes in Rishikesh, India.",
        "brand": {
        "@type": "Brand",
        "name": "Yoga Vidya School"
        },
        "sku": "YTTC300",
        "offers": {
        "@type": "AggregateOffer",
        "url": "https://www.yogavidyaschool.com/300-hours-yoga-teacher-training-in-rishikesh",
        "priceCurrency": "USD",
        "lowPrice": "1400"
        },
        "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "4.5",
        "ratingCount": "2256"
        }
        }`;

      this._renderer2.appendChild(this._document.head, script2);

    }

    const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
    const link = this._document.querySelector('link[rel="canonical"]');
    if(link){
      this._renderer2.setAttribute(link, 'href', canonicalUrl);
    }
  }
  // ngAfterViewChecked() {
  //   if(typeof window !== 'undefined'){
  //     window.scrollTo(0, 0);
  //   }
  //   }
  getCourseBySlug(slug: any) {
    let data = {
      "slug": slug
    }
    this.webapiService.getCourseById(data).subscribe((res: any) => {
      // console.log(res.data, 'course Data');
      const currentDate = new Date();
      if (res.data.length > 0) {
        this.spinner.hide();
        this.faqData = res.data[0].content;
        this.currData = {
          curr:res.data[0].curriculumInfo,
          title: res.data[0].coursetitle,
        };
        this.upEventData = res.data[0]?.upcomingEventInfo.filter((item: any) => {
          const itemDate = new Date(item.startDate);
          return itemDate >= currentDate;
        });
        if(this.slug == 'pranic-purification'){
          this.schEventData = {};
        }
        else{
          this.schEventData = {
            title:res.data[0].coursetitle,
            events:this.upEventData,
            url:res.data[0].slug,
            loc:'Rishikesh'
          }
        }
        this.bannerData = {
          event: this.upEventData,
          courseName:res.data[0].coursetitle
        }
        this.schData = {
          title: res.data[0].coursetitle,
          schedule:res.data[0].scheduleInfo
        }
        this.youtubeVideoData = {
          title:res.data[0].coursetitle,
          amount:res.data[0].feeInfo[0]?.amount,
          currency:res.data[0].feeInfo[0]?.currency,
          videoId:res.data[0].courseintrovideoId
        }

        this.accomData = {
          accom:res.data[0].accommodationInfo[0]?.para,
          food:res.data[0].foodInfo[0]?.para,
          amount:res.data[0].feeInfo[0]?.amount,
          currency:res.data[0].feeInfo[0]?.currency
        }

        this.feesData = {
          title:res.data[0].coursetitle,
          amount:res.data[0].feeInfo[0]?.amount,
          currency:res.data[0].feeInfo[0]?.currency
        }

        this.codecond = {
          title:res.data[0].coursetitle
        }

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
        this.meta.updateTag({ name: 'keywords', content: res.data[0].metaKeyword });
        this.meta.updateTag({ name: 'description', content: res.data[0].metaDescription });
        // this.checkForCourse(this.userId, res.data[0]._id);
      }
      else {
        this.router.navigate(['/']);
        this.spinner.hide();
      }
    })
  }

}
