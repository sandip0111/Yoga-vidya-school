import { Component,Renderer2, Inject, ViewChild  } from '@angular/core';
import { WebapiService } from '../webapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule,DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-course-video',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './course-video.component.html',
  styleUrl: './course-video.component.css'
})
export class CourseVideoComponent {
  reverseArr: any;
  feedbackCounter: boolean = false;
  studentValidated: boolean = false;
  courseList: any;
  slug: any;
  feedbackData: any = {};
  userId: any;
  videoName: any
  videoCounter: boolean = false;
  spinner1 = 'sp1';
  bdQues: any = [];
  onlineCheck: boolean = false;
  @ViewChild('videoPlayer') videoElement: any;
  isCallbackTriggered = false;
  accessLog: any;

  constructor(private webapiService: WebapiService, private _activatedRoute: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService, private title: Title, private meta: Meta,@Inject(DOCUMENT) private _document: Document, private _renderer2: Renderer2) {

    this._activatedRoute.params.subscribe(params => {
      this.slug = params['id'];
    })

    this.bdQues = [
      "What was the state of your mind and body during practice. Were you focused?",
      "How was your breath? Was it deep, and long. Do you feel any changes while applying the techniques?",
      "How was your practice today. Was it little easier? Did it change your mood and emotions. What is your current state after practice?",
      "How is your focus so far. Are you feeling the improvement?",
      "How these practices are helping you during the day?",
      "Is it getting a benefit during your work? Are you more productive now?",
      "What is your overall feedback? What you gained with this course ? Will you continue this practice?"
    ]

    this.getCourseBySlug(this.slug);
  }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('loginId');

    if(!this.userId){
      this.router.navigate(['/login']);
    }

