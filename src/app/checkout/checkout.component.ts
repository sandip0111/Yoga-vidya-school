import { Component,Renderer2, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WebapiService } from '../webapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, Title, Meta } from '@angular/platform-browser';
import { NgxSpinnerService } from "ngx-spinner";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxIntlTelInputComponent, NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { SearchCountryField } from 'ngx-intl-tel-input';
import { CountryISO } from 'ngx-intl-tel-input';

declare var Razorpay: any;
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,FormsModule, NgxIntlTelInputModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  checkData: any = {};
  oldStudent: boolean = false;
  slug: any;
  price: any;
  courseList: any;
  paymentHandler: any = null;
  stripeCounter: boolean = false;
  ccCounter: boolean = false;
  pranicDuration : string | null | undefined;
  pranicDate :  Date | null | undefined;
  formattedPranicDate :  string | null | undefined;
  phoneError: string = '';
  amount: number= 0;
  CountryISO = CountryISO;
  @ViewChild('phoneRef', { static: false }) phoneRef!: NgxIntlTelInputComponent;
  searchFields = [SearchCountryField.Name, SearchCountryField.DialCode, SearchCountryField.Iso2];
  currencyOptions: string[] = [];
  constructor(private webapiService: WebapiService, private _activatedRoute: ActivatedRoute, private router: Router, private title: Title, private spinner: NgxSpinnerService,@Inject(DOCUMENT) private _document: Document, private _renderer2: Renderer2) {
    this._activatedRoute.params.subscribe(params => {
      this.slug = params['id'];
    })
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.invokeStripe();
      this.loadRazorpayScript();
      this.title.setTitle('Checkout');
      const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
      const link = this._document.querySelector('link[rel="canonical"]');
      this._renderer2.setAttribute(link, 'href', canonicalUrl);
      if(this.slug === 'pranic-purification'){       
        const storedDateStr = sessionStorage.getItem('pranicDate');
        if (storedDateStr) {
           this.pranicDate =  new Date(storedDateStr);
           this.formattedPranicDate = this.pranicDate.toDateString();
        }
        this.pranicDuration = sessionStorage.getItem('pranicDuration');
        if(!this.pranicDate){
          const date = new Date("2025-07-24");
          this.pranicDate = date;
          this.pranicDuration = "7PM to 8PM (IST)";
          sessionStorage.setItem('pranicDate', date.toISOString());
          sessionStorage.setItem('pranicDuration', this.pranicDuration);
        }
      }
    }, 1000);
    this.getCourseBySlug(this.slug);
    this.checkData.package = '';
    this.checkData.currency = '';
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
   
    // if(this.slug !== 'pranic-purification')
    // {
    //   let val = {
    //     email: e.target.value.toLowerCase(),
    //     course: this.courseList._id
    //   }
    //   // if (!sessionStorage.getItem('loginId')) {
    //   this.webapiService.checkEmail(val).subscribe((res: any) => {
    //     // console.log(res, '--');
    //     if (res.status == "ok" && res.coursePurchased == false) {
    //       this.oldStudent = true;
    //       sessionStorage.setItem('loginId-checkout', res.id);
    //     }
    //     else if (res.status == "ok" && res.coursePurchased == true) {
    //       alert("Already Enrolled for this course");
    //       window.location.href = '/login';
    //     }
    //     else {
    //       this.oldStudent = false;
    //       sessionStorage.removeItem('loginId-checkout');
    //     }
    //   });
    // } 
  }

 
  setPrice(e: any) {
    if (e.target.value == "Basic" && this.checkData.currency == "INR") {
      this.price = "Rs. 2,499";
      this.amount = 2499;
    }
    else if (e.target.value == "Basic" && this.checkData.currency == "USD") {
      this.price = "60 USD";
      this.amount = 60;

    }
    else if (e.target.value == "Basic" && this.checkData.currency == "EUR") {
      this.price = "60 EUR";
      this.amount = 60;

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
      this.amount = 0;
    }
  }

  priceConvert(e: any) {
    if(this.slug !== 'pranic-purification')
      {
        if (this.checkData.package == "Basic" && e.target.value == "INR") {
          this.price = "Rs. 2,499";
          this.amount = 2499;
          }
          else if (this.checkData.package == "Basic" && e.target.value == "USD") {
            this.price = "60 USD";
            this.amount = 60;

          }
          else if (this.checkData.package == "Basic" && e.target.value == "EUR") {
            this.price = "60 EUR";
            this.amount = 60;

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
            this.amount = 0;
          }
       } else {
        if(e.target.value == "INR"){
          this.price = "3499 INR";
        }
        else if(e.target.value == "USD"){
          this.price = "55 USD";
        }
        else if(e.target.value == "EUR"){
          this.price = "52 EUR";
        }
       }
  }

  setPriceOnInputChange() {
    if (this.checkData.package && this.checkData.currency == "INR" && this.slug !== 'pranic-purification') {
      this.price = "Rs. 2,499";
      this.amount = 2499;
    }
    else if (this.checkData.package && this.checkData.currency == "USD" && this.slug !== 'pranic-purification') {
      this.price = "60 USD";
      this.amount = 60;

    }
    else if (this.checkData.package && this.checkData.currency == "EUR" && this.slug !== 'pranic-purification') {
      this.price = "60 EUR";
      this.amount = 60;

    }
    else if(this.checkData.currency == "INR" && this.slug === 'pranic-purification'){
      this.price = "3499 INR";
    }
    else if(this.checkData.currency == "USD" && this.slug === 'pranic-purification'){
      this.price = "55 USD";
    }
    else if(this.checkData.currency == "EUR" && this.slug === 'pranic-purification'){
      this.price = "52 EUR";
    }
    else {
      this.price = "";
      this.amount = 0;
    }
  }

  onPhoneInputChange(isValid: boolean | null | undefined): void {
  if (!isValid) {
    this.phoneError = 'Invalid phone number';
    this.currencyOptions = [];
    this.checkData.currency = '';
    this.setPriceOnInputChange();
    return;
  }

  this.phoneError = '';
  const phoneValue = this.checkData.phoneNumber;
  const countryCode = phoneValue?.countryCode?.toLowerCase();

  if (countryCode === 'in') {
    this.currencyOptions = ['INR', 'USD', 'EUR'];
  } else {
    this.currencyOptions = ['USD', 'EUR'];
  }
  this.checkData.package = "Basic";  
  this.checkData.currency = this.currencyOptions[0]; // Set default currency to the first option
  this.setPriceOnInputChange();
}



  onCountryChange(country: any): void { 
    this.phoneError = 'Invalid phone number';   
    this.currencyOptions = [];  
    this.checkData.currency = ''; // Reset currency when country changes  
    this.setPriceOnInputChange();
  }

  checkoutData(data: any, isRazorPay: boolean) {
   

    this.spinner.show();
    if(this.slug !== 'pranic-purification')
      {
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

          if (!data.phoneNumber) {
            alert("WhatsApp Number is required.");
            this.spinner.hide();
            return;
         }
          sessionStorage.setItem('tempCourse', this.courseList._id);
          let pass = this.genratePass(6)
          if (this.oldStudent == false) {
            let signup = {
              firstName: data.name,
              email: data.email.toLowerCase(),
              password: pass,
              isActive: true,
              source: "web",
              phoneNumber: data.phoneNumber.e164Number,
            }
            this.webapiService.createStudent(signup).subscribe((res: any) => {
              if (res.status == "ok") {
                sessionStorage.setItem('loginId-checkout', res.studentId);

                if(!isRazorPay) 
                {
                  if (this.slug == "pranayama-course-online-pranarambha") {
                    if (data.package == "Basic" && data.currency == "INR") {
                      this.initializePayment("price_1QmsTUSEQq0H4GuEZfWd5UJu", data.email);  //  price_1NI6oxSEQq0H4GuEW24DMpTn price_1NInGmSDnZBoIVm7fv2upett
                    }
                    else if (data.package == "Standard" && data.currency == "INR") {
                      this.initializePayment("price_1NI6oxSEQq0H4GuERpBbilF2", data.email);

                    }
                    else if (data.package == "Premium" && data.currency == "INR") {
                      this.initializePayment("price_1NI6oxSEQq0H4GuEx9fdhEd0", data.email);
                    }
                    else if (data.package == "Basic" && data.currency == "USD") {
                      this.initializePayment("price_1QmychSEQq0H4GuEAipCDoPU", data.email);
                    }
                    else if (data.package == "Basic" && data.currency == "EUR") {
                      this.initializePayment("price_1Qq8OGSEQq0H4GuExvBjijrv", data.email);
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
                //Razor pay
                  this.initializeRazorPayment(data);
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
                this.initializePayment("price_1QmsTUSEQq0H4GuEZfWd5UJu", data.email);    //price_1NI7hnSEQq0H4GuETCleI6Uo  price_1NI6oxSEQq0H4GuEW24DMpTn
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
                this.initializePayment("price_1QmychSEQq0H4GuEAipCDoPU", data.email);
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
      } else 
      {
        if (!data.email) {
          alert("email is required.");
          this.spinner.hide();
          return;
        }
        if (!data.name) {
          alert("Name is required.");
          this.spinner.hide();
          return;
        }
        if (!data.phoneNumber) {
          alert("WhatsApp Number is required.");
          this.spinner.hide();
          return;
        }if(this.price == "" || !this.price) {
          alert("please select a currency");
          this.spinner.hide();
          return;
        }
        var {price, currency} = this.extractPriceAndCurrency(this.price) || { price: 0, currency: "" };
        let signup = {
          name: data.name,
          email: data.email.toLowerCase(),
          phoneNumber: data.phoneNumber.e164Number,
          address: data.address,          
          price:price,
          currency:currency,
          courseStartDate: this.pranicDate,
          courseTimeDuration: this.pranicDuration
        }
        this.spinner.hide();
        if(!isRazorPay)
        {
          this.initializePaymentForPranicPurification(signup);
        }
        else 
        {
          this.initializeRazorPaymentForPranicPurification(signup);

        }
      }

   

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

  initializeRazorPayment(data: any) {
    this.spinner.show();
    let val = { currency: data.currency, paymentBy: "Razor", price: this.amount, email : data.email.toLowerCase(), courseId: sessionStorage.getItem('tempCourse'), paymentStatus: "due", studentId: sessionStorage.getItem('loginId-checkout') }
    this.webapiService.checkoutRazorpayNewPranaarabha(val).subscribe((res: any) => {
      // console.log(res, '--------------');
      this.spinner.hide();
      if (res && res.orderId && res.razorpayKeyId) {
        const options = {
          key: res.razorpayKeyId, // key_id passed from backend
          amount: this.amount * 100, // in paise
          currency: data.currency,
          name: 'Yoga Vidya School',
          description: 'Prana Arambha Payment',
          order_id: res.orderId,
          handler: (response: any) => {
            // After payment success
            sessionStorage.setItem('prana_razorpay_payment_id',  response.razorpay_payment_id);
            sessionStorage.setItem('prana_razorpay_order_id',  response.razorpay_order_id);
            sessionStorage.setItem('prana_razorpay_signature',  response.razorpay_signature);
            sessionStorage.setItem('pranaDbPayRazor',  res.payDbId );
            sessionStorage.setItem('prana_razorpay_payment_amount',  this.amount.toString() );
            sessionStorage.setItem('prana_razorpay_payment_currency',  data.currency );
            this.router.navigate(['/confirmation']);
            
          },
          prefill: {
            name: data.name,
            email: data.email,
            contact: data.phoneNumber.e164Number
          },
          notes: {
            course: JSON.stringify(val.courseId)
          },
          theme: {
            color: '#3399cc'
          }
        };

        const rzp = new Razorpay(options);
        rzp.open();
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

  initializeRazorPaymentForPranicPurification(data: any) {
    this.spinner.show();
   
    this.webapiService.checkoutRazorpayForPranicPurification(data).subscribe((res: any) => {
      // console.log(res, '--------------');
      this.spinner.hide();
      if (res && res.orderId && res.razorpayKey) {
        const options = {
          key: res.razorpayKey, // key_id passed from backend
          amount: res.amount * 100, // in paise
          currency: res.currency,
          name: 'Yoga Vidya School',
          description: 'Pranic Purification Payment',
          order_id: res.orderId,
          handler: (response: any) => {
            // After payment success
            sessionStorage.setItem('pranic_purification_razorpay_payment_id',  response.razorpay_payment_id);
            sessionStorage.setItem('pranic_purification_razorpay_order_id',  response.razorpay_order_id);
            sessionStorage.setItem('pranic_purification_razorpay_signature',  response.razorpay_signature);
            sessionStorage.setItem('pranic_purificationDbPayRazor',  res.payDbId );
            this.router.navigate(['/confirmation']);
            
          },
          prefill: {
            name: res.name,
            email: res.email,
            contact: res.phoneNumber
          },
          notes: {
            course: JSON.stringify("Pranic Purification"),
          },
          theme: {
            color: '#3399cc'
          }
        };

        const rzp = new Razorpay(options);
        rzp.open();
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

  initializePaymentForPranicPurification(data: any) {
    
    this.spinner.show();
    
    this.webapiService.checkoutStripeForPranicPurification(data).subscribe((res: any) => {
      // console.log(res, '--------------');
      this.spinner.hide();
      if (res.sessionId) {
        // this.inquiryData = {};
        sessionStorage.setItem('pranicPurificationSessionId', res.sessionId)
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

  extractPriceAndCurrency(value: string): { price: number; currency: string } | null {
    const match = value.match(/^(\d+)\s*([A-Z]+)$/);
  
    if (match) {
      return {
        price: parseInt(match[1], 10), 
        currency: match[2] 
      };
    }
  
    return null;
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

  loadRazorpayScript() {
    if (!document.getElementById('razorpay-script')) {
      const script = document.createElement('script');
      script.id = 'razorpay-script';
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        console.log('Razorpay script loaded.');
      };
      document.body.appendChild(script);
    }
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
