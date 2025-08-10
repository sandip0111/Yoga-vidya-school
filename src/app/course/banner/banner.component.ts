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
  slug: any = '';
  courseName: any;
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
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;
  }
  rishikesHeroImage: string = '';
  rishikeshMainHeading: string = '';
  rishikeshSubHeading: string = '';
  ngOnInit() {
    this.backGroundImageSet();
    this.rishikeshBannerSet();
  }
  rishikeshBannerSet() {
    switch (this.slug) {
      case routeEnum.rishkesh200:
        this.rishikesHeroImage = s3Bucket.rishikesh200Banner;
        this.rishikeshMainHeading =
          'Transform Your Life with 200-Hour Yoga TTC in Rishikesh';
        this.rishikeshSubHeading =
          'Enroll for next Batch: October 3rd 2025 – Yoga Alliance Certified';
        break;
      case routeEnum.rishikesh300:
        this.rishikesHeroImage = '../../../assets/IMG_9926.JPG';
        this.rishikeshMainHeading = 'Transform your inner and teaching journey';
        this.rishikeshSubHeading = 'deepen presence, wisdom & embodiment';
        break;
      default:
        break;
    }
  }
  backGroundImageSet() {
    if (
      this.slug == '200-hour-yoga-teacher-training-in-bali' ||
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
      this.slug ==
        'foundation-of-spirituality-an-online-spiritual-awakening-course' ||
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
    if (this.slug == 'pranayama-course-online-pranarambha') {
      if (isPlatformBrowser(this.platformId)) {
        this.videoElement = document.getElementById(
          'backgroundVideo'
        ) as HTMLVideoElement;
        this.videoElement.muted = true;
        // Ensure video plays automatically on reload (with muted state)
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

      // If unmuted, ensure the video starts playing with sound
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
      // if (this.slug == "online-yoga-classes") {
      //   if (data.courseDate) {
      //     data.startDate = data.courseDate
      //     // data.startDate = "10.30 AM – 11.30 AM"
      //   }
      // }
      // else {
      if (data.courseDate) {
        let arr = data.courseDate.split('~');
        data.startDate = arr[0];
      } else {
        data.startDate = '-';
      }
      // }
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

  registerClick(slug: string) {
    if (slug == 'breath-detox-yoga') {
      this.router.navigate(['breath-detox-yoga', 'student-register']);
    } else {
      this.router.navigate(['checkout', this.slug]);
    }
  }
}