    const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
      const link = this._document.querySelector('link[rel="canonical"]');
      this._renderer2.setAttribute(link, 'href', canonicalUrl);
  }

  getCourseBySlug(slug: any) {
    this.spinner.show();
    let data = {
      "slug": slug
    }
    this.webapiService.getCourseById(data).subscribe((res: any) => {
      // console.log(res.data, 'course Data');
      if (res.data) {
        this.courseList = res.data[0];
        this.title.setTitle(res.data[0].metaTitle);
        this.meta.updateTag({ name: 'keywords', content: res.data[0].metaKeyword });
        this.meta.updateTag({ name: 'description', content: res.data[0].metaDescription });

        //aws

        this.checkForCourse(this.userId, res.data[0]._id);
        setTimeout(() => {
          if (this.userId && this.studentValidated) {
            this.getOnlineCourseVideosV2(res.data[0]._id);
            setTimeout(() => {
              if (this.slug == 'pranayama-course-online-pranarambha') {
                this.setDataFeedbackV3(9)
              }
              else {
                this.setDataFeedbackV3(1)
              }
              this.paidVideoVerifyUser(res.data[0]._id);
              this.getAccessLog(this.userId, res.data[0]._id)
            }, 2000);
          }
          else {
            this.onlineCheck = false;
            setTimeout(() => {
              this.spinner.hide();
            },1000)
          }
        }, 2000);

      }
      else {
        this.router.navigate(['/']);
        // this.spinner.hide();
      }
    })
  }

  paidVideoVerifyUser(id: any) {
    let data = {
      "userId": id
    }
    this.webapiService.paidVideoVerifyUser(data).subscribe((res: any) => {
      // console.log(res);
      if (res.status == "ok") {
        this.onlineCheck = true;
      }
      else {
        this.onlineCheck = false
      }
    });
  }


  getAccessLog(stuId: any, cId: any) {
    this.webapiService.getAccessLog({ studentId: stuId, courseId: cId }).subscribe((res: any) => {
      // console.log(res, '----------');
      this.accessLog = res.data;
      let current = new Date();
      if (res.count == 1 && res.data.nextSchedule.length > 0) {
        for (let index = 0; index < res.data.nextSchedule.length; index++) {

          if (this.reverseArr[index + 1]?.dayNumber == res.data.nextSchedule[index].day) {

            if (current.getTime() >= new Date(res.data.nextSchedule[index].nextShowDate).getTime()) {
              this.reverseArr[index + 1].isShow = true;
            }
            else {
              this.reverseArr[index + 1].isShow = false;
            }
          }
          else {
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
      day: day
    }
    this.getFedbackV2(val2);
  }

  setDataFeedbackV2(day: any) {
    if (this.slug == 'pranayama-course-online-pranarambha') {
       this.getAccessLog(this.userId, this.courseList._id)
    }
    // this.spinner.show();
    if (day > 1) {
      let val = {
        courseId: this.courseList._id,
        studentId: this.userId,
        day: day - 1
      }
      let val2 = {
        courseId: this.courseList._id,
        studentId: this.userId,
        day: day
      }
      if (this.slug != 'pranayama-course-online-pranarambha') {
        this.getFedbackV2(val2);
      }

      if(day >=11 && this.slug == 'pranayama-course-online-pranarambha'){
        let val4 = {
          courseId: this.courseList._id,
          studentId: this.userId,
          day: 9
        }
        this.getFedbackV2Day5(val4);
      }
      this.webapiService.getFeedbackByCourse(val).subscribe((res: any) => {
        // console.log(res.count, '--------------');
        if (res.count > 0) {
          this.reverseArr[day].isVideoShown = true;
        }
        else {
          this.reverseArr[day].isVideoShown = false;

        }
      });
      //console.log(this.reverseArr, '--');
    }
    else {
      if (this.slug != 'pranayama-course-online-pranarambha') {
        this.setDataFeedbackV3(1);
      }
    }


  }

  getFedbackV2Day5(val: any) {
    this.webapiService.getFeedbackByCourse(val).subscribe((res: any) => {
      console.log(res, 'day 6');
      if (res.count > 0) {
      }
      else {
        alert('Please upload Day 9 review video first!!');
        location.reload();
      }
    });
  }



  getFedbackV2(val: any) {
    this.webapiService.getFeedbackByCourse(val).subscribe((res: any) => {
      // console.log(res, '--------------');
      if (res.count > 0) {
        this.feedbackCounter = true;
      }
      else {
        this.feedbackCounter = false;
      }
    });
  }

  checkForCourse(stud: any, id: any) {
    let val = {
      course: id,
      student: stud
    }
    this.webapiService.getcheckCourseStudent(val).subscribe((res: any) => {
      // console.log(res, '--------------');
      if (res.count == 1) {
        this.studentValidated = true;
      }
      else {
        this.studentValidated = false;
      }
    });
  }

  getVideoFileV2(e:any) {
        this.spinner.show();
        const formData = new FormData();
        formData.append('video', e.target.files[0]);
        formData.append('type', 'return');
        this.webapiService.uploadReview(formData).subscribe((res: any) => {
          if (res.status == "ok") {
            this.videoName = res.videoName
            this.feedbackData.video = res.videoName
            alert('upload success');
            this.spinner.hide();
            // e.target.value = '';

          }
          else {
            alert("something went wrong")
          }
        });
  }

  getFeedbackV2(data: any, d: any, questionList: any) {
    if (d == 5 ) {
      if (!data.video) {
        alert('Video review is compulsory');
      }
      else {
        // this.spinner.show();
        if (this.slug == "breath-detox-yoga") {
          if (Object.keys(data).length > 0) {
            let val = {
              day: d,
              studentId: this.userId,
              courseId: this.courseList._id,
              questionList: questionList,
              answerList: Object.values(data),
              videoReview: this.videoName ? this.videoName : ''
            };
            // console.log(val, '--');
            this.webapiService.createFeedback(val).subscribe((res: any) => {
              // console.log(res);
              if (res.status == "ok") {

                alert(res.msg);
                // this.spinner.hide();
                this.feedbackData = {};
                this.getCourseBySlug(this.slug);

              }
              else {
                alert(res.msg);
              }
            });
          }
          else {
            alert("All feilds are compulsory");
          }
        }
        else {
          if (Object.keys(data).length > 2) {
            data.day = d;
            data.studentId = this.userId;
            data.courseId = this.courseList._id;
            this.webapiService.createFeedback(data).subscribe((res: any) => {
              // console.log(res);
              if (res.status == "ok") {

                alert(res.msg);
                // this.spinner.hide();
                this.feedbackData = {};
                this.getCourseBySlug(this.slug);

              }
              else {
                alert(res.msg);
              }
            });
          }
          else {
            alert("All feilds are compulsory");
          }
        }
      }
    }
    else if (d == 11 && this.slug == 'pranayama-course-online-pranarambha') {
      if (!data.video) {
        alert('Video review is compulsory');
      }
      else {
        // this.spinner.show();
        let val = {
          day: 9,
          studentId: this.userId,
          courseId: this.courseList._id,
          videoReview: this.videoName ? this.videoName : ''
        };
        // console.log(val, '--');
        this.webapiService.createFeedback(val).subscribe((res: any) => {
          // console.log(res);
          if (res.status == "ok") {

            alert(res.msg);
            // this.spinner.hide();
            this.feedbackData = {};
            this.getCourseBySlug(this.slug);

          }
          else {
            alert(res.msg);
          }
        });
      }
    }
    else {
      // this.spinner.show();
      if (this.slug == "breath-detox-yoga") {
        if (Object.keys(data).length > 0) {
          let val = {
            day: d,
            studentId: this.userId,
            courseId: this.courseList._id,
            questionList: questionList,
            answerList: Object.values(data),
            videoReview: this.videoName ? this.videoName : ''
          };
          // console.log(val, '--');
          this.webapiService.createFeedback(val).subscribe((res: any) => {
            // console.log(res);
            if (res.status == "ok") {

              alert(res.msg);
              // this.spinner.hide();
              this.feedbackData = {};
              this.getCourseBySlug(this.slug);

            }
            else {
              alert(res.msg);
            }
          });
        }
        else {
          alert("All feilds are compulsory");
        }
      }
      else {
        if (Object.keys(data).length > 2) {
          data.day = d;
          data.studentId = this.userId;
          data.courseId = this.courseList._id;
          // console.log(data, '--');
          this.webapiService.createFeedback(data).subscribe((res: any) => {
            // console.log(res);
            if (res.status == "ok") {

              alert(res.msg);
              // this.spinner.hide();
              this.feedbackData = {};
              this.getCourseBySlug(this.slug);

            }
            else {
              alert(res.msg);
            }
          });
        }
        else {
          alert("All feilds are compulsory");
        }
      }
    }

  }

  getOnlineCourseVideosV2(id: any) {
    let val = {
      courseId: id
    }
    this.webapiService.getCourseVideoV2(val).subscribe((res: any) => {
      // console.log(res, '--arr');
      if (res.length > 0) {
        // this.spinner.hide();
        this.reverseArr = res.slice().sort((a: any, b: any) => a.sortBy - b.sortBy);
        this.reverseArr[0].isShow = true;
        this.reverseArr[0].isVideoShown = true;
        this.reverseArr[0].dayNumber = 1;
        if (this.slug == "breath-detox-yoga") {
          this.reverseArr[0].questions = [this.bdQues[0]];
        }
        for (let index = 0; index < this.reverseArr.length; index++) {
          if (index == 0) {
            continue;
          }
          this.reverseArr[index].isShow = false;
          this.reverseArr[index].isVideoShown = false;
          this.reverseArr[index].dayNumber = index + 1;
          if (this.slug == "breath-detox-yoga") {
            if (index === this.reverseArr.length - 1) {
              this.reverseArr[index].questions = [];
            }
            else {
              this.reverseArr[index].questions = [this.bdQues[index - 1]];
            }
          }
        }
        this.spinner.hide();
      }
      else {
        this.spinner.hide();
        this.reverseArr = [];
      }
      //console.log(this.reverseArr, '------');

    });
  }

  getOnlineCourseVideos(id: any) {
    let val = {
      projectId: id
    }
    this.webapiService.getCourseVideo(val).subscribe((res: any) => {
      if (res.medias.length > 0) {
        this.reverseArr = res.medias.slice().reverse();
        this.reverseArr[0].isShow = true;
        this.reverseArr[0].isVideoShown = true;
        this.reverseArr[0].dayNumber = 1;
        if (this.slug == "breath-detox-yoga") {
          this.reverseArr[0].questions = [this.bdQues[0]];
        }
        for (let index = 0; index < this.reverseArr.length; index++) {
          if (index == 0) {
            continue;
          }
          this.reverseArr[index].isShow = false;
          this.reverseArr[index].isVideoShown = false;
          this.reverseArr[index].dayNumber = index + 1;
          if (this.slug == "breath-detox-yoga") {
            if (index === this.reverseArr.length - 1) {
              this.reverseArr[index].questions = [];
            }
            else {
              this.reverseArr[index].questions = [this.bdQues[index - 1]];
            }
          }
        }
        this.spinner.hide();
      }
      else {
        this.reverseArr = [];
      }

      //console.log(this.reverseArr, '--');

    });
  }

  setDataFeedback(day: any, hash: any) {
    // this.spinner.show();
    if (day > 0) {
      let val = {
        hash: hash,
        studentId: this.userId,
        day: day
      }
      let val2 = {
        hash: hash,
        studentId: this.userId,
        day: day + 1
      }
      this.getFedback(val2);
      this.webapiService.getFeedbackByCourse(val).subscribe((res: any) => {
        // console.log(res.count > 0, '--------------');
        if (res.count > 0) {
          this.reverseArr[day].isVideoShown = true;
        }
        else {
          this.reverseArr[day].isVideoShown = false;

        }
      });
      // console.log(this.reverseArr, '--');
    }


  }

  getFedback(val: any) {
    this.webapiService.getFeedbackByCourse(val).subscribe((res: any) => {
      console.log(res.count, '--------------');
      if (res.count > 0) {
        this.feedbackCounter = true;
      }
      else {
        this.feedbackCounter = false;
      }
    });
  }

  onTimeUpdate(event: Event, dayNumber: number) {
    const video = event.target as HTMLVideoElement;
    const currentTime = video.currentTime;
    const duration = video.duration;

    const progress = (currentTime / duration) * 100;

    if (progress >= 50 && progress <= 90 && !this.isCallbackTriggered) {
      this.isCallbackTriggered = true; 
      this.onVideoProgressComplete(dayNumber);
    }
  }

  // Callback function
  onVideoProgressComplete(dayNumber: number) {
    var isChanged = false;
    var currentDate = new Date();
    this.accessLog.nextSchedule.forEach((day : any) => {
      if ((day.day === dayNumber + 1) && (new Date(day.nextShowDate).getTime() > currentDate.getTime())) {
         day.nextShowDate = new Date();
         isChanged = true;
      }
    });
   if(isChanged){
    let val = {
      nextSchedule: this.accessLog.nextSchedule,
      studentId: this.accessLog.studentId,
      courseId: this.accessLog.courseId,
      _id : this.accessLog._id
    }
    isChanged = false;
    this.webapiService.createAccessLog(val).subscribe((res: any) => {


    });
   }
    
  }

  getVideoFile(e: any) {
    console.log(e.target.files[0].type, '==');
    if (e.target.files[0].type == "video/mp4" || e.target.files[0].type == "video/mov" || e.target.files[0].type == "video/avi" || e.target.files[0].type == "video/heic" || e.target.files[0].type == "video/hevc" || e.target.files[0].type == "video/quicktime") {
      this.spinner.show(this.spinner1);
      const formData = new FormData();
      formData.append('video', e.target.files[0]);
      formData.append('type', 'return');
      this.webapiService.uploadVideo(formData).subscribe((res: any) => {
        //console.log(res);
        if (res.status == "ok") {
          alert('upload success');
          this.spinner.hide(this.spinner1);

          this.videoName = res.videoName
        }
        else {
          alert("something went wrong")
        }
      });
    }
    else {
      alert("Please select Video file");
      e.target.value = '';
    }

  }

  getFeedback(data: any, d: any, hashId: any, questionList: any) {
    if (d == 5) {
      if (!this.videoName) {
        alert('Video review is compulsory');
      }
      else {
        this.spinner.show();
        if (this.slug == "breath-detox-yoga") {
          if (Object.keys(data).length > 0) {
            let val = {
              day: d,
              studentId: this.userId,
              courseId: this.courseList._id,
              hashed_id: hashId,
              questionList: questionList,
              answerList: Object.values(data),
              videoReview: this.videoName ? this.videoName : ''
            };
            this.webapiService.createFeedback(val).subscribe((res: any) => {
              // console.log(res);
              if (res.status == "ok") {

                alert(res.msg);
                this.spinner.hide();
                this.feedbackData = {};
                this.getCourseBySlug(this.slug);

              }
              else {
                alert(res.msg);
              }
            });
          }
          else {
            alert("All feilds are compulsory");
          }
        }
        else {
          if (Object.keys(data).length > 2) {
            data.day = d;
            data.studentId = this.userId;
            data.courseId = this.courseList._id;
            data.hashed_id = hashId;
            this.webapiService.createFeedback(data).subscribe((res: any) => {
              // console.log(res);
              if (res.status == "ok") {

                alert(res.msg);
                this.spinner.hide();
                this.feedbackData = {};
                this.getCourseBySlug(this.slug);

              }
              else {
                alert(res.msg);
              }
            });
          }
          else {
            alert("All feilds are compulsory");
          }
        }
      }
    }
    else if (d == 7 && this.slug == 'pranayama-course-online-pranarambha') {
      if (!this.videoName) {
        alert('Video review is compulsory');
      }
      else {
        // this.spinner.show();
        let val = {
          day: 5,
          studentId: this.userId,
          courseId: this.courseList._id,
          videoReview: this.videoName ? this.videoName : ''
        };
        // console.log(val, '--');
        this.webapiService.createFeedback(val).subscribe((res: any) => {
          // console.log(res);
          if (res.status == "ok") {

            alert(res.msg);
            // this.spinner.hide();
            this.feedbackData = {};
            this.getCourseBySlug(this.slug);

          }
          else {
            alert(res.msg);
          }
        });
      }
    }
    else {
      this.spinner.show();
      if (this.slug == "breath-detox-yoga") {
        if (Object.keys(data).length > 0) {
          let val = {
            day: d,
            studentId: this.userId,
            courseId: this.courseList._id,
            hashed_id: hashId,
            questionList: questionList,
            answerList: Object.values(data),
            videoReview: this.videoName ? this.videoName : ''
          };
          this.webapiService.createFeedback(val).subscribe((res: any) => {
            // console.log(res);
            if (res.status == "ok") {

              alert(res.msg);
              this.spinner.hide();
              this.feedbackData = {};
              this.getCourseBySlug(this.slug);

            }
            else {
              alert(res.msg);
            }
          });
        }
        else {
          alert("All feilds are compulsory");
        }
      }
      else {
        if (Object.keys(data).length > 2) {
          data.day = d;
          data.studentId = this.userId;
          data.courseId = this.courseList._id;
          data.hashed_id = hashId;
          this.webapiService.createFeedback(data).subscribe((res: any) => {
            // console.log(res);
            if (res.status == "ok") {

              alert(res.msg);
              this.spinner.hide();
              this.feedbackData = {};
              this.getCourseBySlug(this.slug);

            }
            else {
              alert(res.msg);
            }
          });
        }
        else {
          alert("All feilds are compulsory");
        }
      }
    }

  }

  onVideoPlay(videoId: any) {
    let val = {
      'videoId': videoId,
      'studentId': this.userId,
      'playsCount': "1"
    }
    this.isCallbackTriggered = false;
    this.webapiService.createAnalytics(val).subscribe((res: any) => {
      // console.log(res, '--------------');
    });
  }
}
