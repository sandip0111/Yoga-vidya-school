import {
  Component,
  Renderer2,
  Inject,
  ViewChild,
  AfterViewInit,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { WebapiService } from '../webapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Hls from 'hls.js';
import { onLineVideoModel } from '../models/video';
import { localstorageKey } from '../enum/localstorage';
import { routeEnum } from '../enum/routes';
@Component({
  selector: 'app-course-video',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-video.component.html',
  styleUrl: './course-video.component.css',
})
export class CourseVideoComponent {
  reverseArr: onLineVideoModel[] = [];
  feedbackCounter: boolean = false;
  studentValidated: boolean = false;
  courseList: any;
  slug: string = '';
  feedbackData: any = {};
  userId: any;
  videoName: any;
  videoCounter: boolean = false;
  spinner1 = 'sp1';
  bdQues: any = [];
  onlineCheck: boolean = false;
  isCallbackTriggered = false;
  accessLog: any;
  videoClass: string = 'col-lg-8';
  routeEnum = routeEnum;
  teacherId: number = 0;
  constructor(
    private webapiService: WebapiService,
    private _activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private _document: Document,
    private _renderer2: Renderer2,
    private _changeDetect: ChangeDetectorRef
  ) {
    this.spinner.show();
    this._activatedRoute.params.subscribe((params) => {
      this.slug = params['id'];
      this.teacherId = params['teacherId'] ? params['teacherId'] : 0;
    });
    this.bdQues = [
      'What was the state of your mind and body during practice. Were you focused?',
      'How was your breath? Was it deep, and long. Do you feel any changes while applying the techniques?',
      'How was your practice today. Was it little easier? Did it change your mood and emotions. What is your current state after practice?',
      'How is your focus so far. Are you feeling the improvement?',
      'How these practices are helping you during the day?',
      'Is it getting a benefit during your work? Are you more productive now?',
      'What is your overall feedback? What you gained with this course ? Will you continue this practice?',
    ];
  }

  ngOnInit(): void {
    this.getCourseBySlug(this.slug);
    this.userId = sessionStorage.getItem(localstorageKey.loginId);
    if (!this.userId) {
      this.router.navigate(['/login']);
    }
    const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
    const link = this._document.querySelector('link[rel="canonical"]');
    this._renderer2.setAttribute(link, 'href', canonicalUrl);
  }

  setHlsOrMp4VideoURL(
    isM3U8: boolean,
    updateId: any,
    videoSrc: string,
    isShow: boolean
  ) {
    const id = 'plyrID-' + updateId;
    const video = document.getElementById(id) as HTMLVideoElement;
    if (!video || !isShow) return;
    if (video.src.trim() !== '' && video.src !== null) {
      return;
    }
    if (isM3U8) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc;
      }
    } else {
      video.src = videoSrc;
    }
  }

  getCourseBySlug(slug: any) {
    let data = {
      slug: slug,
    };
    this.webapiService.getCourseById(data).subscribe((res: any) => {
      if (res.data) {
        this.courseList = res.data[0];
        this.title.setTitle(res.data[0].metaTitle);
        this.meta.updateTag({
          name: 'keywords',
          content: res.data[0].metaKeyword,
        });
        this.meta.updateTag({
          name: 'description',
          content: res.data[0].metaDescription,
        });
        if (this.slug !== routeEnum.online) {
          this.checkForCourse(this.userId, res.data[0]._id);
        } else {
          this.studentValidated = true;
        }
        setTimeout(() => {
          if (this.userId && this.studentValidated) {
            this.getOnlineCourseVideosV2(res.data[0]._id);
            setTimeout(() => {
              if (this.slug == 'pranayama-course-online-pranarambha') {
                this.setDataFeedbackV3(9);
              } else {
                this.setDataFeedbackV3(1);
              }
              this.paidVideoVerifyUser(res.data[0]._id);
            }, 2000);
          } else {
            this.onlineCheck = false;
          }
        }, 2000);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  paidVideoVerifyUser(id: any) {
    let data = {
      userId: id,
    };
    this.webapiService.paidVideoVerifyUser(data).subscribe((res: any) => {
      if (res.status == 'ok') {
        this.onlineCheck = true;
      } else {
        this.onlineCheck = false;
      }
    });
  }

  getAccessLog(stuId: any, cId: string) {
    this.webapiService
      .getAccessLog({ studentId: stuId, courseId: cId })
      .subscribe((res: any) => {
        this.accessLog = res.data;
        let current = new Date();
        if (res.count == 1 && res.data.nextSchedule.length > 0) {
          for (let index = 0; index < res.data.nextSchedule.length; index++) {
            if (
              this.reverseArr[index + 1]?.dayNumber ==
              res.data.nextSchedule[index].day
            ) {
              if (
                current.getTime() >=
                new Date(res.data.nextSchedule[index].nextShowDate).getTime()
              ) {
                this.reverseArr[index + 1].isShow = true;
              } else {
                this.reverseArr[index + 1].isShow = false;
              }
            } else {
              break;
            }
          }
        }
      });
  }

  setDataFeedbackV3(day: any) {
    let val2 = {
      courseId: this.courseList._id,
      studentId: this.userId,
      day: day,
    };
    this.getFedbackV2(val2);
  }
  activeIndex: number = 0;
  setDataFeedbackV2(day: number, obj: onLineVideoModel) {
    // this.activeIndex = day - 1;
    if (this.slug == 'pranayama-course-online-pranarambha') {
      this.onlineVideoLoad(obj);
      this.getAccessLog(this.userId, this.courseList._id);
    }
    if (day > 1) {
      let val = {
        courseId: this.courseList._id,
        studentId: this.userId,
        day: day - 1,
      };
      let val2 = {
        courseId: this.courseList._id,
        studentId: this.userId,
        day: day,
      };
      if (this.slug != 'pranayama-course-online-pranarambha') {
        this.getFedbackV2(val2);
      }
      if (day >= 11 && this.slug == 'pranayama-course-online-pranarambha') {
        let val4 = {
          courseId: this.courseList._id,
          studentId: this.userId,
          day: 9,
        };
        this.getFedbackV2Day5(val4);
      }
      this.webapiService.getFeedbackByCourse(val).subscribe((res: any) => {
        if (res.count > 0) {
          this.reverseArr[day].isVideoShown = true;
        } else {
          this.reverseArr[day].isVideoShown = false;
        }
      });
    } else {
      if (this.slug != 'pranayama-course-online-pranarambha') {
        this.setDataFeedbackV3(1);
      }
    }
  }

  getFedbackV2Day5(val: any) {
    this.webapiService.getFeedbackByCourse(val).subscribe((res: any) => {
      if (res.count > 0) {
      } else {
        alert('Please upload Day 9 review video first!!');
        location.reload();
      }
    });
  }

  getFedbackV2(val: any) {
    this.webapiService.getFeedbackByCourse(val).subscribe((res: any) => {
      if (res.count > 0) {
        this.feedbackCounter = true;
      } else {
        this.feedbackCounter = false;
      }
    });
  }

  checkForCourse(stud: any, id: any) {
    let val = {
      course: id,
      student: stud,
    };
    this.webapiService.getcheckCourseStudent(val).subscribe((res: any) => {
      if (res.count == 1) {
        this.studentValidated = true;
      } else {
        this.studentValidated = false;
      }
    });
  }

  getVideoFileV2(e: any) {
    this.spinner.show();
    const formData = new FormData();
    formData.append('video', e.target.files[0]);
    formData.append('type', 'return');
    this.webapiService.uploadReview(formData).subscribe((res: any) => {
      if (res.status == 'ok') {
        this.videoName = res.videoName;
        this.feedbackData.video = res.videoName;
        alert('upload success');
        this.spinner.hide();
      } else {
        alert('something went wrong');
      }
    });
  }

  getFeedbackV2(data: any, d: any, questionList: any) {
    if (d == 5) {
      if (!data.video) {
        alert('Video review is compulsory');
      } else {
        if (this.slug == 'breath-detox-yoga') {
          if (Object.keys(data).length > 0) {
            let val = {
              day: d,
              studentId: this.userId,
              courseId: this.courseList._id,
              questionList: questionList,
              answerList: Object.values(data),
              videoReview: this.videoName ? this.videoName : '',
            };
            this.webapiService.createFeedback(val).subscribe((res: any) => {
              if (res.status == 'ok') {
                alert(res.msg);
                this.feedbackData = {};
                this.getCourseBySlug(this.slug);
              } else {
                alert(res.msg);
              }
            });
          } else {
            alert('All feilds are compulsory');
          }
        } else {
          if (Object.keys(data).length > 2) {
            data.day = d;
            data.studentId = this.userId;
            data.courseId = this.courseList._id;
            this.webapiService.createFeedback(data).subscribe((res: any) => {
              if (res.status == 'ok') {
                alert(res.msg);
                this.feedbackData = {};
                this.getCourseBySlug(this.slug);
              } else {
                alert(res.msg);
              }
            });
          } else {
            alert('All feilds are compulsory');
          }
        }
      }
    } else if (d == 11 && this.slug == 'pranayama-course-online-pranarambha') {
      if (!data.video) {
        alert('Video review is compulsory');
      } else {
        let val = {
          day: 9,
          studentId: this.userId,
          courseId: this.courseList._id,
          videoReview: this.videoName ? this.videoName : '',
        };
        this.webapiService.createFeedback(val).subscribe((res: any) => {
          if (res.status == 'ok') {
            alert(res.msg);
            this.feedbackData = {};
            this.getCourseBySlug(this.slug);
          } else {
            alert(res.msg);
          }
        });
      }
    } else {
      if (this.slug == 'breath-detox-yoga') {
        if (Object.keys(data).length > 0) {
          let val = {
            day: d,
            studentId: this.userId,
            courseId: this.courseList._id,
            questionList: questionList,
            answerList: Object.values(data),
            videoReview: this.videoName ? this.videoName : '',
          };
          this.webapiService.createFeedback(val).subscribe((res: any) => {
            if (res.status == 'ok') {
              alert(res.msg);
              this.feedbackData = {};
              this.getCourseBySlug(this.slug);
            } else {
              alert(res.msg);
            }
          });
        } else {
          alert('All feilds are compulsory');
        }
      } else {
        if (Object.keys(data).length > 2) {
          data.day = d;
          data.studentId = this.userId;
          data.courseId = this.courseList._id;
          this.webapiService.createFeedback(data).subscribe((res: any) => {
            if (res.status == 'ok') {
              alert(res.msg);
              this.feedbackData = {};
              this.getCourseBySlug(this.slug);
            } else {
              alert(res.msg);
            }
          });
        } else {
          alert('All feilds are compulsory');
        }
      }
    }
  }

  getOnlineCourseVideosV2(id: string) {
    let val = {
      courseId: id,
    };
    this.webapiService
      .getCourseVideoV2(val)
      .subscribe((res: onLineVideoModel[]) => {
        if (this.teacherId > 0) {
          let source = sessionStorage.getItem(localstorageKey.userSource);
          let sourceArr = source ? source.split('_') : [];
          res = res.filter(
            (item: onLineVideoModel) =>
              item.month === sourceArr[sourceArr.length - 1] &&
              item.teacherId === +this.teacherId
          );
        }
        if (res.length > 0) {
          this.reverseArr = res
            .slice()
            .sort((a: any, b: any) => a.sortBy - b.sortBy);
          if (this.slug == 'pranayama-course-online-pranarambha') {
            this.onlineVideoLoad(this.reverseArr[0]);
          }
          this.onTabLoad(id);
          if (this.reverseArr.length == res.length) {
            this.spinner.hide();
          }
        } else {
          this.spinner.hide();
          this.reverseArr = [];
        }
      });
  }
  private isM3U8File(url: string): boolean {
    return url.includes('.m3u8');
  }
  getOnlineCourseVideos(id: any) {
    let val = {
      projectId: id,
    };
    this.webapiService.getCourseVideo(val).subscribe((res: any) => {
      if (res.medias.length > 0) {
        this.reverseArr = res.medias.slice().reverse();
        this.reverseArr[0].isShow = true;
        this.reverseArr[0].isVideoShown = true;
        this.reverseArr[0].dayNumber = 1;
        if (this.slug == 'breath-detox-yoga') {
          this.reverseArr[0].questions = [this.bdQues[0]];
        }
        for (let index = 0; index < this.reverseArr.length; index++) {
          if (index == 0) {
            continue;
          }
          this.reverseArr[index].isShow = false;
          this.reverseArr[index].isVideoShown = false;
          this.reverseArr[index].dayNumber = index + 1;
          if (this.slug == 'breath-detox-yoga') {
            if (index === this.reverseArr.length - 1) {
              this.reverseArr[index].questions = [];
            } else {
              this.reverseArr[index].questions = [this.bdQues[index - 1]];
            }
          }
        }
        this.spinner.hide();
      } else {
        this.reverseArr = [];
      }
    });
  }

  setDataFeedback(day: any, hash: any) {
    if (day > 0) {
      let val = {
        hash: hash,
        studentId: this.userId,
        day: day,
      };
      let val2 = {
        hash: hash,
        studentId: this.userId,
        day: day + 1,
      };
      this.getFedback(val2);
      this.webapiService.getFeedbackByCourse(val).subscribe((res: any) => {
        if (res.count > 0) {
          this.reverseArr[day].isVideoShown = true;
        } else {
          this.reverseArr[day].isVideoShown = false;
        }
      });
    }
  }

  getFedback(val: any) {
    this.webapiService.getFeedbackByCourse(val).subscribe((res: any) => {
      if (res.count > 0) {
        this.feedbackCounter = true;
      } else {
        this.feedbackCounter = false;
      }
    });
  }

  onTimeUpdate(event: Event, dayNumber: number) {
    const video = event.target as HTMLVideoElement;
    const currentTime = video.currentTime;
    const duration = video.duration;

    const progress = (currentTime / duration) * 100;

    if (progress >= 50 && progress <= 100 && !this.isCallbackTriggered) {
      this.isCallbackTriggered = true;
      this.onVideoProgressComplete(dayNumber);
    }
  }

  // Callback function
  onVideoProgressComplete(dayNumber: number) {
    var isChanged = false;
    var currentDate = new Date();
    this.accessLog.nextSchedule.forEach((day: any) => {
      if (
        day.day === dayNumber + 1 &&
        new Date(day.nextShowDate).getTime() > currentDate.getTime()
      ) {
        day.nextShowDate = new Date();
        isChanged = true;
      }
    });
    if (isChanged) {
      let val = {
        nextSchedule: this.accessLog.nextSchedule,
        studentId: this.accessLog.studentId,
        courseId: this.accessLog.courseId,
        _id: this.accessLog._id,
      };
      isChanged = false;
      this.webapiService.createAccessLog(val).subscribe((res: any) => {});
    }
  }

  getVideoFile(e: any) {
    if (
      e.target.files[0].type == 'video/mp4' ||
      e.target.files[0].type == 'video/mov' ||
      e.target.files[0].type == 'video/avi' ||
      e.target.files[0].type == 'video/heic' ||
      e.target.files[0].type == 'video/hevc' ||
      e.target.files[0].type == 'video/quicktime'
    ) {
      this.spinner.show(this.spinner1);
      const formData = new FormData();
      formData.append('video', e.target.files[0]);
      formData.append('type', 'return');
      this.webapiService.uploadVideo(formData).subscribe((res: any) => {
        if (res.status == 'ok') {
          alert('upload success');
          this.spinner.hide(this.spinner1);

          this.videoName = res.videoName;
        } else {
          alert('something went wrong');
        }
      });
    } else {
      alert('Please select Video file');
      e.target.value = '';
    }
  }

  getFeedback(data: any, d: any, hashId: any, questionList: any) {
    if (d == 5) {
      if (!this.videoName) {
        alert('Video review is compulsory');
      } else {
        this.spinner.show();
        if (this.slug == 'breath-detox-yoga') {
          if (Object.keys(data).length > 0) {
            let val = {
              day: d,
              studentId: this.userId,
              courseId: this.courseList._id,
              hashed_id: hashId,
              questionList: questionList,
              answerList: Object.values(data),
              videoReview: this.videoName ? this.videoName : '',
            };
            this.webapiService.createFeedback(val).subscribe((res: any) => {
              if (res.status == 'ok') {
                alert(res.msg);
                this.spinner.hide();
                this.feedbackData = {};
                this.getCourseBySlug(this.slug);
              } else {
                alert(res.msg);
              }
            });
          } else {
            alert('All feilds are compulsory');
          }
        } else {
          if (Object.keys(data).length > 2) {
            data.day = d;
            data.studentId = this.userId;
            data.courseId = this.courseList._id;
            data.hashed_id = hashId;
            this.webapiService.createFeedback(data).subscribe((res: any) => {
              if (res.status == 'ok') {
                alert(res.msg);
                this.spinner.hide();
                this.feedbackData = {};
                this.getCourseBySlug(this.slug);
              } else {
                alert(res.msg);
              }
            });
          } else {
            alert('All feilds are compulsory');
          }
        }
      }
    } else if (d == 7 && this.slug == 'pranayama-course-online-pranarambha') {
      if (!this.videoName) {
        alert('Video review is compulsory');
      } else {
        let val = {
          day: 5,
          studentId: this.userId,
          courseId: this.courseList._id,
          videoReview: this.videoName ? this.videoName : '',
        };
        this.webapiService.createFeedback(val).subscribe((res: any) => {
          if (res.status == 'ok') {
            alert(res.msg);
            this.feedbackData = {};
            this.getCourseBySlug(this.slug);
          } else {
            alert(res.msg);
          }
        });
      }
    } else {
      this.spinner.show();
      if (this.slug == 'breath-detox-yoga') {
        if (Object.keys(data).length > 0) {
          let val = {
            day: d,
            studentId: this.userId,
            courseId: this.courseList._id,
            hashed_id: hashId,
            questionList: questionList,
            answerList: Object.values(data),
            videoReview: this.videoName ? this.videoName : '',
          };
          this.webapiService.createFeedback(val).subscribe((res: any) => {
            if (res.status == 'ok') {
              alert(res.msg);
              this.spinner.hide();
              this.feedbackData = {};
              this.getCourseBySlug(this.slug);
            } else {
              alert(res.msg);
            }
          });
        } else {
          alert('All feilds are compulsory');
        }
      } else {
        if (Object.keys(data).length > 2) {
          data.day = d;
          data.studentId = this.userId;
          data.courseId = this.courseList._id;
          data.hashed_id = hashId;
          this.webapiService.createFeedback(data).subscribe((res: any) => {
            if (res.status == 'ok') {
              alert(res.msg);
              this.spinner.hide();
              this.feedbackData = {};
              this.getCourseBySlug(this.slug);
            } else {
              alert(res.msg);
            }
          });
        } else {
          alert('All feilds are compulsory');
        }
      }
    }
  }

  onVideoPlay(videoId: any) {
    let val = {
      videoId: videoId,
      studentId: this.userId,
      playsCount: '1',
    };
    this.isCallbackTriggered = false;
    this.webapiService.createAnalytics(val).subscribe((res: any) => {});
  }
  onTabLoad(id: string) {
    this.reverseArr[0].isShow = true;
    this.reverseArr[0].isVideoShown = true;
    this.reverseArr[0].dayNumber = 1;
    if (this.slug == 'breath-detox-yoga') {
      this.reverseArr[0].questions = [this.bdQues[0]];
    }
    for (let i = 0; i < this.reverseArr.length; i++) {
      if (i == 0) {
        continue;
      }
      this.reverseArr[i].isShow =
        this.slug == routeEnum['200TTC'] || this.slug == routeEnum.online
          ? true
          : false;
      this.reverseArr[i].isVideoShown = false;
      this.reverseArr[i].dayNumber = i + 1;
      if (this.slug == 'breath-detox-yoga') {
        if (i === this.reverseArr.length - 1) {
          this.reverseArr[i].questions = [];
        } else {
          this.reverseArr[i].questions = [this.bdQues[i - 1]];
        }
      }
    }
    setTimeout(() => {
      if (this.slug != 'pranayama-course-online-pranarambha') {
        if (this.reverseArr.length > 0)
          this.reverseArr.forEach((video: any) => {
            const isM3U8 = this.isM3U8File(video.url);
            this.setHlsOrMp4VideoURL(
              isM3U8,
              video.updateId,
              video.url,
              video.isShow
            );
          });
      }
    }, 4000);
    if (this.slug != routeEnum['200TTC'] && this.slug != routeEnum.online) {
      this.getAccessLog(this.userId, id);
    }
  }
  onlineVideoLoad(obj: onLineVideoModel) {
    const localKey =
      localstorageKey.pranaArambhVideo + obj.title.split(' ').join('_');
    const vidUrl = localStorage.getItem(localKey);
    const i = this.reverseArr.indexOf(obj);
    if (!vidUrl) {
      this.webapiService
        .getTabVideo({
          fileName: obj.url,
        })
        .subscribe((res) => {
          localStorage.setItem(localKey, res);
          this.reverseArr[i].url = res;
          this._changeDetect.detectChanges();
        });
    } else {
      this.reverseArr[i].url = vidUrl;
      this._changeDetect.detectChanges();
    }
    this.hlsVideoUrl(this.reverseArr[i]);
  }
  hlsVideoUrl(video: onLineVideoModel) {
    setTimeout(() => {
      if (this.slug == 'pranayama-course-online-pranarambha') {
        const isM3U8 = this.isM3U8File(video.url);
        this.setHlsOrMp4VideoURL(
          isM3U8,
          video.updateId,
          video.url,
          video.isShow
        );
      }
    }, 4000);
  }

  downloadPdf() {
    const pdfUrl = 'assets/BREATH DETOX YOGA.pdf';
    const fileName = 'BREATH_DETOX_YOGA.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
