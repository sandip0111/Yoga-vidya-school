import { Component,Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WebapiService } from '../webapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, Title, Meta } from '@angular/platform-browser';
import { NgxSpinnerService } from "ngx-spinner";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  checkData: any = {};
  oldStudent: boolean = true;
  slug: any;
  price: any;
  courseList: any;
  paymentHandler: any = null;
  stripeCounter: boolean = false;
  ccCounter: boolean = false;

  constructor(private webapiService: WebapiService, private _activatedRoute: ActivatedRoute, private router: Router, private title: Title, private spinner: NgxSpinnerService,@Inject(DOCUMENT) private _document: Document, private _renderer2: Renderer2) {
    this._activatedRoute.params.subscribe(params => {
      this.slug = params['id'];
    })
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.invokeStripe();
      this.title.setTitle('Checkout');
      const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
      const link = this._document.querySelector('link[rel="canonical"]');
      this._renderer2.setAttribute(link, 'href', canonicalUrl);
    }, 1000);
    this.getCourseBySlug(this.slug);
    // console.log(this.checkData);
  }

  getCourseBySlug(slug: any) {
    let data = {
      "slug": slug
    }
    this.webapiService.getCourseById(data).subscribe((res: any) => {
      // console.log(res.data, 'course Data');
      if (res.data.length > 0) {
        this.courseList = res.data[0];
        this.title.setTitle('Checkout');

        // this.getOnlineCourseVideosV2(res.data[0]._id)
        // if (res.data[0].wistiaProjectId && this.userId) {
        //   this.getOnlineCourseVideos(res.data[0].wistiaProjectId);
        // this.checkForCourse(this.userId, res.data[0]._id);
        //   setTimeout(() => {
        //     if (this.userId && this.studentValidated) {
        //       this.setDataFeedback(1, this.reverseArr[0].hashed_id)
        //       this.getAccessLog(this.userId, res.data[0]._id)
        //       this.paidVideoVerifyUser(res.data[0]._id);
        //     }
        //     else {
        //       this.onlineCheck = false;
        //     }
        //   }, 2500)
        // }
        this.checkData.email = '';
        this.checkData = {};
      }
      else {
        this.router.navigate(['/']);
      }
    })
  }

  checkEmail(e: any) {
    // console.log(data, '--');
    // const email = this.isValidEmail(e.target.value);
    // if (email) {
    let val = {
      email: e.target.value.toLowerCase(),
      course: this.courseList._id
    }
    // if (!sessionStorage.getItem('loginId')) {
    this.webapiService.checkEmail(val).subscribe((res: any) => {
      // console.log(res, '--');
      if (res.status == "ok" && res.coursePurchased == false) {
        this.oldStudent = true;
        sessionStorage.setItem('loginId-checkout', res.id);
      }
      else if (res.status == "ok" && res.coursePurchased == true) {
        alert("Already Enrolled for this course");
        window.location.href = '/login';
      }
      else {
        this.oldStudent = false;
        sessionStorage.removeItem('loginId-checkout');
      }
    });
    // }

    // }
    // else {
    //   e.target.value = '';
    //   alert('Email is not valid!');
    //   this.oldStudent = true;
    // }


  }

  priceConvert(e: any) {
    if (this.checkData.package == "Basic" && e.target.value == "INR") {
      this.price = "Rs. 3,999";
    }
    else if (this.checkData.package == "Basic" && e.target.value == "USD") {
      this.price = "70 USD";

    }
    else if (this.checkData.package == "Standard" && e.target.value == "INR") {
      this.price = "Rs. 4,999";

    }
    else if (this.checkData.package == "Standard" && e.target.value == "USD") {
      this.price = "90 USD";

    }
    else if (this.checkData.package == "Premium" && e.target.value == "INR") {
      this.price = "Rs. 5,999";

    }
    else if (this.checkData.package == "Premium" && e.target.value == "USD") {
      this.price = "100 USD";

    }
    else {
      this.price = "";
    }
  }
  setPrice(e: any) {
    if (e.target.value == "Basic" && this.checkData.currency == "INR") {
      this.price = "Rs. 3,999";
    }
    else if (e.target.value == "Basic" && this.checkData.currency == "USD") {
      this.price = "70 USD";

    }
    else if (e.target.value == "Standard" && this.checkData.currency == "INR") {
      this.price = "Rs. 4,999";

    }
    else if (e.target.value == "Standard" && this.checkData.currency == "USD") {
      this.price = "90 USD";

    }
    else if (e.target.value == "Premium" && this.checkData.currency == "INR") {
      this.price = "Rs. 5,999";

    }
    else if (e.target.value == "Premium" && this.checkData.currency == "USD") {
      this.price = "100 USD";

    }
    else {
      this.price = "";
    }
  }

  checkoutData(data: any) {
    // if (data.mode == "STRIPE") {

    this.spinner.show();
    if (data.email) {

      if (this.slug == "pranayama-course-online-pranarambha" && !data.package) {
        alert("Please select a package..");
        this.spinner.hide();
        return
      }
      if (this.oldStudent == false && !data.name) {
        alert('Name is Required!');
        this.spinner.hide();
        return
      }
      sessionStorage.setItem('tempCourse', this.courseList._id);
      let pass = this.genratePass(6)
      if (this.oldStudent == false) {
        let signup = {
          firstName: data.name,
          email: data.email.toLowerCase(),
          password: pass,
          isActive: true,
          source: "web"
        }
        this.webapiService.createStudent(signup).subscribe((res: any) => {
          if (res.status == "ok") {
            sessionStorage.setItem('loginId-checkout', res.studentId);
            if (this.slug == "pranayama-course-online-pranarambha") {
              if (data.package == "Basic" && data.currency == "INR") {
                this.initializePayment("price_1NI6oxSEQq0H4GuEW24DMpTn", data.email);  //  price_1NI6oxSEQq0H4GuEW24DMpTn price_1NInGmSDnZBoIVm7fv2upett
              }
              else if (data.package == "Standard" && data.currency == "INR") {
                this.initializePayment("price_1NI6oxSEQq0H4GuERpBbilF2", data.email);

              }
              else if (data.package == "Premium" && data.currency == "INR") {
                this.initializePayment("price_1NI6oxSEQq0H4GuEx9fdhEd0", data.email);
              }
              else if (data.package == "Basic" && data.currency == "USD") {
                this.initializePayment("price_1NIRakSEQq0H4GuEFjQApuYp", data.email);
              }
              else if (data.package == "Standard" && data.currency == "USD") {
                this.initializePayment("price_1NIRatSEQq0H4GuE0DOlcCNa", data.email);
              }
              else if (data.package == "Premium" && data.currency == "USD") {
                this.initializePayment("price_1NIRbNSEQq0H4GuEeLvnyPu2", data.email);
              }
            }
            else {
              if (this.courseList.priceId) {
                this.initializePayment(this.courseList.priceId, data.email)
              }
            }
          }
          else {
            alert("Fail to registered.");
            this.spinner.hide();
          }

        });

      }
      else {
        if (this.slug == "pranayama-course-online-pranarambha") {
          if (data.package == "Basic" && data.currency == "INR") {
            this.spinner.hide();
            this.initializePayment("price_1NI6oxSEQq0H4GuEW24DMpTn", data.email);    //price_1NI7hnSEQq0H4GuETCleI6Uo  price_1NI6oxSEQq0H4GuEW24DMpTn
          }
          else if (data.package == "Standard" && data.currency == "INR") {
            this.spinner.hide();
            this.initializePayment("price_1NI6oxSEQq0H4GuERpBbilF2", data.email);

          }
          else if (data.package == "Premium" && data.currency == "INR") {
            this.spinner.hide();
            this.initializePayment("price_1NI6oxSEQq0H4GuEx9fdhEd0", data.email);
          }
          else if (data.package == "Basic" && data.currency == "USD") {
            this.spinner.hide();
            this.initializePayment("price_1NIRakSEQq0H4GuEFjQApuYp", data.email);
          }
          else if (data.package == "Standard" && data.currency == "USD") {
            this.spinner.hide();
            this.initializePayment("price_1NIRatSEQq0H4GuE0DOlcCNa", data.email);
          }
          else if (data.package == "Premium" && data.currency == "USD") {
            this.spinner.hide();
            this.initializePayment("price_1NIRbNSEQq0H4GuEeLvnyPu2", data.email);
          }
          else {
            this.spinner.hide();
          }
        }
        else {
          if (this.courseList.priceId) {
            this.spinner.hide();
            this.initializePayment(this.courseList.priceId, data.email)
          }
          else {
            this.spinner.hide();
          }
        }

      }
    }
    else {
      alert("email is required.");
      this.spinner.hide();
    }

    // }
    // else {
    //   // this.spinner.show();
    //   if (data.email) {

    //     if (this.slug == "pranayama-course-online-pranarambha" && !data.package) {
    //       alert("Please select a package..");
    //       this.spinner.hide();
    //       return
    //     }
    //     if (this.oldStudent == false && !data.name) {
    //       alert('Name is Required!');
    //       this.spinner.hide();
    //       return
    //     }
    //     sessionStorage.setItem('tempCourse', this.courseList._id);
    //     let pass = this.genratePass(6)
    //     if (this.oldStudent == false) {
    //       let signup = {
    //         firstName: data.name,
    //         email: data.email.toLowerCase(),
    //         password: pass,
    //         isActive: true,
    //         source: "web"
    //       }
    //       this.webapiService.createStudent(signup).subscribe((res: any) => {
    //         if (res.status == "ok") {
    //           sessionStorage.setItem('loginId-checkout', res.studentId);
    //           if (this.slug == "pranayama-course-online-pranarambha") {
    //             if (data.package == "Basic") {
    //               this.initiliazeCCPayment(3999, data.email);  //  price_1NI6oxSEQq0H4GuEW24DMpTn price_1NInGmSDnZBoIVm7fv2upett
    //             }
    //             else if (data.package == "Standard") {
    //               this.initiliazeCCPayment(4999, data.email);

    //             }
    //             else if (data.package == "Premium") {
    //               this.initiliazeCCPayment(5999, data.email);
    //             }
    //             else {
    //               this.spinner.hide();
    //             }
    //           }
    //           else {
    //             // if (this.courseList.priceId) {
    //             //   this.initiliazeCCPayment(this.courseList.priceId, data.email)
    //             // }
    //           }
    //         }
    //         else {
    //           alert("Fail to registered.");
    //           this.spinner.hide();
    //         }

    //       });

    //     }
    //     else {
    //       if (this.slug == "pranayama-course-online-pranarambha") {
    //         if (data.package == "Basic") {
    //           this.spinner.hide();
    //           this.initiliazeCCPayment(3999, data.email);    //price_1NI7hnSEQq0H4GuETCleI6Uo  price_1NI6oxSEQq0H4GuEW24DMpTn
    //         }
    //         else if (data.package == "Standard") {
    //           this.spinner.hide();
    //           this.initiliazeCCPayment(4999, data.email);

    //         }
    //         else if (data.package == "Premium") {
    //           this.spinner.hide();
    //           this.initiliazeCCPayment(5999, data.email);
    //         }
    //         else {
    //           this.spinner.hide();
    //         }
    //       }
    //       else {
    //         // if (this.courseList.priceId) {
    //         //   this.spinner.hide();
    //         //   this.initiliazeCCPayment(this.courseList.priceId, data.email)
    //         // }
    //         // else {
    //         //   this.spinner.hide();
    //         // }
    //       }

    //     }
    //   }
    //   else {
    //     alert("email is required.");
    //     this.spinner.hide();
    //   }

    // }


  }

  genratePass(len: any) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    var password = "";

    for (var i = 0; i < len; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }

    return password;
  }

  initializePayment(id: any, email: any) {
    // this.spinner.show();
    // if (this.paymentHandler && this.paymentHandler.redirectToCheckout) {
    this.spinner.show();
    let val = { paymentBy: "Stripe", priceId: id, custEmail: email.toLowerCase(), courseId: sessionStorage.getItem('tempCourse'), paymentStatus: "due", studentId: sessionStorage.getItem('loginId-checkout') }
    this.webapiService.stripe(val).subscribe((res: any) => {
      // console.log(res, '--------------');
      this.spinner.hide();
      if (res.sessionId) {
        // this.inquiryData = {};
        sessionStorage.setItem('session', res.sessionId)
        sessionStorage.setItem('dbPay', res.payDbId);
        // this.spinner.hide();
        // this.paymentHandler.redirectToCheckout({
        //   sessionId: res.sessionId
        // })
        window.location.href = res.url;
      }
      else {
        alert("Session Genration failed! please try again");
        this.spinner.hide();
      }

    });
    // }
    // else {
    //   this.invokeStripe();
    // }
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://js.stripe.com/v3/';
      // script.onload = () => {
      //   this.paymentHandler = (<any>window).Stripe(
      //     'pk_test_51LTjKYSDnZBoIVm7pF6anOLQhi4oPrvRNYuOP0fF0wOptRzE1m0QqtvAOo1wi6VUVb5cMgThi8FGGeSUhZ10KRIW00zlCy2Ff0', // Replace with your own publishable key
      //     { locale: 'auto' }
      //   );
      // };
      script.onload = () => {
        this.paymentHandler = (<any>window).Stripe(
          'pk_live_51LJJXISEQq0H4GuE8KMgQV23uQA21MqJLP8XsL3fNZBpwRmX9n8VK4CdcBbeSNbnptLCNn7SScrNvIERlhyKsO1c00ILj5f3hP', // Replace with your own publishable key
          { locale: 'auto' }
        );
      };
      window.document.body.appendChild(script);
    }

    //
    //
  }

  isValidEmail(email: any) {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the pattern
    return emailPattern.test(email);
  }

  initializePaymentV2(id: any, email: any, studId: any) {
    // if (this.paymentHandler && this.paymentHandler.redirectToCheckout) {
    this.spinner.show();
    let val = { paymentBy: "Stripe", priceId: id, custEmail: email.toLowerCase(), courseId: sessionStorage.getItem('tempCourse'), paymentStatus: "due", studentId: studId }
    this.webapiService.stripe(val).subscribe((res: any) => {
      // console.log(res, '--------------');
      this.spinner.hide();

      if (res.sessionId) {
        // this.inquiryData = {};
        sessionStorage.setItem('session', res.sessionId)
        sessionStorage.setItem('dbPay', res.payDbId);
        // this.spinner.hide();
        // this.paymentHandler.redirectToCheckout({
        //   sessionId: res.sessionId
        // })
        window.location.href = res.url;

      }
      else {
        alert("Session Genration failed! please try again");
        this.spinner.hide();
      }

    });
    // }
    // else {
    //   this.invokeStripe();
    // }
  }

  setMode(e: any) {
    if (e.target.value == 'STRIPE') {
      this.stripeCounter = true;
      this.ccCounter = false;
    }
    else {
      this.checkData.currency = 'INR'
      this.stripeCounter = false;
      this.ccCounter = true;
    }
  }

}
