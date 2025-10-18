import { Component, Renderer2, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WebapiService } from '../webapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PixelTrackingService } from '../services/pixel-tracking.service';
import {
  NgxIntlTelInputComponent,
  NgxIntlTelInputModule,
} from 'ngx-intl-tel-input';
import { SearchCountryField } from 'ngx-intl-tel-input';
import { CountryISO } from 'ngx-intl-tel-input';
import { paymentkey, stripePaymentKey } from '../enum/payment';
import {
  checkoutModel,
  dropdownModel,
  PhoneNumberData,
  razorPayModel,
  SignupDataModel,
  stripePayModel,
  swaraDataModel,
  swaraRazorModel,
  swaraStripeModel,
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
  slug: string = '';
  price: string = '';
  courseList: courseListDto = new courseListDto();
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
  firstInstAmnt: number = 0;
  secondInstAmnt: number = 0;
  routeEnum = routeEnum;
  isInstallment: boolean = false;
  paymentId: string | null = '';
  roomList: dropdownModel[] = [];
  isRishikeshDiscount: boolean = false;
  actualAmount: number = 0;
  constructor(
    private webapiService: WebapiService,
    private _activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title,
    private spinner: NgxSpinnerService,
    @Inject(DOCUMENT) private _document: Document,
    private _renderer2: Renderer2,
    private pixelTracking: PixelTrackingService
  ) {
    this._activatedRoute.params.subscribe((params) => {
      this.slug = params['id'];
    });
    if (this.slug == routeEnum.rishkesh200) {
      this._activatedRoute.queryParams.subscribe((params) => {
        if (params['hash'] === 'abcdef1234567890') {
          this.isRishikeshDiscount = true;
        }
      });
    }
    this.paymentId = this._activatedRoute.snapshot.queryParamMap.get('id');
  }

  ngOnInit(): void {
    if (this.slug == routeEnum.rishikesh100) {
      this.roomList = [{ name: 'Shared Room', value: 1 }];
    } else if (this.slug == routeEnum.rishkesh200) {
      this.roomList = [
        { name: 'Shared Room', value: 1 },
        { name: 'Private Room', value: 2 },
      ];
    } else if (this.slug == routeEnum.rishikesh300) {
      this.roomList = [
        { name: 'Shared Room', value: 1 },
        { name: 'Private Room', value: 2 },
      ];
    }
    this.scrollToTop();

    // Track checkout page view
    this.trackCheckoutPageView();
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
    if (this.paymentId) {
      this.getPaymentDetailsById();
    }
  }
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  getPaymentDetailsById() {
    this.webapiService
      .getPaymentDetailsById(this.paymentId)
      .subscribe((res: any) => {
        this.checkData.name = res.name;
        this.checkData.email = res.email;
        this.checkData.phoneNumber = {
          number: '9876543210',
          internationalNumber: '+91 98765 43210',
          nationalNumber: '098765 43210',
          e164Number: '+919876543210',
          countryCode: 'IN',
          dialCode: '+91',
        };
        this.checkData.package = res.package;
        this.currencyOptions = [res.currency];
        this.checkData.currency = this.currencyOptions[0];
        this.amount = res.dueAmount;
      });
  }
  getCourseBySlug(slug: string) {
    let data = {
      slug: slug,
    };
    if (slug == routeEnum.sa) {
      this.courseList.coursetitle = 'SWARA SADHANA';
    } else {
      this.webapiService.getCourseById(data).subscribe((res: any) => {
        if (res.data.length > 0) {
          this.courseList = res.data[0];
          this.title.setTitle('Checkout');
        } else {
          this.router.navigate(['/']);
        }
      });
    }
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
  setRoomPrice(event: any) {
    this.inputValidation('room');
    if (event.target.value == 1 || event.target.value == 2) {
      this.currencyOptions = ['INR', 'USD'];
      this.checkData.currency =
        this.checkData.currency == ''
          ? this.currencyOptions[0]
          : this.checkData.currency;
    } else {
      this.currencyOptions = [];
      this.checkData.currency = '';
    }
    switch (this.slug) {
      case routeEnum.rishikesh100:
        this.rishikesh100Price();
        break;
      case routeEnum.rishkesh200:
        this.rishikesh200Price();
        break;
      case routeEnum.rishikesh300:
        this.rishikesh300Price();
        break;
      default:
        break;
    }
  }
  rishikesh100Price() {
    if (this.checkData.currency == 'INR') {
      this.amount = 55000;
    } else if (this.checkData.currency == 'USD') {
      this.amount = 850;
    }
  }
  rishikesh200Price() {
    if (this.checkData.currency == 'INR' && this.checkData.package == 1) {
      this.amount = 85000;
      this.actualAmount = 0;
    } else if (
      this.checkData.currency == 'INR' &&
      this.checkData.package == 2
    ) {
      if (this.isRishikeshDiscount) {
        this.amount = 75000;
        this.actualAmount = 90000;
      } else {
        this.amount = 90000;
      }
    } else if (
      this.checkData.currency == 'USD' &&
      this.checkData.package == 1
    ) {
      this.amount = 1500;
      this.actualAmount = 0;
    } else if (
      this.checkData.currency == 'USD' &&
      this.checkData.package == 2
    ) {
      if (this.isRishikeshDiscount) {
        this.amount = 1500;
        this.actualAmount = 1800;
      } else {
        this.amount = 1800;
      }
    }
  }
  rishikesh300Price() {
    if (this.checkData.currency == 'INR' && this.checkData.package == 1) {
      this.amount = 120000;
    } else if (
      this.checkData.currency == 'INR' &&
      this.checkData.package == 2
    ) {
      this.amount = 140000;
    } else if (
      this.checkData.currency == 'USD' &&
      this.checkData.package == 1
    ) {
      this.amount = 1850;
    } else if (
      this.checkData.currency == 'USD' &&
      this.checkData.package == 2
    ) {
      this.amount = 1999;
    }
  }
  priceConvert(e: any) {
    if (
      this.slug !== routeEnum.pranicPurification &&
      this.slug !== routeEnum.rishikesh100 &&
      this.slug !== routeEnum.rishkesh200 &&
      this.slug !== routeEnum.rishikesh300 &&
      this.slug !== String(routeEnum.sa)
    ) {
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
    } else if (this.slug == routeEnum.rishikesh100) {
      this.rishikesh100Price();
    } else if (this.slug == routeEnum.rishkesh200) {
      this.rishikesh200Price();
    } else if (this.slug == routeEnum.rishikesh300) {
      this.rishikesh300Price();
    } else if (this.slug === String(routeEnum.sa)) {
      this.setSwaraSadhanaPrice(e.target.value);
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
  setSwaraSadhanaPrice(currency: string) {
    switch (currency) {
      case 'INR':
        this.price = '999 INR';
        this.amount = 999;
        break;
      case 'USD':
        this.price = '16 USD';
        this.amount = 16;
        break;
      case 'EUR':
        this.price = '16 EUR';
        this.amount = 16;
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
        this.price = '65000 INR';
        this.amount = 65000;
        this.firstInstAmnt = 50000;
        this.secondInstAmnt = 55000;
        break;
      case 'USD':
        this.price = '999 USD';
        this.amount = 999;
        break;
      // case 'EUR':
      //   this.price = '1280 EUR';
      //   this.amount = 1280;
      //   break;
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
      if (
        this.slug !== routeEnum.rishikesh100 &&
        this.slug !== routeEnum.rishkesh200 &&
        this.slug !== routeEnum.rishikesh300 &&
        this.slug !== (routeEnum.sa as unknown as string)
      ) {
        this.currencyOptions = [];
        this.checkData.currency = '';
        this.setPriceOnInputChange();
      }
    } else {
      this.phoneError = '';
      if (
        this.slug !== routeEnum.rishikesh100 &&
        this.slug !== routeEnum.rishkesh200 &&
        this.slug !== routeEnum.rishikesh300 &&
        this.slug !== (routeEnum.sa as unknown as string)
      ) {
        const phoneValue = this.checkData.phoneNumber;
        const countryCode = phoneValue?.countryCode?.toLowerCase();
        if (countryCode === 'in' && this.slug == routeEnum['200TTC']) {
          this.currencyOptions = ['INR', 'USD'];
        } else if (countryCode === 'in') {
          this.currencyOptions = ['INR', 'USD', 'EUR'];
        } else {
          this.currencyOptions = ['USD', 'EUR'];
        }
        this.checkData.package = 'Basic';
        this.checkData.currency = this.currencyOptions[0];
        this.setPriceOnInputChange();
        this.inputValidation('package');
        this.inputValidation('cur');
      } else if (this.slug === (routeEnum.sa as unknown as string)) {
        this.currencyOptions = ['INR', 'USD', 'EUR'];
        this.checkData.currency = this.currencyOptions[0];
        this.setSwaraSadhanaPrice(this.checkData.currency);
      }
    }
  }

  onCountryChange(country: any): void {
    this.phoneError = 'Invalid phone number';
    this.currencyOptions = [];
    this.checkData.currency = '';
    this.checkData.phoneNumber = new PhoneNumberData();
    this.amount = 0;
    this.price = '';
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
    if (type == 'room') {
      if (this.checkData.package) {
        this.packageRequired = '';
      } else {
        this.packageRequired = 'Please select a Room';
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
    this.pixelTracking.trackInitiateCheckout(
      this.slug,
      this.amount,
      data.currency
    );
    this.pixelTracking.trackAddPaymentInfo(
      this.slug,
      this.amount,
      data.currency
    );
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
        if (this.slug !== routeEnum.sa) {
          this.packageRequired =
            this.slug == routeEnum.rishkesh200
              ? 'Please select a room'
              : 'Please select a package';
          isErrMsg = true;
        }
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
        } else if (
          this.slug == routeEnum.rishikesh100 ||
          this.slug == routeEnum.rishkesh200 ||
          this.slug == routeEnum.rishikesh300
        ) {
          this.rishikesh200Checkout(data, isRazorPay);
        } else if (this.slug == routeEnum.sa) {
          this.swaraSadhanaCheckout(data, isRazorPay);
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
  swaraSadhanaCheckout(data: checkoutModel, isRazorPay: boolean) {
    let signupData: swaraDataModel = {
      city: data.address,
      email: data.email.toLowerCase(),
      name: data.name,
      password: this.genratePass(6),
      phone: data.phoneNumber.e164Number,
      timeSlot: '67e033dc5cd9be5b6d38a7fd',
      webinar: 'Swara Sadhana',
      isWebsite: true,
      paymentType: isRazorPay ? 'razorpay' : 'stripe',
    };
    this.webapiService
      .registerSwarSadhanaWebinarUser(signupData)
      .subscribe((res: any) => {
        if (res.message == 'User registered successfully!') {
          if (isRazorPay) {
            this.initializeRazorPaySwaraSadhana(data, res.userId, this.amount);
          } else {
            let priceId: string =
              data.currency === 'INR'
                ? stripePaymentKey.swaraInr
                : data.currency === 'USD'
                ? 'price_1RU7RCSEQq0H4GuEJylju4cd'
                : 'price_1RU7RYSEQq0H4GuE8nk5oH79';
            this.initializeStripeSwaraSadhna(
              priceId,
              signupData.email,
              res.userId
            );
          }
          // this.spinner.hide();
        }
      });
  }
  initializeRazorPaySwaraSadhana(
    data: checkoutModel,
    userId: string,
    amount: number
  ) {
    const razorpayData: swaraRazorModel = {
      currency: data.currency,
      custEmail: data.email,
      price: amount,
      userId: userId,
    };
    localStorage.setItem(localstorageKey.swaraSadhnaAmnt, amount.toString());
    localStorage.setItem(localstorageKey.swaraSadhnaUserID, userId);
    this.webapiService
      .checkoutRazorpayNewSwarSadhana(razorpayData)
      .subscribe((res: any) => {
        if (res && res.orderId && res.razorpayKeyId) {
          const options = {
            key: res.razorpayKeyId,
            amount: res.amount * 100,
            currency: data.currency,
            name: 'Yoga Vidya School',
            description: 'Swara Sadhna',
            order_id: res.orderId,
            handler: (response: any) => {
              localStorage.setItem(
                localstorageKey.swaraSadhnaRzpId,
                response.razorpay_payment_id
              );
              localStorage.setItem(
                localstorageKey.swaraSadhnaOrderId,
                response.razorpay_order_id
              );
              localStorage.setItem(
                localstorageKey.swaraSadhnaSig,
                response.razorpay_signature
              );
              localStorage.setItem(
                localstorageKey.swaraSadhnaDBId,
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
              course: JSON.stringify('Swara Sadhna'),
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
  initializeStripeSwaraSadhna(id: string, email: string, userId: string) {
    let stripeVal: swaraStripeModel = {
      custEmail: email.toLowerCase(),
      priceId: id,
      userId: userId,
    };
    this.webapiService
      .checkoutSwarSadhanaStripe(stripeVal)
      .subscribe((res: any) => {
        if (res.sessionId) {
          localStorage.setItem(
            localstorageKey.swaraSadhnaStripeSessionId,
            res.sessionId
          );
          localStorage.setItem(
            localstorageKey.swaraSadhnaStripeDBId,
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
    }
    //  else {
    //   if (this.slug == routeEnum.pranOnlinePranaArambh) {
    //     if (data.package == 'Basic' && data.currency == 'INR') {
    //       this.spinner.hide();
    //       this.initializePayment('price_1QmsTUSEQq0H4GuEZfWd5UJu', data.email); //price_1NI7hnSEQq0H4GuETCleI6Uo  price_1NI6oxSEQq0H4GuEW24DMpTn
    //     } else if (data.package == 'Standard' && data.currency == 'INR') {
    //       this.spinner.hide();
    //       this.initializePayment('price_1NI6oxSEQq0H4GuERpBbilF2', data.email);
    //     } else if (data.package == 'Premium' && data.currency == 'INR') {
    //       this.spinner.hide();
    //       this.initializePayment('price_1NI6oxSEQq0H4GuEx9fdhEd0', data.email);
    //     } else if (data.package == 'Basic' && data.currency == 'USD') {
    //       this.spinner.hide();
    //       this.initializePayment('price_1QmychSEQq0H4GuEAipCDoPU', data.email);
    //     } else if (data.package == 'Standard' && data.currency == 'USD') {
    //       this.spinner.hide();
    //       this.initializePayment('price_1NIRatSEQq0H4GuE0DOlcCNa', data.email);
    //     } else if (data.package == 'Premium' && data.currency == 'USD') {
    //       this.spinner.hide();
    //       this.initializePayment('price_1NIRbNSEQq0H4GuEeLvnyPu2', data.email);
    //     } else {
    //       this.spinner.hide();
    //     }
    //   } else {
    //     if (this.courseList.priceId) {
    //       this.initializePayment(this.courseList.priceId, data.email);
    //     }
    //     this.spinner.hide();
    //   }
    // }
  }
  twoHundredTTCCheckout(data: checkoutModel, isRazorPay: boolean) {
    let signupData: SignupDataModel = {
      name: data.name,
      email: data.email.toLowerCase(),
      phoneNumber: data.phoneNumber.e164Number,
      package: data.package,
      price: this.isInstallment ? this.firstInstAmnt : this.amount,
      currency: data.currency,
      courseStartDate: twoHundredTTCModel['200TTCDate'],
      courseTimeDuration: `${twoHundredTTCModel['200TTCStart']} - ${twoHundredTTCModel['200TTCEnd']} (IST)`,
      id: this.paymentId ?? undefined,
    };
    if (isRazorPay) {
      this.initializeRazorPaymentFor200TTC(signupData);
    } else {
      this.initializePaymentFor200TTC(signupData);
    }
  }
  rishikesh200Checkout(data: checkoutModel, isRazorPay: boolean) {
    let room = this.roomList.find((item) => item.value == data.package);
    let signupData: SignupDataModel = {
      name: data.name,
      email: data.email.toLowerCase(),
      phoneNumber: data.phoneNumber.e164Number,
      room: room?.name,
      price: this.isInstallment ? this.firstInstAmnt : this.amount,
      currency: data.currency,
    };
    if (this.slug == routeEnum.rishikesh100) {
      signupData.hour = 100;
    } else if (this.slug == routeEnum.rishkesh200) {
      signupData.hour = 200;
    } else if (this.slug == routeEnum.rishikesh300) {
      signupData.hour = 300;
    }
    if (isRazorPay) {
      this.initializeRazorPayRish200(signupData);
    } else {
      this.initializePayRish200(signupData);
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
              localStorage.setItem(
                localstorageKey['200TTCInstallment'],
                this.isInstallment ? '1st' : '2nd'
              );
              localStorage.setItem(
                localstorageKey['200TTCDue'],
                this.isInstallment ? this.secondInstAmnt.toString() : '0'
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
          localStorage.setItem(
            localstorageKey['200TTCInstallment'],
            this.isInstallment ? '1st' : '2nd'
          );
          localStorage.setItem(
            localstorageKey['200TTCDue'],
            this.isInstallment ? this.secondInstAmnt.toString() : '0'
          );
          window.location.href = res.url;
          this.spinner.hide();
        } else {
          alert('Session Genration failed! please try again');
          this.spinner.hide();
        }
      });
  }
  initializeRazorPayRish200(data: SignupDataModel) {
    this.webapiService
      .checkoutRazorpayRishikesh(data)
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
                localstorageKey.rishikesh200RzpId,
                response.razorpay_payment_id
              );
              localStorage.setItem(
                localstorageKey.rishikesh200OrderId,
                response.razorpay_order_id
              );
              localStorage.setItem(
                localstorageKey.rishikesh200Sig,
                response.razorpay_signature
              );
              localStorage.setItem(
                localstorageKey.rishikesh200DBId,
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
              course: JSON.stringify('Rishikesh 200 Hour'),
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
  initializePayRish200(data: SignupDataModel) {
    this.webapiService
      .checkoutStripeForRishikesh(data)
      .subscribe((res: stripePayModel) => {
        if (res.sessionId) {
          localStorage.setItem(
            localstorageKey.rishikesh20StripeSessionId,
            res.sessionId
          );
          localStorage.setItem(
            localstorageKey.rishikesh200StripeDBId,
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

  // Pixel tracking methods
  private trackCheckoutPageView() {
    const courseName = this.getCourseName(this.slug);
    this.pixelTracking.trackPageView(
      `checkout-${this.slug}`,
      `Checkout - ${courseName}`
    );
    this.pixelTracking.trackViewContent('checkout_page', this.slug);
  }

  private getCourseName(slug: string): string {
    const courseNames: { [key: string]: string } = {
      [routeEnum.rishikesh100]: '100-Hour Yoga Teacher Training',
      [routeEnum.rishkesh200]: '200-Hour Yoga Teacher Training',
      [routeEnum.rishikesh300]: '300-Hour Yoga Teacher Training',
      [routeEnum.bali200]: '200-Hour Yoga Teacher Training Bali',
      [routeEnum.bali300]: '300-Hour Yoga Teacher Training Bali',
    };
    return courseNames[slug] || 'Yoga Teacher Training';
  }

  private getCourseValue(slug: string): number {
    const courseValues: { [key: string]: number } = {
      [routeEnum.rishikesh100]: 800,
      [routeEnum.rishkesh200]: 1200,
      [routeEnum.rishikesh300]: 1500,
      [routeEnum.bali200]: 1400,
      [routeEnum.bali300]: 1800,
    };
    return courseValues[slug] || 1000;
  }
}
class courseListDto {
  _id: string = '';
  coursetitle: string = '';
  priceId: any;
}
