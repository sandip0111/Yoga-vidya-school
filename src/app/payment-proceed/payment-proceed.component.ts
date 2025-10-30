import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CartService, CartItem } from '../cart.service';
import { WebapiService } from '../webapi.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { SearchCountryField } from 'ngx-intl-tel-input';
import { CountryISO } from 'ngx-intl-tel-input';
import { ActivatedRoute, Router } from '@angular/router';
import { paymentkey } from '../enum/payment';
import { jsonData } from '../course/course-mentor/course-mentor.component';
import { PixelTrackingService } from '../services/pixel-tracking.service';
import { Title } from '@angular/platform-browser';

declare var Razorpay: any;
@Component({
  selector: 'app-payment-proceed',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxIntlTelInputModule,
  ],
  templateUrl: './payment-proceed.component.html',
  styleUrl: './payment-proceed.component.css',
})
export class PaymentProceedComponent implements OnInit {
  paymentForm: FormGroup;
  emailSuggestion: string = '';
  currency: any;
  courses: CartItem[] = [];
  availableCourses: CartItem[] = [];
  courseMentor = jsonData;
  submitted: boolean = false;
  price: any;
  paymentHandler: any = null;
  CountryISO = CountryISO;
  searchFields = [
    SearchCountryField.Name,
    SearchCountryField.DialCode,
    SearchCountryField.Iso2,
  ];
  phoneError: string = '';
  currencyOptions: string[] = [];
  isPhoneValid: boolean = false;
  isSpecial: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cartService: CartService,
    private webapiService: WebapiService,
    private spinner: NgxSpinnerService,
    private pixelTracking: PixelTrackingService,
    private actRoute: ActivatedRoute,
    private titleService: Title
  ) {
    this.actRoute.queryParams.subscribe((params) => {
      if (params['hash'] === 'abcdef1234567890') {
        this.isSpecial = true;
        const mentor = jsonData.find((x) => x.id == 1);
        if (mentor) {
          this.courses.push({
            id: mentor.id,
            title: mentor ? `${mentor?.name} - ${mentor?.title}` : '',
            shortDescription: mentor?.description ?? '',
            priceINR: mentor?.price.discountIndian ?? 0,
            priceUSD: mentor?.price.discountUSD ?? 0,
            quantity: 1,
          });
        }
      } else {
        this.courseAddedFn();
      }
    });
    this.paymentForm = this.fb.group({
      holderName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      currency: ['', Validators.required],
      price: [{ value: '', disabled: true }],
    });
  }
  ngOnInit(): void {
    this.setPageTitle(this.courses);
    this.invokeStripe();
    this.loadRazorpayScript();
    this.trackCheckoutPageView();
  }
  setPageTitle(courses: CartItem[]) {
    if (courses.length > 0) {
      const firstVal = courses[0];
      if (firstVal.id == 1) {
        this.titleService.setTitle(
          'Online sadhna with Prashant - Yoga Vidya School'
        );
      } else if (firstVal.id == 3) {
        this.titleService.setTitle(
          'Women wellness yoga with Taniya - Yoga Vidya School'
        );
      }
    } else {
      this.titleService.setTitle(
        'Online sadhna with Prashant - Yoga Vidya School'
      );
    }
  }
  checkEmail(): void {
    const emailControl = this.paymentForm.get('email');
    if (!emailControl) return;
    const email = emailControl.value?.trim();
    this.emailSuggestion = '';
    if (!email || !email.includes('@')) return;
    const [local, domain] = email.split('@');
    const tld = domain?.split('.').pop();
    const typoDomains: any = {
      'gamil.com': 'gmail.com',
      'gmial.com': 'gmail.com',
      'gnail.com': 'gmail.com',
      'hotnail.com': 'hotmail.com',
      'yaho.com': 'yahoo.com',
      'outllok.com': 'outlook.com',
      'icloud.co': 'icloud.com',
      'gmail.con': 'gmail.com',
      'gmail.cmo': 'gmail.com',
      'gmail.co': 'gmail.com',
    };
    const correctedDomain = typoDomains[domain?.toLowerCase()];
    if (correctedDomain) {
      this.emailSuggestion = `Wrong email format, Did you mean: ${local}@${correctedDomain}?`;
      return;
    }
    const allowedTLDs = ['com', 'net', 'org', 'in', 'edu', 'gov'];
    if (tld && !allowedTLDs.includes(tld.toLowerCase())) {
      this.emailSuggestion = `Wrong email format ".${tld}" — did you mean ".com"?`;
    }
  }
  onPhoneInputChange(): void {
    const control = this.paymentForm.controls['mobile'];
    this.isPhoneValid = control.valid;
    if (!this.isPhoneValid) {
      this.phoneError = 'Invalid phone number';
      this.currencyOptions = [];
      this.paymentForm.patchValue({ currency: '', price: '' });
      return;
    }
    this.phoneError = '';
    const phoneValue = control.value;
    const countryCode = phoneValue?.countryCode;
    if (countryCode === 'IN') {
      this.currencyOptions = ['INR', 'USD'];
    } else {
      this.currencyOptions = ['USD'];
    }
    this.paymentForm.patchValue({ currency: this.currencyOptions[0] });
    this.updatePrice();
  }
  onCountryChange(country: any): void {
    this.phoneError = '';
    this.currencyOptions = [];
    this.paymentForm.patchValue({ currency: '', price: '' });
    this.paymentForm.controls['mobile'].setValue(null);
  }
  onCurrencyChange(event: Event): void {
    const selectedCurrency = (event.target as HTMLSelectElement).value;
    this.updatePrice(selectedCurrency);
  }
  updatePrice(currency?: string): void {
    const selected = currency || this.paymentForm.get('currency')?.value;
    if (selected === null || selected === undefined || selected === '') {
      this.paymentForm.patchValue({ currency: '', price: '' });
      return;
    }
    if (this.isSpecial) {
      if (selected == 'USD') {
        this.price = this.courses[0].priceUSD;
      } else if (selected == 'INR') {
        this.price = this.courses[0].priceINR;
      }
    } else {
      this.price = this.cartService.getTotalAmount(selected);
    }
    this.paymentForm.patchValue({ price: this.price });
  }
  isCourseSelected(course: any): boolean {
    return this.courses.some((c: any) => c.id === course.id);
  }
  onCourseToggle(course: any, event: Event): void {
    const target = event.target as HTMLInputElement;
    const isChecked = target?.checked ?? false;
    if (isChecked) {
      this.courses.push(course);
      this.cartService.addItem(course);
    } else {
      this.courses = this.courses.filter((c) => c.id !== course.id);
      this.cartService.removeItem(course.id);
    }
    this.updatePrice(); // Recalculate price
  }
  onStripePayment(): void {
    this.submitted = true;
    const isInvalid = this.paymentForm.controls['mobile'].invalid;
    if (isInvalid) {
      this.phoneError = 'Invalid phone number';
      return;
    }
    if (this.paymentForm.valid) {
      this.spinner.show();
      var data = this.paymentForm.getRawValue();
      var courseList = this.cartService.getItems();
      let val = {
        name: data.holderName,
        email: data.email,
        phone: data.mobile.e164Number,
        currency: data.currency,
        paymentStatus: 'due',
        price: data.price,
        courses: courseList,
      };

      this.pixelTracking.trackInitiateCheckout(
        'stripe-proceed-payment',
        val.price,
        val.currency
      );
      this.pixelTracking.trackAddPaymentInfo(
        'stripe-proceed-payment',
        val.price,
        val.currency
      );
      this.webapiService
        .checkoutStripeForLiveClasses(val)
        .subscribe((res: any) => {
          this.spinner.hide();
          if (res.sessionId) {
            sessionStorage.setItem('onlineLiveClassesSessionId', res.sessionId);
            sessionStorage.setItem('onlineLiveClassDbPay', res.payDbId);
            window.location.href = res.url;
          } else {
            alert('Session Genration failed! please try again');
            this.spinner.hide();
          }
        });
    }
  }
  removeItem(id: number): void {
    this.cartService.removeItem(id);
    this.courses = this.cartService.getItems();
    this.updatePrice();
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://js.stripe.com/v3/';
      script.onload = () => {
        this.paymentHandler = (<any>window).Stripe(paymentkey.stripeKey, {
          locale: 'auto',
        });
      };
      window.document.body.appendChild(script);
    }
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
  onRazorpayPayment(): void {
    this.submitted = true;
    const isInvalid = this.paymentForm.controls['mobile'].invalid;
    if (isInvalid) {
      this.phoneError = 'Invalid phone number';
      return;
    }
    if (this.paymentForm.valid) {
      const data = this.paymentForm.getRawValue();
      const courseList = this.cartService.getItems();

      const paymentData = {
        name: data.holderName,
        email: data.email,
        phone: data.mobile.e164Number,
        currency: data.currency,
        price: data.price,
        courses: courseList,
        paymentStatus: 'due',
      };

      this.pixelTracking.trackInitiateCheckout(
        'razorpay-proceed-payment',
        paymentData.price,
        paymentData.currency
      );
      this.pixelTracking.trackAddPaymentInfo(
        'razorpay-proceed-payment',
        paymentData.price,
        paymentData.currency
      );
      this.spinner.show();
      this.webapiService.createRazorpayOrder(paymentData).subscribe(
        (res: any) => {
          this.spinner.hide();

          if (res && res.orderId && res.key) {
            const options = {
              key: res.key, // key_id passed from backend
              amount: data.price * 100, // in paise
              currency: data.currency,
              name: 'Yoga Vidya School',
              description: 'Live Class Payment',
              order_id: res.orderId,
              handler: (response: any) => {
                sessionStorage.setItem(
                  'online_class_razorpay_payment_id',
                  response.razorpay_payment_id
                );
                sessionStorage.setItem(
                  'online_class_razorpay_order_id',
                  response.razorpay_order_id
                );
                sessionStorage.setItem(
                  'online_class_razorpay_signature',
                  response.razorpay_signature
                );
                sessionStorage.setItem(
                  'onlineLiveClassDbPayRazor',
                  res.payDbId
                );
                this.router.navigate(['/confirmation']);
              },
              prefill: {
                name: data.holderName,
                email: data.email,
                contact: data.mobile.e164Number,
              },
              notes: {
                courses: JSON.stringify(courseList),
              },
              theme: {
                color: '#3399cc',
              },
            };

            const rzp = new Razorpay(options);
            rzp.open();
          }
        },
        (err) => {
          this.spinner.hide();
        }
      );
    }
  }
  onPaypalPayment() {
    window.open('https://www.paypal.me/yogavidyafoundation', '_blank');
  }
  courseAddedFn() {
    this.courses = this.cartService.getItems();
    this.availableCourses = this.courseMentor.map((mentor) => {
      const course: CartItem = {
        id: mentor?.id,
        title: mentor?.title,
        shortDescription: mentor?.description,
        priceINR: mentor?.price.priceInIndian,
        priceUSD: mentor?.price.priceInUSD,
        quantity: 1,
      };
      return course;
    });
  }

  private trackCheckoutPageView() {
    this.pixelTracking.trackPageView(
      `checkout- online-live-classes`,
      `Checkout - ${this.courses.map((c) => c.title).join(', ')}`
    );
    this.pixelTracking.trackViewContent(
      'proceed-payment_page',
      'proceed-payment'
    );
  }
}
