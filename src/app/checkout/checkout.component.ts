import { Component, Renderer2, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WebapiService } from '../webapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  NgxIntlTelInputComponent,
  NgxIntlTelInputModule,
} from 'ngx-intl-tel-input';
import { SearchCountryField } from 'ngx-intl-tel-input';
import { CountryISO } from 'ngx-intl-tel-input';
import { paymentkey, stripePaymentKey } from '../enum/payment';
import {
  checkoutModel,
  razorPayModel,
  SignupDataModel,
  stripePayModel,
} from '../models/checkout';
import { localstorageKey } from '../enum/localstorage';
import { routeEnum } from '../enum/routes';
import { twoHundredTTCModel } from '../enum/details';

declare var Razorpay: any;
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxIntlTelInputModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  checkData: checkoutModel = new checkoutModel();
  oldStudent: boolean = false;
  slug: any;
  price: string = '';
  courseList: any;
  paymentHandler: any = null;
  stripeCounter: boolean = false;
  ccCounter: boolean = false;
  pranicDuration: string | null | undefined;
  pranicDate: Date | null | undefined;
  formattedPranicDate: string | null | undefined;
  phoneError: string = '';
  amount: number = 0;
  CountryISO = CountryISO;
  emailSuggestion: string | null = null;
  currency: string = 'INR';
  @ViewChild('phoneRef', { static: false }) phoneRef!: NgxIntlTelInputComponent;
  searchFields = [
    SearchCountryField.Name,
    SearchCountryField.DialCode,
    SearchCountryField.Iso2,
  ];
  currencyOptions: string[] = [];
  constructor(
    private webapiService: WebapiService,
    private _activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title,
    private spinner: NgxSpinnerService,
    @Inject(DOCUMENT) private _document: Document,
    private _renderer2: Renderer2
  ) {
    this._activatedRoute.params.subscribe((params) => {
      this.slug = params['id'];
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.invokeStripe();
      this.loadRazorpayScript();
      this.title.setTitle('Checkout');
      const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
      const link = this._document.querySelector('link[rel="canonical"]');
      this._renderer2.setAttribute(link, 'href', canonicalUrl);
      if (this.slug === routeEnum.pranicPurification) {
        const storedDateStr = sessionStorage.getItem('pranicDate');
        if (storedDateStr) {
          this.pranicDate = new Date(storedDateStr);
          this.formattedPranicDate = this.pranicDate.toDateString();
        }
        this.pranicDuration = sessionStorage.getItem('pranicDuration');
        if (!this.pranicDate) {
          const date = new Date('2025-07-24');
          this.pranicDate = date;
          this.pranicDuration = '7PM to 8PM (IST)';
          sessionStorage.setItem('pranicDate', date.toISOString());
          sessionStorage.setItem('pranicDuration', this.pranicDuration);
        }
      }
    }, 1000);
    this.getCourseBySlug(this.slug);
    this.checkData.package = '';
    this.checkData.currency = '';
  }

  getCourseBySlug(slug: any) {
    let data = {
      slug: slug,
    };
    this.webapiService.getCourseById(data).subscribe((res: any) => {
      if (res.data.length > 0) {
        this.courseList = res.data[0];
        this.title.setTitle('Checkout');
        this.checkData.email = '';
        this.checkData = new checkoutModel();
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  checkEmail(e: any) {
    const input = (e.target as HTMLInputElement).value.trim();
    this.emailSuggestion = null;
    if (!input || !input.includes('@')) return;
    const domain = input.split('@')[1]?.toLowerCase();
    if (!domain) return;
    const typoDomains: Record<string, string> = {
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
    if (typoDomains[domain]) {
      this.emailSuggestion = `Wrong email format, Did you mean @${typoDomains[domain]}?`;
      return;
    }
    const tld = domain.split('.').pop();
    const allowedTLDs = [
      'com',
      'net',
      'org',
      'in',
      'edu',
      'gov',
      'co',
      'io',
      'sg',
    ];
    if (tld && !allowedTLDs.includes(tld)) {
      this.emailSuggestion = `Wrong email format ".${tld}" — did you mean ".com"?`;
    }
  }
  couponCode: string = '';
  couponCodeId: string = '';
  checkCouponCode() {
    this.webapiService
      .getCouponCode({
        slug: this.slug,
        email: this.checkData.email,
      })
      .subscribe((res) => {
        this.couponCode = res.code;
        this.couponCodeId = res.id;
      });
  }
  setPrice(e: any) {
    this.inputValidation('package');
    if (e.target.value == 'Basic') {
      if (this.slug == routeEnum['200TTC']) {
        this.set200TTCNormalPrice(this.checkData.currency);
      } else {
        this.setPranaArambhNormalPrice(this.checkData.currency);
      }
    } else if (
      e.target.value == 'Standard' &&
      this.checkData.currency == 'INR'
    ) {
      this.price = 'Rs. 4,999';
    } else if (
      e.target.value == 'Standard' &&
      this.checkData.currency == 'USD'
    ) {
      this.price = '90 USD';
    } else if (
      e.target.value == 'Premium' &&
      this.checkData.currency == 'INR'
    ) {
      this.price = 'Rs. 5,999';
    } else if (
      e.target.value == 'Premium' &&
      this.checkData.currency == 'USD'
    ) {
      this.price = '100 USD';
    } else {
      this.price = '';
      this.amount = 0;
    }
    this.inputValidation('cur');
  }

  priceConvert(e: any) {
    if (this.slug !== routeEnum.pranicPurification) {
      if (this.checkData.package == 'Basic') {
        if (this.slug == routeEnum['200TTC']) {
          this.set200TTCNormalPrice(e.target.value);
        } else {
          this.setPranaArambhNormalPrice(e.target.value);
        }
      } else if (
        this.checkData.package == 'Standard' &&
        e.target.value == 'INR'
      ) {
        this.price = 'Rs. 4,999';
      } else if (
        this.checkData.package == 'Standard' &&
        e.target.value == 'USD'
      ) {
        this.price = '90 USD';
      } else if (
        this.checkData.package == 'Premium' &&
        e.target.value == 'INR'
      ) {
        this.price = 'Rs. 5,999';
      } else if (
        this.checkData.package == 'Premium' &&
        e.target.value == 'USD'
      ) {
        this.price = '100 USD';
      } else {
        this.price = '';
        this.amount = 0;
      }
    } else {
      this.setPranicNormalPrice(e.target.value);
    }
    this.inputValidation('cur');
  }
  setPranicNormalPrice(currency: string) {
    switch (currency) {
      case 'INR':
        this.price = '3499 INR';
        this.amount = 3499;

        break;
      case 'USD':
        this.price = '45 USD';
        this.amount = 45;
        break;
      case 'EUR':
        this.price = '40 EUR';
        this.amount = 40;
        break;
      default:
        this.price = '';
        break;
    }
  }

  setPranaArambhNormalPrice(currency: string) {
    switch (currency) {
      case 'INR':
        this.price = '2499 INR';
        this.amount = 2499;
        this.offerAmount = 2100;
        break;
      case 'USD':
        this.price = '60 USD';
        this.amount = 60;
        this.offerAmount = 55;
        break;
      case 'EUR':
        this.price = '60 EUR';
        this.amount = 60;
        this.offerAmount = 56;
        break;
      default:
        this.price = '';
        this.amount = 0;
        this.offerAmount = 0;
        break;
    }
  }
  set200TTCNormalPrice(currency: string) {
    switch (currency) {
      case 'INR':
        this.price = '1050 INR';
        this.amount = 1050;
        break;
      case 'USD':
        this.price = '1500 USD';
        this.amount = 1500;
        break;
      case 'EUR':
        this.price = '1280 EUR';
        this.amount = 1280;
        break;
      default:
        this.price = '';
        this.amount = 0;
        break;
    }
  }
  setPriceOnInputChange() {
    if (this.checkData.package && this.slug !== routeEnum.pranicPurification) {
      if (this.slug == routeEnum['200TTC']) {
        this.set200TTCNormalPrice(this.checkData.currency);
      } else {
        this.setPranaArambhNormalPrice(this.checkData.currency);
      }
    } else if (this.slug === routeEnum.pranicPurification) {
      this.setPranicNormalPrice(this.checkData.currency);
    } else {
      this.price = '';
      this.amount = 0;
    }
  }

  onPhoneInputChange(isValid: boolean | null | undefined): void {
    if (!isValid) {
      this.phoneError = 'Invalid phone number';
      this.currencyOptions = [];
      this.checkData.currency = '';
      this.inputValidation('cur');
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
    this.checkData.package = 'Basic';
    this.checkData.currency = this.currencyOptions[0];
    this.setPriceOnInputChange();
    this.inputValidation('package');
    this.inputValidation('cur');
  }

  onCountryChange(country: any): void {
    this.phoneError = 'Invalid phone number';
    this.currencyOptions = [];
    this.checkData.currency = '';
    this.setPriceOnInputChange();
  }
  inputValidation(type: string) {
    if (type == 'email') {
      if (this.checkData.email) {
        this.emailRequired = '';
      } else {
        this.emailRequired = 'email is required';
      }
    }
    if (type == 'name') {
      if (this.checkData.name) {
        this.nameRequired = '';
      } else {
        this.nameRequired = 'Name is Required';
      }
    }
    if (type == 'package') {
      if (this.checkData.package) {
        this.packageRequired = '';
      } else {
        this.packageRequired = 'Please select a package';
      }
    }
    if (type == 'phone') {
      if (this.checkData.phoneNumber) {
        this.phoneRequired = '';
      } else {
        this.phoneRequired = 'WhatsApp Number is required';
      }
    }
    if (type == 'cur') {
      if (this.checkData.currency) {
        this.currencyRequired = '';
      } else {
        this.currencyRequired = 'Currency is required';
      }
    }
  }
  emailRequired: string = '';
  nameRequired: string = '';
  packageRequired: string = '';
  phoneRequired: string = '';
  currencyRequired: string = '';
  checkoutData(data: checkoutModel, isRazorPay: boolean) {
    this.spinner.show();
    if (this.slug !== routeEnum.pranicPurification) {
      let isErrMsg: boolean = false;
      if (!data.email) {
        this.emailRequired = 'email is required';
        isErrMsg = true;
      }
      if (this.oldStudent == false && !data.name) {
        this.nameRequired = 'Name is Required';
        isErrMsg = true;
      }
      if (!data.package) {
        this.packageRequired = 'Please select a package';
        isErrMsg = true;
      }
      if (!data.phoneNumber) {
        this.phoneRequired = 'WhatsApp Number is required';
        isErrMsg = true;
      }
      if (!data.currency) {
        this.currencyRequired = 'Currency is required';
        isErrMsg = true;
      }
      if (!isErrMsg) {
        if (this.slug == routeEnum['200TTC']) {
          this.twoHundredTTCCheckout(data, isRazorPay);
        } else {
          this.nonPranicPurificationCheckout(data, isRazorPay);
        }
      } else {
        this.spinner.hide();
      }
    } else {
      let isErrMsg: boolean = false;
      if (!data.email) {
        this.emailRequired = 'email is required.';
        isErrMsg = true;
      }
      if (!data.name) {
        this.nameRequired = 'Name is Required';
        isErrMsg = true;
      }
      if (!data.phoneNumber) {
        this.phoneRequired = 'WhatsApp Number is required';
        isErrMsg = true;
      }
      if (this.price == '' || !this.price) {
        this.currencyRequired = 'Currency is required';
        isErrMsg = true;
      }
      if (!isErrMsg) {
        this.pranicPurificationCheckOut(data, isRazorPay);
      }
      this.spinner.hide();
    }
  }
  pranicPurificationCheckOut(data: checkoutModel, isRazorPay: boolean) {
    var { price, currency } = this.extractPriceAndCurrency(this.price) || {
      price: 0,
      currency: '',
    };
    let signup = {
      name: data.name,
      email: data.email.toLowerCase(),
      phoneNumber: data.phoneNumber.e164Number,
      address: data.address,
      price: this.isDiscounted ? this.offerAmount : price,
      currency: currency,
      courseStartDate: this.pranicDate,
      courseTimeDuration: this.pranicDuration,
    };
    if (!isRazorPay) {
      this.initializePaymentForPranicPurification(signup);
    } else {
      this.initializeRazorPaymentForPranicPurification(signup);
    }
  }
  nonPranicPurificationCheckout(data: checkoutModel, isRazorPay: boolean) {
    sessionStorage.setItem('tempCourse', this.courseList._id);
    let pass = this.genratePass(6);
    if (this.oldStudent == false) {
      this.newStudentCheckOut(data, isRazorPay, pass);
    } else {
      if (this.slug == routeEnum.pranOnlinePranaArambh) {
        if (data.package == 'Basic' && data.currency == 'INR') {
          this.spinner.hide();
          this.initializePayment('price_1QmsTUSEQq0H4GuEZfWd5UJu', data.email); //price_1NI7hnSEQq0H4GuETCleI6Uo  price_1NI6oxSEQq0H4GuEW24DMpTn
        } else if (data.package == 'Standard' && data.currency == 'INR') {
          this.spinner.hide();
          this.initializePayment('price_1NI6oxSEQq0H4GuERpBbilF2', data.email);
        } else if (data.package == 'Premium' && data.currency == 'INR') {
          this.spinner.hide();
          this.initializePayment('price_1NI6oxSEQq0H4GuEx9fdhEd0', data.email);
        } else if (data.package == 'Basic' && data.currency == 'USD') {
          this.spinner.hide();
          this.initializePayment('price_1QmychSEQq0H4GuEAipCDoPU', data.email);
        } else if (data.package == 'Standard' && data.currency == 'USD') {
          this.spinner.hide();
          this.initializePayment('price_1NIRatSEQq0H4GuE0DOlcCNa', data.email);
        } else if (data.package == 'Premium' && data.currency == 'USD') {
          this.spinner.hide();
          this.initializePayment('price_1NIRbNSEQq0H4GuEeLvnyPu2', data.email);
        } else {
          this.spinner.hide();
        }
      } else {
        if (this.courseList.priceId) {
          this.spinner.hide();
          this.initializePayment(this.courseList.priceId, data.email);
        } else {
          this.spinner.hide();
        }
      }
    }
  }
  twoHundredTTCCheckout(data: checkoutModel, isRazorPay: boolean) {
    let signupData: SignupDataModel = {
      name: data.name,
      email: data.email.toLowerCase(),
      phoneNumber: data.phoneNumber.e164Number,
      package: data.package,
      price: this.amount,
      currency: data.currency,
      courseStartDate: twoHundredTTCModel['200TTCDate'],
      courseTimeDuration: `${twoHundredTTCModel['200TTCStart']} - ${twoHundredTTCModel['200TTCEnd']} (IST)`,
    };
    if (isRazorPay) {
      this.initializeRazorPaymentFor200TTC(signupData);
    } else {
      this.initializePaymentFor200TTC(signupData);
    }
  }

  newStudentCheckOut(data: checkoutModel, isRazorPay: boolean, pass: string) {
    let signup = {
      firstName: data.name,
      email: data.email.toLowerCase(),
      password: pass,
      isActive: true,
      source: 'web',
      phoneNumber: data.phoneNumber.e164Number,
    };
    this.webapiService.createStudent(signup).subscribe((res: any) => {
      if (res.status == 'ok') {
        sessionStorage.setItem('loginId-checkout', res.studentId);
        if (!isRazorPay) {
          if (this.slug == routeEnum.pranOnlinePranaArambh) {
            if (data.package == 'Basic' && data.currency == 'INR') {
              this.initializePayment(
                this.isDiscounted
                  ? stripePaymentKey.discountInr
                  : stripePaymentKey.basicInr,
                data.email
              );
            } else if (data.package == 'Standard' && data.currency == 'INR') {
              this.initializePayment(stripePaymentKey.standardInr, data.email);
            } else if (data.package == 'Premium' && data.currency == 'INR') {
              this.initializePayment(stripePaymentKey.premiumInr, data.email);
            } else if (data.package == 'Basic' && data.currency == 'USD') {
              this.initializePayment(
                this.isDiscounted
                  ? stripePaymentKey.discountUsd
                  : stripePaymentKey.basicUsd,
                data.email
              );
            } else if (data.package == 'Basic' && data.currency == 'EUR') {
              this.initializePayment(
                this.isDiscounted
                  ? stripePaymentKey.discountEur
                  : stripePaymentKey.basicEur,
                data.email
              );
            } else if (data.package == 'Standard' && data.currency == 'USD') {
              this.initializePayment(stripePaymentKey.standardUsd, data.email);
            } else if (data.package == 'Premium' && data.currency == 'USD') {
              this.initializePayment(stripePaymentKey.premiumUsd, data.email);
            }
          } else if (this.courseList.priceId) {
            this.initializePayment(this.courseList.priceId, data.email);
          }
        } else {
          this.initializeRazorPayment(data);
        }
      } else {
        alert('Fail to registered.');
        this.spinner.hide();
      }
    });
  }
  genratePass(len: any) {
    var charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?';
    var password = '';
    for (var i = 0; i < len; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    return password;
  }

  initializePayment(id: string, email: string) {
    this.spinner.show();
    let val = {
      paymentBy: 'Stripe',
      priceId: id,
      custEmail: email.toLowerCase(),
      courseId: sessionStorage.getItem('tempCourse'),
      paymentStatus: 'due',
      studentId: sessionStorage.getItem('loginId-checkout'),
    };
    this.webapiService.stripe(val).subscribe((res: any) => {
      this.spinner.hide();
      if (res.sessionId) {
        sessionStorage.setItem('session', res.sessionId);
        sessionStorage.setItem(localstorageKey.praanicPayId, res.payDbId);
        if (this.isDiscounted) {
          localStorage.setItem(localstorageKey.couponCode, this.couponCodeId);
        }
        window.location.href = res.url;
      } else {
        alert('Session Genration failed! please try again');
        this.spinner.hide();
      }
    });
  }
  initializeRazorPayment(data: checkoutModel) {
    this.spinner.show();
    let val = {
      currency: data.currency,
      paymentBy: 'Razor',
      price: this.isDiscounted ? this.offerAmount : this.amount,
      email: data.email.toLowerCase(),
      courseId: sessionStorage.getItem('tempCourse'),
      paymentStatus: 'due',
      studentId: sessionStorage.getItem('loginId-checkout'),
    };
    this.webapiService
      .checkoutRazorpayNewPranaarabha(val)
      .subscribe((res: any) => {
        this.spinner.hide();
        if (res && res.orderId && res.razorpayKeyId) {
          const options = {
            key: res.razorpayKeyId,
            amount: res.amount,
            currency: data.currency,
            name: 'Yoga Vidya School',
            description: 'Prana Arambha Payment',
            order_id: res.orderId,
            handler: (response: any) => {
              if (this.isDiscounted) {
                localStorage.setItem(
                  localstorageKey.couponCode,
                  this.couponCodeId
                );
              }
              sessionStorage.setItem(
                'prana_razorpay_payment_id',
                response.razorpay_payment_id
              );
              sessionStorage.setItem(
                'prana_razorpay_order_id',
                response.razorpay_order_id
              );
              sessionStorage.setItem(
                'prana_razorpay_signature',
                response.razorpay_signature
              );
              sessionStorage.setItem('pranaDbPayRazor', res.payDbId);
              sessionStorage.setItem(
                'prana_razorpay_payment_amount',
                this.isDiscounted
                  ? this.offerAmount.toString()
                  : this.amount.toString()
              );
              sessionStorage.setItem(
                'prana_razorpay_payment_currency',
                data.currency
              );
              this.router.navigate(['/confirmation']);
            },
            prefill: {
              name: data.name,
              email: data.email,
              contact: data.phoneNumber.e164Number,
            },
            notes: {
              course: JSON.stringify(val.courseId),
            },
            theme: {
              color: '#3399cc',
            },
          };

          const rzp = new Razorpay(options);
          rzp.open();
        } else {
          alert('Session Genration failed! please try again');
          this.spinner.hide();
        }
      });
  }
  initializeRazorPaymentForPranicPurification(data: any) {
    this.spinner.show();
    this.webapiService
      .checkoutRazorpayForPranicPurification(data)
      .subscribe((res: any) => {
        this.spinner.hide();
        if (res && res.orderId && res.razorpayKey) {
          const options = {
            key: res.razorpayKey,
            amount: res.amount * 100,
            currency: res.currency,
            name: 'Yoga Vidya School',
            description: 'Pranic Purification Payment',
            order_id: res.orderId,
            handler: (response: any) => {
              sessionStorage.setItem(
                'pranic_purification_razorpay_payment_id',
                response.razorpay_payment_id
              );
              sessionStorage.setItem(
                'pranic_purification_razorpay_order_id',
                response.razorpay_order_id
              );
              sessionStorage.setItem(
                'pranic_purification_razorpay_signature',
                response.razorpay_signature
              );
              sessionStorage.setItem(
                'pranic_purificationDbPayRazor',
                res.payDbId
              );
              this.router.navigate(['/confirmation']);
            },
            prefill: {
              name: res.name,
              email: res.email,
              contact: res.phoneNumber,
            },
            notes: {
              course: JSON.stringify('Pranic Purification'),
            },
            theme: {
              color: '#3399cc',
            },
          };
          const rzp = new Razorpay(options);
          rzp.open();
        } else {
          alert('Session Genration failed! please try again');
          this.spinner.hide();
        }
      });
  }
  initializePaymentForPranicPurification(data: any) {
    this.spinner.show();
    this.webapiService
      .checkoutStripeForPranicPurification(data)
      .subscribe((res: any) => {
        if (res.sessionId) {
          sessionStorage.setItem(
            localstorageKey.pranicSessionId,
            res.sessionId
          );
          sessionStorage.setItem(localstorageKey.praanicPayId, res.payDbId);
          window.location.href = res.url;
          this.spinner.hide();
        } else {
          alert('Session Genration failed! please try again');
          this.spinner.hide();
        }
      });
  }
  initializeRazorPaymentFor200TTC(data: SignupDataModel) {
    this.webapiService
      .checkoutRazorpayFor200TTC(data)
      .subscribe((res: razorPayModel) => {
        if (res && res.orderId && res.razorpayKey) {
          const options = {
            key: res.razorpayKey,
            amount: res.amount * 100,
            currency: data.currency,
            name: 'Yoga Vidya School',
            description: '200 Hours Yoga TTC Payment',
            order_id: res.orderId,
            handler: (response: any) => {
              localStorage.setItem(
                localstorageKey['200TTCRzpId'],
                response.razorpay_payment_id
              );
              localStorage.setItem(
                localstorageKey['200TTCRzpOrderId'],
                response.razorpay_order_id
              );
              localStorage.setItem(
                localstorageKey['200TTCRzpSig'],
                response.razorpay_signature
              );
              localStorage.setItem(
                localstorageKey['200TTCRzpDBId'],
                res.payDbId
              );
              this.router.navigate(['/confirmation']);
            },
            prefill: {
              name: data.name,
              email: data.email,
              contact: data.phoneNumber,
            },
            notes: {
              course: JSON.stringify('200 Hours Yoga TTC'),
            },
            theme: {
              color: '#3399cc',
            },
          };
          this.spinner.hide();
          const rzp = new Razorpay(options);
          rzp.open();
        } else {
          alert('Session Genration failed! please try again');
          this.spinner.hide();
        }
      });
  }
  initializePaymentFor200TTC(data: SignupDataModel) {
    this.webapiService
      .checkoutStripeFor200TTC(data)
      .subscribe((res: stripePayModel) => {
        if (res.sessionId) {
          localStorage.setItem(
            localstorageKey['200TTCStripeSessionId'],
            res.sessionId
          );
          localStorage.setItem(
            localstorageKey['200TTCStripeDBId'],
            res.payDbId
          );
          window.location.href = res.url;
          this.spinner.hide();
        } else {
          alert('Session Genration failed! please try again');
          this.spinner.hide();
        }
      });
  }
  extractPriceAndCurrency(
    value: string
  ): { price: number; currency: string } | null {
    const match = value.match(/^(\d+)\s*([A-Z]+)$/);

    if (match) {
      return {
        price: parseInt(match[1], 10),
        currency: match[2],
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

  isValidEmail(email: any) {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the pattern
    return emailPattern.test(email);
  }

  initializePaymentV2(id: any, email: any, studId: any) {
    // if (this.paymentHandler && this.paymentHandler.redirectToCheckout) {
    this.spinner.show();
    let val = {
      paymentBy: 'Stripe',
      priceId: id,
      custEmail: email.toLowerCase(),
      courseId: sessionStorage.getItem('tempCourse'),
      paymentStatus: 'due',
      studentId: studId,
    };
    this.webapiService.stripe(val).subscribe((res: any) => {
      this.spinner.hide();
      if (res.sessionId) {
        sessionStorage.setItem('session', res.sessionId);
        sessionStorage.setItem(localstorageKey.praanicPayId, res.payDbId);
        window.location.href = res.url;
      } else {
        alert('Session Genration failed! please try again');
        this.spinner.hide();
      }
    });
  }

  setMode(e: any) {
    if (e.target.value == 'STRIPE') {
      this.stripeCounter = true;
      this.ccCounter = false;
    } else {
      this.checkData.currency = 'INR';
      this.stripeCounter = false;
      this.ccCounter = true;
    }
  }
  offerPrice: string = '';
  isDiscounted: boolean = false;
  offerAmount: number = 0;
  codeError: string = '';
  checkDiscount() {
    if (this.couponCode && this.checkData.code == this.couponCode) {
      this.isDiscounted = true;
      this.codeError = '';
    } else {
      this.isDiscounted = false;
      this.codeError = 'Invalid coupon code';
    }
  }
  setDiscountPrice(currency: string) {
    switch (currency) {
      case 'INR':
        this.offerPrice = '3100 INR';
        this.offerAmount = 3100;
        break;
      case 'USD':
        this.offerPrice = '50 USD';
        this.offerAmount = 50;
        break;
      case 'EUR':
        this.offerPrice = '48 EUR';
        this.offerAmount = 48;
        break;
      default:
        break;
    }
  }
}
