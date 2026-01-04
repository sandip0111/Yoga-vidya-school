import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  Renderer2,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { WebapiService } from '../../webapi.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { routeEnum } from '../../enum/routes';
import { s3Bucket } from '../../enum/s3Bucket';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MonthEnum } from '../../enum/details';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  @Input() data: any;
  datesItem: any;
  inquiryData: any = {};
  isMuted = false;
  courseName: any;
  slug: string | undefined = '';
  videoElement?: HTMLVideoElement;
  isRegistrationPageLabelToggle = false;
  isRegistrationPageLabelToggleForAdjusment = false;
  @ViewChild('bannerSection', { static: false })
  bannerSection!: ElementRef<HTMLElement>;
  @ViewChild('nameInput') nameInput?: ElementRef;
  routeEnum = routeEnum;
  s3Bucket = s3Bucket;
  sliderImage: string =
    'https://my-s3-images-bucket.s3.amazonaws.com/images/InternalBackground_lticg8.jpg';
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private webapiService: WebapiService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;
  }
  rishikesHeroImage: string = '';
  rishikeshMainHeading: string = '';
  rishikeshSubHeading: string | SafeHtml = '';
  routEnum = routeEnum;
  ngOnInit() {
    this.backGroundImageSet();
    this.rishikeshBannerSet();
  }
  rishikeshBannerSet() {
    switch (this.slug) {
      case routeEnum.rishikesh100:
        this.rishikesHeroImage = s3Bucket.rishikesh300Banner;
        this.rishikeshMainHeading =
          '100-Hour Yoga Teacher Training in Rishikesh ';
        this.rishikeshSubHeading =
          'Next Batches starts March the 1st – A Transformative Foundation for Your Yogic Journey';
        break;
      case routeEnum.rishkesh200:
        this.rishikesHeroImage = s3Bucket.rishikesh200Banner;
        this.rishikeshMainHeading =
          'Transform Your Life with 200-Hour Yoga TTC in Rishikesh';
        this.rishikeshSubHeading =
          'Next Batches starts March the 24th – Yoga Alliance Certified';
        break;
      case routeEnum.rishikesh300:
        this.rishikesHeroImage = s3Bucket.rishikesh300Banner;
        this.rishikeshMainHeading = 'Transform your inner and teaching journey';
        this.rishikeshSubHeading =
          'Next Batches starts March the 28th - Deepen presence, wisdom & embodiment';
        break;
      case routeEnum.preRecordPranayamaCourse:
        this.rishikesHeroImage = s3Bucket.preRecordedHero;
        this.rishikeshMainHeading =
          'Transform Consciousness Through the Power of Breath';
        this.rishikeshSubHeading =
          'Three transformative journeys by Prashant J., rooted in yogic tradition and designed for modern practitioners';
        break;
      case routeEnum.bDtox:
        this.rishikesHeroImage = s3Bucket.breathDtoxPreRec;
        this.rishikeshMainHeading =
          'Breath Detox Yoga - Online FREE pre-recorded course';
        this.rishikeshSubHeading =
          'Breathe Deep, Live Light — 7 Days to Purify Your Energy and Mind';
        break;
      case routeEnum.pranOnlinePranaArambh:
        this.rishikesHeroImage = s3Bucket.pranaArambhPreRec;
        this.rishikeshMainHeading =
          'Enhance your quality of life by improving your breath';
        this.rishikeshSubHeading =
          'An Exclusive Pre-recorded Pranayama Course by Prashant Jakhmola';
        break;
      case routeEnum.sa:
        this.rishikesHeroImage = s3Bucket.swHero;
        this.rishikeshMainHeading = 'SWARA SADHANA:';
        this.rishikeshSubHeading =
          'an exclusive prerecorded workshopthat will help you to align your energies with your actions\nDiscover the Ancient Science,Which Gives You ControlOver Your Two Energies:Sun 🌞  and Moon 🌙';
        break;
      case routeEnum['200TTC']:
        this.rishikeshMainHeading =
          '200 HRS Online TTC - Bring Wisdom to Your Home';
        this.rishikeshSubHeading =
          'Dive into the roots of traditional yoga from wherever you are, and let this journey guide you toward clarity, balance, and a deeper connection with yourself';
        break;
      case routeEnum.pranicPurification:
        this.rishikesHeroImage = s3Bucket.breathDtoxPreRec;
        this.rishikeshMainHeading = 'PRANIC PURIFICATION';
        this.rishikeshSubHeading =
          '21 Days - Online Pranayama Journey with PrashantJ';
        break;
      case routeEnum.bali200:
        this.rishikesHeroImage = s3Bucket.bali200Hero;
        this.rishikeshMainHeading =
          'Transform your life with our 200 HRS TTC in Bali';
        break;
      case routeEnum.bali300:
        this.rishikesHeroImage = s3Bucket.bali300Hero;
        this.rishikeshMainHeading = '300 hour Yoga Teacher Training in Bali';
        this.rishikeshSubHeading =
          'A sacred immersion in advanced yoga practices, set against Bali’s serene landscapes.';
        break;
      case routeEnum.aboutPrashantJi:
        this.rishikesHeroImage = s3Bucket.prashantjiHero;
        this.rishikeshMainHeading = 'Meet Acharya Prashant Jakhmola';
        this.rishikeshSubHeading = 'Yoga Vidya School Founder';
        break;
      case routeEnum.aboutUs:
        this.rishikesHeroImage = s3Bucket.aboutUsBanner;
        this.rishikeshMainHeading = 'Yoga Vidya School';
        this.rishikeshSubHeading = 'Rooted in tradition, guided by wisdom';
        break;
      case routeEnum.foundationOfSpirituality:
        this.rishikesHeroImage = s3Bucket.foundationOfSpirituality;
        this.rishikeshMainHeading = 'Foundation of Spirituality';
        this.rishikeshSubHeading = 'An online spiritual awakening course';
        break;
      default:
        break;
    }
  }
  backGroundImageSet() {
    if (
      this.slug == 'yoga-retreat-in-bali' ||
      this.slug == '300-hour-yoga-teacher-training-in-bali' ||
      this.slug == 'adjustment-and-alignment' ||
      this.slug == 'adjustment-and-alignment-level-2'
    ) {
      this.sliderImage =
        'https://my-s3-images-bucket.s3.amazonaws.com/images/image_1688020831747_aqnfh1.jpg';
    } else if (this.slug == 'yoga-retreat-in-mysore-india') {
      this.sliderImage =
        'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1692698338795.jpg';
    } else if (this.slug == 'pranic-purification') {
      this.sliderImage =
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/images/954A0706.JPG';
    } else if (
      this.slug == '200-hour-yoga-teacher-training-in-kerala-india' ||
      this.slug == 'yoga-retreat-in-kerala-india' ||
      this.slug == 'breath-detox-yoga' ||
      this.slug == routeEnum.foundationOfSpirituality ||
      this.slug == 'yoga-inversion-workshop-headstand' ||
      this.slug == 'yoga-philosophy-course-free' ||
      this.slug == 'yoga-history-and-philosophy' ||
      this.slug == 'online-hip-opening-workshop'
    ) {
      this.sliderImage =
        'https://my-s3-images-bucket.s3.amazonaws.com/images/deafult_banner_ockzmy.jpg';
    } else if (this.slug == 'pranayama-course-online-pranarambha') {
      this.sliderImage =
        'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1683209101048.JPG';
    } else if (this.slug == 'yoga-retreat-in-peru') {
      this.sliderImage =
        'https://my-s3-images-bucket.s3.amazonaws.com/img/image_1721289105818.jpeg';
    }
    if (
      this.slug == '100-hours-yoga-teacher-training-in-rishikesh' ||
      this.slug ==
        '200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh' ||
      this.slug == '200-hours-yoga-teacher-training-in-rishikesh' ||
      this.slug == '300-hours-yoga-teacher-training-in-rishikesh' ||
      this.slug == '200-hour-yoga-teacher-training-scholarship-in-rishikesh' ||
      this.slug == '300-hour-yoga-teacher-training-scholarship-in-rishikesh' ||
      this.slug == '200-hour-yoga-teacher-training-in-bali' ||
      this.slug == '300-hour-yoga-teacher-training-in-bali' ||
      this.slug == '200-hour-yoga-teacher-training-in-kerala-india' ||
      this.slug == '300-hour-yoga-teacher-training-in-kerala-india'
    ) {
      this.isRegistrationPageLabelToggle = true;
    }
    if (
      this.slug == 'adjustment-and-alignment' ||
      this.slug == 'adjustment-and-alignment-level-2'
    ) {
      this.isRegistrationPageLabelToggleForAdjusment = true;
    }
  }
  ngAfterViewInit() {
    if (this.bannerSection) {
      if (
        this.slug !== 'pranic-purification' &&
        this.slug != 'breath-detox-yoga'
      ) {
        if (this.bannerSection) {
          this.renderer.setStyle(
            this.bannerSection.nativeElement,
            '--bg-image',
            `url(${this.sliderImage})`
          );
        }
      } else {
        this.renderer.setStyle(
          this.bannerSection.nativeElement,
          'background-image',
          `url(${this.sliderImage})`
        );
        this.renderer.setStyle(
          this.bannerSection.nativeElement,
          'height',
          '650px'
        );
      }
    }
    if (this.slug == 'pranayama-course-online-pranarambha') {
      if (isPlatformBrowser(this.platformId)) {
        this.videoElement = document.getElementById(
          'backgroundVideo'
        ) as HTMLVideoElement;
        this.videoElement.muted = true;
        if (this.videoElement) {
          this.videoElement
            .play()
            .then(() => {
              if (this.videoElement) {
              }
            })
            .catch((error) => {
              //console.error('Error trying to play the video:', error);
            });
        }
      }
    }
  }

  highlightRegisterForm() {
    if (this.nameInput?.nativeElement) {
      this.nameInput.nativeElement.focus();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.datesItem = changes['data']?.currentValue?.event;
    this.courseName = changes['data']?.currentValue?.courseName;
  }
  toggleMute() {
    if (this.videoElement) {
      this.isMuted = !this.isMuted;
      this.videoElement.muted = this.isMuted;
      if (!this.isMuted) {
        this.videoElement.play().catch((err) => {
          console.error('Error playing video after unmute', err);
        });
      }
    }
  }

  saveInquiry(data: any) {
    if (data.name && data.to) {
      this.spinner.show();
      if (data.courseDate) {
        let arr = data.courseDate.split('~');
        data.startDate = arr[0];
      } else {
        data.startDate = '-';
      }
      data.courseName = this.courseName;
      data.type = 1;
      this.webapiService.saveInquiry(data).subscribe((res: any) => {
        if (res.status == 'ok') {
          this.spinner.hide();
          alert(res.msg);
          this.inquiryData = {};
        } else {
          alert('something went wrong');
        }
      });
    } else {
      alert('Name and email are required');
      this.spinner.hide();
    }
  }

  registerClick(slug: string, month?: string) {
    if (slug == 'breath-detox-yoga') {
      this.router.navigate(['breath-detox-yoga', 'student-register']);
    } else {
      this.router.navigate(['checkout', this.slug, month]);
    }
  }
}
