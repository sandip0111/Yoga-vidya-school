import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { WebapiService } from '../webapi.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DomSanitizer } from '@angular/platform-browser';
import { routeEnum } from '../enum/routes';
import { CourseEnum } from '../enum/course';
import { localstorageKey } from '../enum/localstorage';

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.css',
})
export class MyAccountComponent {
  loginId: any;
  userName: any;
  courseArrData: any = [];
  reverseArr: any = [];
  counter: boolean = true;
  constructor(
    private router: Router,
    private webapiService: WebapiService,
    private spinner: NgxSpinnerService,
    protected sanitizer: DomSanitizer,
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private _document: Document,
    private _renderer2: Renderer2
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.title.setTitle('My Account');
      this.meta.updateTag({ name: 'keywords', content: '' });
      this.meta.updateTag({ name: 'description', content: '' });
      const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
      const link = this._document.querySelector('link[rel="canonical"]');
      this._renderer2.setAttribute(link, 'href', canonicalUrl);
    }, 1000);

    this.loginId = sessionStorage.getItem(localstorageKey.loginId);
    if (this.loginId) {
      this.getUserById(this.loginId);
    } else {
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }
  }

  getUserById(id: any) {
    this.webapiService.getUserById(id).subscribe((res: any) => {
      if (res.Data) {
        this.userName = res.Data.firstName;
        sessionStorage.setItem(localstorageKey.userSource, res.Data.source);
        if (res.Data.course.length > 0) {
          if (res.Data.paymentCourseId == CourseEnum.ONLINE_LIVE_CLASSES) {
            this.getOnlineCourseByIdV2(res.Data.course);
          } else {
            for (const id of res.Data.course) {
              this.getCourseByIdV2(id);
            }
          }
        } else {
          this.counter = false;
        }
      }
    });
  }

  getCourseByIdV2(id: any) {
    this.webapiService.getCourseByIdV2(id).subscribe((res: any) => {
      if (res?.course) {
        if (res.course._id == CourseEnum.TWO_THOUSANDS_TTC) {
          res.course.introUrl = res?.course.courseintrovideoId;
          res.course.isImage = true;
        } else {
          let url = `https://www.youtube.com/embed/${res?.course.courseintrovideoId}`;
          let safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          res.course.introUrl = safeUrl;
          res.course.isYoutube = true;
        }
        this.courseArrData.push(res.course);
      }
    });
  }

  getOnlineCourseByIdV2(courses: any) {
    this.webapiService
      .getCourseByIdV2(CourseEnum.ONLINE_LIVE_CLASSES)
      .subscribe((res: any) => {
        if (res?.course) {
          for (let obj of courses) {
            let getTeacher = res.course.teachersData.find(
              (x: any) => x.id == obj.id
            );
            getTeacher.introUrl = getTeacher.courseintrovideoId;
            getTeacher.isImage = true;
            getTeacher._id = CourseEnum.ONLINE_LIVE_CLASSES;
            getTeacher.slug = routeEnum.online;
            this.courseArrData.push(getTeacher);
          }
        }
      });
  }

  getcurrentDate() {
    const today = new Date(); // get current date and time
    const year = today.getFullYear(); // get year (YYYY)
    const month = String(today.getMonth() + 1).padStart(2, '0'); // get month (MM) and pad with leading zero if necessary
    const day = String(today.getDate()).padStart(2, '0'); // get day (dd) and pad with leading zero if necessary
    return `${year}/${month}/${day}`; // return date string in the format "YYYY/MM/dd"
  }

  getNext24HoursDate(hour: any) {
    const now = new Date(); // get current date and time
    const next24Hours = new Date(now.getTime() + hour * 60 * 60 * 1000); // add 24 hours to current date and time
    const year = next24Hours.getFullYear(); // get year (YYYY)
    const month = String(next24Hours.getMonth() + 1).padStart(2, '0'); // get month (MM) and pad with leading zero if necessary
    const day = String(next24Hours.getDate()).padStart(2, '0'); // get day (dd) and pad with leading zero if necessary
    return `${year}/${month}/${day}`; // return date string in the format "YYYY/MM/dd"
  }
  getNext24HourDay(hour: any) {
    const currentDateTime = new Date();
    const next24hDateTime = new Date(
      currentDateTime.getTime() + hour * 60 * 60 * 1000
    );

    return next24hDateTime.toISOString();
  }
  getOnlineCourseVideosV2(course: any, slug: string, id: number) {
    this.spinner.show();
    let val = {
      courseId: course,
    };
    this.webapiService.getCourseVideoV2(val).subscribe((res: any) => {
      if (res.length > 0) {
        let arr = [];
        let sum = 48;
        for (let index = 0; index < res.length; index++) {
          if (index == 0) {
            continue;
          }
          if (index == 1 || index == 2) {
            let nextDay = this.getNext24HourDay(24);
            let val = {
              day: index + 1,
              nextShowDate: nextDay,
            };
            arr.push(val);
          } else if (index == 3 || index == 4) {
            let nextDay = this.getNext24HourDay(48);
            let val = {
              day: index + 1,
              nextShowDate: nextDay,
            };
            arr.push(val);
          } else {
            sum = sum + 24;
            let nextDay = this.getNext24HourDay(sum);
            let val = {
              day: index + 1,
              nextShowDate: nextDay,
            };
            arr.push(val);
          }
        }
        let val = {
          nextSchedule: arr,
          studentId: this.loginId,
          courseId: course,
        };
        this.webapiService
          .getAccessLog({ studentId: this.loginId, courseId: course })
          .subscribe((res: any) => {
            if (res.count == 0 && slug != routeEnum['200TTC'] && slug != routeEnum.online) {
              this.createAccessLog(val);
            }
            this.router.navigate([`/${routeEnum.courseVideo}/${slug}/${id}`]);
          });
      } else {
        this.spinner.hide();
        alert('No Video resource found in this course!');
      }
    });
  }

  getOnlineCourseVideos(id: any, course: any, slug: any) {
    this.spinner.show();
    let val = {
      projectId: id,
    };
    this.webapiService.getCourseVideo(val).subscribe((res: any) => {
      if (res.medias.length > 0) {
        let arr = [];
        let sum = 48;
        for (let index = 0; index < res.medias.length; index++) {
          if (index == 0) {
            continue;
          }
          if (index == 1 || index == 2) {
            let nextDay = this.getNext24HourDay(24);
            let val = {
              day: index + 1,
              nextShowDate: nextDay,
            };
            arr.push(val);
          } else if (index == 3 || index == 4) {
            let nextDay = this.getNext24HourDay(48);
            let val = {
              day: index + 1,
              nextShowDate: nextDay,
            };
            arr.push(val);
          } else {
            sum = sum + 24;
            let nextDay = this.getNext24HourDay(sum);
            let val = {
              day: index + 1,
              nextShowDate: nextDay,
            };
            arr.push(val);
          }
        }
        let val = {
          nextSchedule: arr,
          studentId: this.loginId,
          courseId: course,
        };
        this.webapiService
          .getAccessLog({ studentId: this.loginId, courseId: course })
          .subscribe((res: any) => {
            if (res.count == 0) {
              this.createAccessLog(val);
              this.spinner.hide();
              this.router.navigate(['/course-video/', slug]);
            } else {
              this.spinner.hide();
              this.router.navigate(['/course-video/', slug]);
            }
          });
        // this.createAccessLog(val);
      }
    });
    this.spinner.hide();
  }

  createAccessLog(data: any) {
    this.webapiService.createAccessLog(data).subscribe((res: any) => {
    });
  }
  bookSeatV2(slug: any) {
    let url = `checkout/${slug}`;
    window.location.href = url;
  }
}
