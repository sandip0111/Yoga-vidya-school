import { Component,Inject,Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title,Meta } from '@angular/platform-browser';
import { BottomNavComponent } from '../includes/home/bottom-nav/bottom-nav.component';
import { AboutComponent } from '../includes/home/about/about.component';
import { JoinTrainingComponent } from '../includes/home/join-training/join-training.component';
import { AboutYogaComponent } from '../includes/home/about-yoga/about-yoga.component';
import { MeetComponent } from '../includes/home/meet/meet.component';
import { TraningImportanceComponent } from '../includes/home/traning-importance/traning-importance.component';
import { WebapiService } from '../webapi.service';
import { TeacherTrainingComponent } from '../includes/home/teacher-training/teacher-training.component';
import { TtRishikeshComponent } from '../includes/home/tt-rishikesh/tt-rishikesh.component';
import { MentorsComponent } from '../includes/home/mentors/mentors.component';
import { BlogsComponent } from '../includes/home/blogs/blogs.component';
import { GalleryComponent } from '../includes/home/gallery/gallery.component';
import { WorkshopsComponent } from '../includes/home/workshops/workshops.component';
import { ChooseUsComponent } from '../includes/home/choose-us/choose-us.component';
import { ServicesComponent } from '../includes/home/services/services.component';
import { OnlineWorkshopComponent } from '../includes/home/online-workshop/online-workshop.component';
import { TestimonialsComponent } from '../includes/home/testimonials/testimonials.component';
import { YoutubeChannelComponent } from '../includes/home/youtube-channel/youtube-channel.component';
import { WeOfferComponent } from '../includes/home/we-offer/we-offer.component';
import { FaqComponent } from '../includes/home/faq/faq.component';
import { AchievementsComponent } from '../includes/home/achievements/achievements.component';
import { BenifitsComponent } from '../includes/home/benifits/benifits.component';
import { PopularWorkshopComponent } from '../includes/home/popular-workshop/popular-workshop.component';
import { BannerComponent } from '../includes/home/banner/banner.component';
import { CooperateComponent } from '../includes/home/cooperate/cooperate.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    BottomNavComponent,
    AboutComponent,
    JoinTrainingComponent,
    AboutYogaComponent,
    MeetComponent,
    TraningImportanceComponent,
    TeacherTrainingComponent,
    TtRishikeshComponent,
    MentorsComponent,
    BlogsComponent,
    GalleryComponent,
    WorkshopsComponent,
    ChooseUsComponent,
    ServicesComponent,
    OnlineWorkshopComponent,
    TestimonialsComponent,
    YoutubeChannelComponent,
    WeOfferComponent,
    FaqComponent,
    AchievementsComponent,
    BenifitsComponent,
    PopularWorkshopComponent,
    BannerComponent,
    CooperateComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  faq:any=[]
  public defaultImage = 'https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';
  public defaultImageLandscape = 'https://my-s3-images-bucket.s3.amazonaws.com/images/deafult_banner_ockzmy.jpg';
  public loading = false;
  sliderList: any;
  imageUrl: any;
  imageUrlv2: any;
  blogList: any;
  mentorList: any;
  channelInfo: any;
  videoInfo: any;
  isActive: boolean = false;
  imageObjectV2: any = [];
  accorArr: any = [];
  accData: any;
  mentorLoop: any = 1;
  customOptions: any = {
    loop: true,
    lazyload: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  acommodation: any = {
    loop: true,
    mouseDrag: true,
    lazyLoad: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  eventOptions: any = {
    loop: true,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    navSpeed: 500,
    navText: ['', ''],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }
  isBrowser: boolean = false;
  eventList: any;
  onlineEventList: any;

  constructor(private webapiService: WebapiService,private title: Title, private meta: Meta, private _renderer2: Renderer2,@Inject(DOCUMENT) private _document: Document,private router: Router){

    this.faq = [
      {
        title: "Why Do Yoga Teacher Training in Rishikesh?",
        para: "Embarking on Yoga Teacher Training in Rishikesh not only offers a deep dive into the ancient roots of yoga but also provides an unparalleled opportunity to immerse oneself in its spiritual essence amidst the serene Himalayan landscape. Rishikesh's rich heritage, coupled with its profound energy, fosters a transformative journey for yoga teaching aspirants, aligning mind, body, and soul in the pursuit of holistic well-being.",
      },
      {
        title:"What is the best certificate for a yoga teacher?",
        para:"The best certificate for a yoga teacher depends on various factors, including accreditation, reputation, and alignment with personal teaching goals. Yoga Alliance RYT (Registered Yoga Teacher) certification is widely recognized internationally, enhancing visibility and credibility in the competitive yoga market. We recommend selecting a certification that not only meets industry standards but also resonates with the your spiritual journey, fostering authenticity and connection in your teaching practice."
      },
      {
        title:"How long does it take to become a qualified yoga teacher?",
        para:"The duration to become a qualified yoga teacher varies depending on the program's depth, structure, and intensity. Typically, it takes around 200 to 500 hours of training to achieve Yoga Alliance certification. Each program spans from a few weeks to several months. As an aspiring yogi, it is important to embrace the journey, allowing ample time for self-reflection, growth, and integration of yogic principles into your life and teaching practice. Practice and all will eventually come."
      },
      {
        title:"What makes your yoga teacher training program unique in Rishikesh?",
        para:"Our yoga teacher training program in Rishikesh stands out for its holistic approach, seamlessly blending traditional teachings with modern techniques. We prioritize personalized attention, small class sizes, and a supportive community, fostering deep connections and individualized growth. Our program's unique value proposition lies in its authenticity, excellence, and alignment with aspirants' quest for genuine transformation and fulfillment on their yogic journey as a yoga teacher and practitioner."
      },
      {
        title:"How long does the yoga teacher training program last?",
        para:"The duration of a yoga teacher training program varies, typically spanning from a minimum of four weeks to several months, depending on the depth of study and immersion desired (100 Hour, 200 hour, 500 hour). However, the true essence of training extends beyond time constraints, emphasizing the lifelong journey of self-discovery, growth, and embodiment of yogic principles both on and off the mat."
      },
      {
        title:"What types of yoga are taught in the program?",
        para:"Our yoga teacher training programs are woven around various yoga styles from traditional to semi-contemporary including Hatha, Vinyasa, Ashtanga, Kundalini, Yin, and Restorative yoga. Each style is thoughtfully integrated to provide a well-rounded understanding and practical experience, empowering students to develop a versatile teaching repertoire that caters to diverse needs and preferences."
      },
      {
        title:"What is the student-to-teacher ratio in your yoga teacher training program?",
        para:"At Yoga Vidya School, we pride ourselves on maintaining a low student-to-teacher ratio to ensure personalized attention and guidance throughout the training journey. With a commitment to fostering meaningful connections and individualized support, our program typically maintains a ratio of 10 students per instructor, allowing for an intimate learning environment conducive to deepening one's practice and understanding of yoga."
      },
      {
        title:"What is the cost of the yoga teacher training program?",
        para:"The cost for a 200-hours yoga teacher training program at Yoga Vidya School in Rishikesh ranges from $1200 to $2500 USD. For more specific pricing and details, we recommend directly reaching out to us for updated rates or special packages available."
      },
      {
        title:"What career opportunities are available after completing the yoga teacher training program?",
        para:"Completing a yoga teacher training program opens up various career paths, including that of a yoga instructor, wellness entrepreneur, corporate yoga teacher, yoga therapist, retreat leader, teacher trainer, community outreach educator, and holistic health practitioner. These opportunities enable yogis and yoginis to share their passion for yoga and positively impact others' well-being."
      }
    ]

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.title.setTitle('Yoga Teacher Training in Rishikesh - Yoga School Rishikesh');
      this.meta.updateTag({ name: 'keywords', content: '' });
      this.meta.updateTag({ name: 'description', content: 'Yoga Vidya School offers best Yoga teacher training Courses in Rishikesh, India. ✓Yoga Alliance Approved ✓Hatha ✓Ashtanga ✓Pranayama , Lead by Prashant J Yoga' });

      this.meta.addTag({ property: 'og:url', content: 'https://www.yogavidyaschool.com/' });
      this.meta.addTag({ property: 'og:type', content: 'website' });
      this.meta.addTag({ property: 'og:title', content: 'Yoga Teacher Training in Rishikesh - Yoga School Rishikesh'});
      this.meta.addTag({ property: 'og:description', content: 'Yoga Vidya School offers best Yoga teacher training Courses in Rishikesh, India. ✓Yoga Alliance Approved ✓Hatha ✓Ashtanga ✓Pranayama , Lead by Prashant J Yoga' });
      this.meta.addTag({ property: 'og:image', content: 'https://my-s3-images-bucket.s3.amazonaws.com/images/imp-2_e7j80f.jpg' });

      this.meta.addTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.meta.addTag({ property: 'twitter:domain', content: 'yogavidyaschool.com' });
      this.meta.addTag({ property: 'twitter:url', content: 'https://www.yogavidyaschool.com/' });
      this.meta.addTag({ name: 'twitter:title', content: 'Yoga Teacher Training in Rishikesh - Yoga School Rishikesh'});
      this.meta.addTag({ name: 'twitter:description', content: 'Yoga Vidya School offers best Yoga teacher training Courses in Rishikesh, India. ✓Yoga Alliance Approved ✓Hatha ✓Ashtanga ✓Pranayama , Lead by Prashant J Yoga' });
      this.meta.addTag({ name: 'twitter:image', content: 'https://my-s3-images-bucket.s3.amazonaws.com/images/imp-2_e7j80f.jpg' });

      const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
      const link = this._document.querySelector('link[rel="canonical"]');
      this._renderer2.setAttribute(link, 'href', canonicalUrl);

    }, 1000)
    let script = this._renderer2.createElement('script');
    script.type = `application/ld+json`;
    script.text = `
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Yoga Teacher Training School in Rishikesh, India",
          "image": "https://my-s3-images-bucket.s3.amazonaws.com/img/home/indian-culture.jpg",
          "@id": "",
          "url": "https://www.yogavidyaschool.com",
          "telephone": "+919818660954",
          "priceRange": "$$",
          "address": {
             "@type": "PostalAddress",
             "streetAddress": "Near Kailashanand Gaushala,
             Mateshwari Hospital Jonk Village Post,
             ",
             "addressLocality": "Swarg Ashram, Rishikesh,
             Uttarakhand ",
             "postalCode": "249304",
             "addressCountry": "IN"
          },
          "geo": {
             "@type": "GeoCoordinates",
             "latitude": 30.1297924,
             "longitude": 78.3199088
          },
          "openingHoursSpecification": {
             "@type": "OpeningHoursSpecification",
             "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
             ],
             "opens": "00:00",
             "closes": "23:59"
          },
          "sameAs": [
             "https://www.facebook.com/yogavidyarishikesh/",
             "https://www.instagram.com/yogavidyaschool/",
             "https://www.youtube.com/@yogavidyaschool/",
             "https://twitter.com/Yogavidyaschool",
             "https://www.yogavidyaschool.com/"
          ]
       }
        `;

    this._renderer2.appendChild(this._document.head, script);

    let script1 = this._renderer2.createElement('script');
    script1.type = `application/ld+json`;
    script1.text = `
        {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "100 Hours Beginner Yoga Course in Rishikesh India",
          "description": "The course is designed for Students also who are the beginner in yoga and want to learn the yogic practices with or without a prior knowledge and experience of same.",
          "provider": {
             "@type": "Organization",
             "name": "Yoga Vidya School",
             "sameAs": "https://www.yogavidyaschool.com/100-hours-yoga-teacher-training-in-rishikesh"
          }
       }
        `;

    this._renderer2.appendChild(this._document.head, script1);


    let script2 = this._renderer2.createElement('script');
    script2.type = `application/ld+json`;
    script2.text = `
        {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "200 Hour Yoga Teacher Training in Rishikesh India",
          "description": "200 Hours Course develops the strong foundation for Advance Yoga, which is very important for those who want to step into 300 hours yoga teacher training course, 500 hours advance yoga teacher training course.",
          "provider": {
             "@type": "Organization",
             "name": "Yoga Vidya School",
             "sameAs": "https://www.yogavidyaschool.com/200-hours-yoga-teacher-training-in-rishikesh"
          }
       }
        `;

    this._renderer2.appendChild(this._document.head, script2);

    let script3 = this._renderer2.createElement('script');
    script3.type = `application/ld+json`;
    script3.text = `
        {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "300 Hour Yoga Teacher Training in Rishikesh India",
          "description": "Our 300 hour Yoga Teacher Training course Rishikesh is designed with the only focus of instilling an advanced level of variations in yoga asana, pranayama for intermediate yogic practitioner, yoga instructors and yoga trainers. ",
          "provider": {
             "@type": "Organization",
             "name": "Yoga Vidya School",
             "sameAs": "https://www.yogavidyaschool.com/300-hours-yoga-teacher-training-in-rishikesh"
          }
       }
        `;

    this._renderer2.appendChild(this._document.head, script3);


    let script4 = this._renderer2.createElement('script');
    script4.type = `application/ld+json`;
    script4.text = `
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Yoga Teacher Training",
      "image": "https://my-s3-images-bucket.s3.amazonaws.com/img/image_1674308332559.jpg",
      "brand": "Yoga Vidya School",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "9",
        "ratingCount": "1244"
      },
      "review": [
        {
          "@type": "Review",
          "reviewBody": "I believe Yoga Vidya School’s 200 hour yoga teacher training can change anybody's view on Yoga and its practice. The course teach you about real yogic lifestyle with its true meaning. The yoga teachers of this school have rich knowledge of all the aspects and principles of Yoga and goes deep into it to make it accessible to all level of students. Mantra and philosophy classes can give you a whole new energy. Another important factor that make this school the best, is its location away from the crowd of hotels and yoga schools of Rishikesh. The place is blessed with nature, making you feel like a real yoga retreat in jungle",
          "author": { "@type": "Person", "name": "" },
          "name": "ELINEKL"
        }
      ]
    }`;

    this._renderer2.appendChild(this._document.head, script4);

    this.accorArr = [

      {
        "image": "https://my-s3-images-bucket.s3.amazonaws.com/images/rishikesh-acc_eh2u0i.jpg",
        "title": "Rishikesh",
        "para": "Known as the World Capital of Yoga and Meditation, Rishikesh is the most popular destination when it comes to practice and learn Yoga. This historic and religious town in the foothills of the Himalayas has been home to numerous seekers, yogis, saints and celebrities who wanted to search their inner-self. We offer Yoga Retreats and Yoga Teacher Training in Rishikesh in a beautiful venue surrounded by Himalayan forest and spectacular views."
      },
      {
        "image": "https://my-s3-images-bucket.s3.amazonaws.com/images/kerala_pu7xh9.png",
        "title": "Kerala",
        "para": "Embark on a wellness journey to God’s Own Country – Kerala. This magical place in the south India is blessed with an abundance of natural herbs and amazing tropical weather which makes it the best place for Ayurvedic therapies and learnings along with Yoga. Here we offer special Yoga and Ayurveda Retreats and Yoga Teacher Training with excursions to local beaches, temples and ashrams."
      },
      {
        "image": "https://my-s3-images-bucket.s3.amazonaws.com/images/romania-acc_zjmbhu.jpg",
        "title": "Romania",
        "para": ""
      },
      {
        "image": "https://my-s3-images-bucket.s3.amazonaws.com/images/russia-acc_vezhfz.jpg",
        "title": "Russia",
        "para": ""
      },
      {
        "image": "https://my-s3-images-bucket.s3.amazonaws.com/images/bali-acc_e79994.jpg",
        "title": "Bali",
        "para": "Bali,with its beautiful beaches and exotic temples, has every kind of natural beauty that makes it the best place to practice and learn Yoga. The wonderful mix of ancient culture, art, spirituality, pleasant weather and healthy food will relax your body, mind and spirit deeply, ensuring every moment of your yoga teacher training or yoga retreat a magical experience"
      }
    ]
  }


  // getHomeBlog(limit: any) {
  //   let val = {
  //     "limit": limit
  //   }
  //   this.webapiService.getHomeBlog(val).subscribe((res: any) => {
  //     // console.log(res);
  //     this.blogList = res.data;
  //   });
  // }
  // getAllOnlineEvents() {
  //   this.webapiService.getAllOnlineEvents().subscribe((res: any) => {
  //     this.onlineEventList = res.data
  //   });
  // }
  // getAllEvents() {
  //   this.webapiService.getAllEvents().subscribe((res: any) => {
  //     this.eventList = res.data
  //   });
  // }
  // getHomeMentors(limit: any) {
  //   let val = {
  //     "limit": limit
  //   }
  //   this.webapiService.getHomeMentors(val).subscribe((res: any) => {
  //     // console.log(res);
  //     this.mentorList = res.data;
  //     sessionStorage.setItem('hmloop', res.data[res.data.length - 1]?.sortBy);
  //     sessionStorage.setItem('hlimit', res.total);
  //   });
  // }

  // getClick(e: any) {
  //   this.accData = this.accorArr.filter((x: any) => x.title == e);
  // }

}
