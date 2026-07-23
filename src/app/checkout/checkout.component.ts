import {
  Component,
  Renderer2,
  Inject,
  ViewChild,
  DOCUMENT,
} from '@angular/core';

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
import { paymentkey, PaymentType, stripePaymentKey } from '../enum/payment';
import {
  checkoutModel,
  dropdownModel,
  PhoneNumberData,
  PranayamaCertificationSignupModel,
  paypalPayModel,
  razorPayModel,
  SignupDataModel,
  stripePayModel,
  swaraDataModel,
  swaraRazorModel,
  swaraStripeModel,
  TwoHundredTTCSignupModel,
} from '../models/checkout';
import { localstorageKey } from '../enum/localstorage';
import { routeEnum } from '../enum/routes';
import { twoHundredTTCModel } from '../enum/details';
import {
  feesDto,
  feesInfoDto,
} from '../course/rishikesh/pricing/pricing.component';
import { s3Bucket } from '../enum/s3Bucket';

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
  currency: string = 'USD';
  @ViewChild('phoneRef', { static: false }) phoneRef!: NgxIntlTelInputComponent;
  searchFields = [
    SearchCountryField.Name,
    SearchCountryField.DialCode,
    SearchCountryField.Iso2,
  ];
  currencyOptions: string[] = [];
  currencyOption2: string[] = [];
  firstInstAmnt: number = 0;
  secondInstAmnt: number = 0;
  routeEnum = routeEnum;
  isInstallment: boolean = false;
  paymentId: string | null = '';
  roomList: dropdownModel[] = [];
  isSpecialDiscount: boolean = false;
  actualAmount: number = 0;
  feesData: feeInfoDto[] = [];
  selectedMonth: string | null = null;
  s3bucket = s3Bucket;
  isDiscountPlan: boolean = false;
  // Hardcoded prices for ?plan=discount on 200TTC slug
  private readonly discountPlanPrices: Record<string, number> = {
    INR: 79000,
    USD: 850,
  };
  /** PayPal only supports USD — this is the single source of truth. */
  private readonly PAYPAL_CURRENCY = 'USD' as const;

  /** True when the user has selected a 30% deposit booking option */
  get is30PercentBooking(): boolean {
    return +this.checkData.package === 3 || +this.checkData.package === 4;
  }

  get show30PercentDepositSection(): boolean {
    const allowedSlugs = [
      routeEnum.rishikesh100,
      routeEnum.rishkesh200,
      routeEnum.rishikesh300,
      routeEnum.bali100,
      routeEnum.bali200,
      routeEnum.bali300,
      routeEnum['200TTC'],
      routeEnum.pranayamaCertification,
      routeEnum.retreats,
    ];
    return allowedSlugs.includes(this.slug as any);
  }

  get showPaypalButton(): boolean {
    return (
      this.slug === routeEnum['200TTC'] || this.slug === routeEnum.retreats
    );
  }

  /** True only when the selected currency is USD (the sole currency PayPal accepts here). */
  get canUsePaypal(): boolean {
    return this.checkData.currency === this.PAYPAL_CURRENCY;
  }

  /**
   * PayPal entry-point called from the template.
   * The button is only rendered when canUsePaypal is true (currency === USD),
   * so no currency switching is needed here.
   */
  onPaypalClick(): void {
    if (this.slug === routeEnum['200TTC']) {
      this.checkoutData(this.checkData, 'paypal');
    } else if (this.slug === routeEnum.retreats) {
      this.checkoutData(this.checkData, 'paypal');
    }
  }

  constructor(
    private webapiService: WebapiService,
    private _activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title,
    private spinner: NgxSpinnerService,
    @Inject(DOCUMENT) private _document: Document,
    private _renderer2: Renderer2,
    private pixelTracking: PixelTrackingService,
  ) {
    this._activatedRoute.params.subscribe((params) => {
      this.slug = params['id'];
    });
    this._activatedRoute.queryParams.subscribe((params) => {
      if (params['hash'] === 'abcdef1234567890') {
        this.isSpecialDiscount = true;
      }
      if (params['month']) {
        this.selectedMonth = params['month'];
      }
      if (params['plan'] === 'discount') {
        this.isDiscountPlan = true;
      }
    });
    this.paymentId = this._activatedRoute.snapshot.queryParamMap.get('id');
  }

  ngOnInit(): void {
    this.spinner.show();
    const isBrowser =
      typeof window !== 'undefined' && typeof document !== 'undefined';
    this.getRoomListOption(this.slug);
    if (isBrowser) {
      this.scrollToTop();
      // Track checkout page view
      this.trackCheckoutPageView();
      setTimeout(() => {
        this.invokeStripe();
        this.loadRazorpayScript();
        this.title.setTitle('Checkout');
        const canonicalUrl =
          'https://www.yogavidyaschool.com' + this.router.url;
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
            const date = new Date('2026-01-18');
            this.pranicDate = date;
            this.pranicDuration = '7PM to 8PM (IST)';
            sessionStorage.setItem('pranicDate', date.toISOString());
            sessionStorage.setItem('pranicDuration', this.pranicDuration);
          }
        }
      }, 1000);
    }
    this.getCourseBySlug(this.slug);
    if (this.paymentId) {
      this.getPaymentDetailsById();
    }
  }
  scrollToTop(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  getRoomListOption(pageSlug: string) {
    const baliCourses = [
      routeEnum.bali200,
      routeEnum.bali300,
      routeEnum.bali100,
    ];
    if (
      pageSlug === routeEnum.rishikesh100 ||
      pageSlug === routeEnum.rishkesh200 ||
      pageSlug === routeEnum.rishikesh300
    ) {
      this.roomList = [
        { name: 'Shared room', value: 1 },
        { name: 'Private room', value: 2 },
        { name: 'Reserve your shared room with a 30% deposit', value: 3 },
        { name: 'Reserve your private room with a 30% deposit', value: 4 },
      ];
    } else if (pageSlug === routeEnum['200TTC']) {
      this.roomList = [
        { name: 'Full Amount', value: 1 },
        { name: 'Reserve your room with a 30% deposit', value: 3 },
      ];
    } else if (baliCourses.includes(pageSlug as any)) {
      this.roomList = [
        { name: 'Private room', value: 2 },
        { name: 'Reserve your private room with a 30% deposit', value: 3 },
      ];
    } else if (pageSlug === routeEnum.pranayamaCertification) {
      this.roomList = [
        { name: 'Full Payment', value: 1 },
        { name: 'Reserve your room with a 30% deposit', value: 3 },
      ];
    } else if (pageSlug === routeEnum.retreats) {
      this.roomList = [
        { name: 'Shared room', value: 1 },
        { name: 'Single room', value: 2 },
        { name: 'Reserve your shared room with a 30% deposit', value: 3 },
        { name: 'Reserve your Single room with a 30% deposit', value: 4 },
      ];
    }
    if (this.roomList && this.roomList.length > 0) {
      this.checkData.package = this.roomList[0].value;
    }
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
        this.currencyOption2 = [res.currency];
        // this.checkData.currency = this.currencyOptions[0];
        this.amount = res.dueAmount;
      });
  }
  getCourseBySlug(slug: string) {
    let data = {
      slug: slug,
    };
    this.webapiService.getCourseById(data).subscribe({
      next: (res: any) => {
        if (res.data.length > 0) {
          this.courseList = res.data[0];
          this.feesData = this.courseList.feeInfo;
          this.feesData.map(
            (a) =>
              (a.title = a.title == 'Price' ? a.title : `Price(${a.title})`),
          );
          if (!this.paymentId) {
            this.updateCurrencyOptions(false);
          }
          this.title.setTitle('Checkout');
          this.spinner.hide();
        } else {
          this.router.navigate(['/']);
        }
      },
      error: () => this.spinner.hide(),
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

  setRoomPrice(event: any) {
    this.inputValidation('room');
    const selectedValue = +event.target.value;
    this.checkData.package = selectedValue;
    const isIndian = this.checkData.phoneNumber?.countryCode === 'IN';
    this.updateCurrencyOptions(!!isIndian);
  }
  onCurrencyChange(value: string) {
    this.checkData.currency = value;
    // Discount plan + 200TTC: recompute respecting the currently selected booking type
    if (this.isDiscountPlan && this.slug === routeEnum['200TTC']) {
      const baseAmount = this.discountPlanPrices[value] ?? 79000;
      const isBooking30 = +this.checkData.package === 3;
      this.amount = isBooking30 ? Math.round(baseAmount * 0.3) : baseAmount;
      this.inputValidation('cur');
      return;
    }
    if (this.feesData.length > 0) {
      this.setPriceData(this.feesData, value, this.checkData.package);
    }
    this.inputValidation('cur');
  }
  setPriceData(feesData: feesInfoDto[], currency: string, roomId: number) {
    let isBooking30 = false;
    let lookupRoomId = +roomId;

    if (
      this.slug === this.routeEnum.rishikesh100 ||
      this.slug === this.routeEnum.rishkesh200 ||
      this.slug === this.routeEnum.rishikesh300 ||
      this.slug === this.routeEnum.retreats
    ) {
      if (+roomId === 3) {
        isBooking30 = true;
        lookupRoomId = 1;
      } else if (+roomId === 4) {
        isBooking30 = true;
        lookupRoomId = 2;
      }
    } else {
      isBooking30 = +roomId === 3;
      lookupRoomId = isBooking30
        ? this.slug === this.routeEnum.pranayamaCertification
          ? 1
          : 2
        : +roomId;
    }

    for (let item of feesData) {
      if (item.title == 'Price') {
        if (this.isSpecialDiscount) {
          const discountPrice = item.data.find(
            (f) => f.currency == currency,
          )?.discount;
          if (discountPrice) {
            const baseAmount = discountPrice;
            const baseActual =
              item.data.find((f) => f.currency == currency)?.amount ?? 0;
            this.amount = isBooking30
              ? Math.round(baseAmount * 0.3)
              : baseAmount;
            this.actualAmount = isBooking30
              ? Math.round(baseActual * 0.3)
              : baseActual;
          } else {
            const baseAmount =
              item.data.find((f) => f.currency == currency)?.amount ?? 0;
            this.amount = isBooking30
              ? Math.round(baseAmount * 0.3)
              : baseAmount;
            this.actualAmount = 0;
          }
        } else {
          const baseAmount =
            item.data.find((f) => f.currency == currency)?.amount ?? 0;
          const baseOffer =
            item.data.find((f) => f.currency == currency)?.discount ?? 0;
          this.amount = isBooking30 ? Math.round(baseAmount * 0.3) : baseAmount;
          this.offerAmount = isBooking30
            ? Math.round(baseOffer * 0.3)
            : baseOffer;
        }
      } else {
        const roomName = this.roomList.find(
          (item) => item.value == lookupRoomId,
        )?.name;
        const room = `Price(${roomName})`;
        const matchData = item.data.find(
          (f) => f.currency == currency && item.title == room,
        );

        if (this.isSpecialDiscount) {
          const discountPrice = matchData?.discount;
          if (discountPrice) {
            const baseAmount = discountPrice;
            const baseActual = matchData?.amount ?? 0;
            this.amount = isBooking30
              ? Math.round(baseAmount * 0.3)
              : baseAmount;
            this.actualAmount = isBooking30
              ? Math.round(baseActual * 0.3)
              : baseActual;
          } else {
            const baseAmount = matchData?.amount ?? 0;
            this.amount = isBooking30
              ? Math.round(baseAmount * 0.3)
              : baseAmount;
            this.actualAmount = 0;
          }
        } else {
          const baseAmount = matchData?.amount ?? 0;
          const baseOffer = matchData?.discount ?? 0;
          this.amount = isBooking30 ? Math.round(baseAmount * 0.3) : baseAmount;
          this.offerAmount = isBooking30
            ? Math.round(baseOffer * 0.3)
            : baseOffer;
        }
      }
      if (this.amount) {
        break;
      }
    }
  }
  onPhoneInputChange(
    isValid: boolean | null | undefined,
    phoneInput: any,
  ): void {
    if (this.paymentId) return;
    const countryCode =
      phoneInput?.model?.countryCode ||
      phoneInput?.country?.iso2?.toUpperCase() ||
      this.checkData.phoneNumber?.countryCode;
    const isIndian = !!isValid && countryCode === 'IN';
    if (!isValid && phoneInput?.model?.number) {
      this.phoneError = 'Invalid phone number';
    } else {
      this.phoneError = '';
    }
    this.updateCurrencyOptions(isIndian);
    this.inputValidation('cur');
  }

  updateCurrencyOptions(isIndian: boolean): void {
    if (this.paymentId) return;

    if (this.isDiscountPlan && this.slug === routeEnum['200TTC']) {
      this.currencyOptions = isIndian ? ['USD', 'INR'] : ['USD'];
      if (isIndian) {
        if (!this.checkData.currency || this.checkData.currency !== 'INR') {
          this.checkData.currency = 'INR';
        }
      } else {
        this.checkData.currency = 'USD';
      }
      if (this.checkData.package) {
        const baseAmount =
          this.discountPlanPrices[this.checkData.currency] ?? 850;
        const isBooking30 = +this.checkData.package === 3;
        this.amount = isBooking30 ? Math.round(baseAmount * 0.3) : baseAmount;
      }
      return;
    }

    if (this.feesData.length > 0) {
      const optionsSet = new Set<string>();
      this.feesData.forEach((item) => {
        item.data.forEach((d) => {
          if (isIndian || d.currency !== PaymentType.indianCur) {
            optionsSet.add(d.currency);
          }
        });
      });
      this.currencyOptions = Array.from(optionsSet);
      if (this.currencyOptions.length === 0) {
        this.currencyOptions = ['USD'];
      }

      if (isIndian) {
        this.checkData.currency = this.currencyOptions.includes(
          PaymentType.indianCur,
        )
          ? PaymentType.indianCur
          : this.checkData.currency || 'USD';
      } else {
        if (
          this.checkData.currency === PaymentType.indianCur ||
          !this.currencyOptions.includes(this.checkData.currency)
        ) {
          this.checkData.currency = this.currencyOptions[0] || 'USD';
        }
      }

      this.setPriceData(
        this.feesData,
        this.checkData.currency,
        this.checkData.package,
      );
    } else {
      this.currencyOptions = isIndian ? ['USD', 'INR'] : ['USD'];
      if (!isIndian) {
        this.checkData.currency = 'USD';
      }
    }
  }

  setCurrencyData(
    feesData: feeInfoDto[],
    checkData: checkoutModel,
    phoneInputModel: any,
  ) {
    const isIndian = phoneInputModel?.countryCode === 'IN';
    this.updateCurrencyOptions(isIndian);
  }

  onCountryChange(): void {
    if (this.paymentId) return;
    this.phoneError = '';
    this.checkData.phoneNumber = new PhoneNumberData();
    this.updateCurrencyOptions(false);
  }
  inputValidation(type: string) {
    if (type === 'email') {
      const email = this.checkData.email?.trim();
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email) {
        this.emailRequired = 'Email is required';
        this.emailSuggestion = '';
      } else {
        this.emailRequired = '';
        this.checkData.email = email.replace(/[^a-zA-Z0-9@._%+-]/g, '');
        if (!emailPattern.test(this.checkData.email)) {
          this.emailSuggestion = 'Please enter a valid email address';
        } else {
          this.emailSuggestion = '';
        }
      }
    }
    if (type == 'name') {
      if (this.checkData.name) {
        this.nameRequired = '';
      } else {
        this.nameRequired = 'Name is Required';
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
      this.packageRequired = this.checkData.package
        ? ''
        : 'Please select a Room';
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
  checkoutData(data: checkoutModel, paymentGateway: boolean | 'paypal') {
    const isPaypal = paymentGateway === 'paypal';
    const isRazorPay = paymentGateway === true;
    this.spinner.show();
    this.pixelTracking.trackInitiateCheckout(
      this.slug,
      this.amount,
      data.currency,
    );
    this.pixelTracking.trackAddPaymentInfo(
      this.slug,
      this.amount,
      data.currency,
    );
    if (
      this.slug !== routeEnum.pranicPurification &&
      this.slug !== routeEnum.pranicPurificationII
    ) {
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
        // 200TTC always requires a booking selection (even on discount plan)
        // All other courses only require it when not on a discount plan
        const requires200TTCPackage = this.slug === routeEnum['200TTC'];
        if (
          this.slug !== routeEnum.sa &&
          this.slug !== routeEnum.pranOnlinePranaArambh &&
          this.slug !== routeEnum.foundationOfSpirituality &&
          this.slug !== routeEnum.pranayamaCertification &&
          (!this.isDiscountPlan || requires200TTCPackage)
        ) {
          this.packageRequired = 'Please select a Booking';
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
          this.twoHundredTTCCheckout(data, isRazorPay, isPaypal);
        } else if (
          this.slug == routeEnum.rishikesh100 ||
          this.slug == routeEnum.rishkesh200 ||
          this.slug == routeEnum.rishikesh300
        ) {
          this.rishikesh200Checkout(data, isRazorPay);
        } else if (
          this.slug == routeEnum.bali300 ||
          this.slug == routeEnum.bali200 ||
          this.slug == routeEnum.bali100
        ) {
          this.baliCheckout(data, isRazorPay);
        } else if (this.slug == routeEnum.sa) {
          this.swaraSadhanaCheckout(data, isRazorPay);
        } else if (this.slug == routeEnum.pranayamaCertification) {
          this.pranayamaCertificationCheckout(data, isRazorPay);
        } else if (this.slug == routeEnum.retreats) {
          this.retreatsCheckout(data, isRazorPay, isPaypal);
        } else {
          this.pranaArambhCheckout(data, isRazorPay);
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
      if (!data.currency) {
        this.currencyRequired = 'Currency is required';
        isErrMsg = true;
      }
      if (!isErrMsg) {
        if (this.slug == routeEnum.pranicPurificationII) {
          this.pranicPurificationIICheckOut(data, isRazorPay);
        } else if (this.slug == routeEnum.pranicPurification) {
          this.pranicPurificationCheckOut(data, isRazorPay);
        }
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
      timeSlot: '69fed2c141cc943f7e6489ea',
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
                  ? 'price_1TpLvUSEQq0H4GuESdeYezVj'
                  : 'price_1RU7RYSEQq0H4GuE8nk5oH79';
            this.initializeStripeSwaraSadhna(
              priceId,
              signupData.email,
              res.userId,
            );
          }
        }
      });
  }
  initializeRazorPaySwaraSadhana(
    data: checkoutModel,
    userId: string,
    amount: number,
  ) {
    const razorpayData: swaraRazorModel = {
      currency: data.currency,
      custEmail: data.email,
      price: amount,
      userId: userId,
    };
    localStorage.setItem(localstorageKey.swaraSadhnaAmnt, amount.toString());
    localStorage.setItem(localstorageKey.swaraSadhnaCurr, data.currency);
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
                response.razorpay_payment_id,
              );
              localStorage.setItem(
                localstorageKey.swaraSadhnaOrderId,
                response.razorpay_order_id,
              );
              localStorage.setItem(
                localstorageKey.swaraSadhnaSig,
                response.razorpay_signature,
              );
              localStorage.setItem(
                localstorageKey.swaraSadhnaDBId,
                res.payDbId,
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
            res.sessionId,
          );
          localStorage.setItem(
            localstorageKey.swaraSadhnaStripeDBId,
            res.payDbId,
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
    var { price, currency } = this.extractPriceAndCurrency(
      `${this.amount} ${data.currency}`,
    ) || {
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
  pranicPurificationIICheckOut(data: checkoutModel, isRazorPay: boolean) {
    var { price, currency } = this.extractPriceAndCurrency(
      `${this.amount} ${data.currency}`,
    ) || {
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
      this.initializePaymentForPranicPurificationII(signup);
    } else {
      this.initializeRazorPaymentForPranicPurificationII(signup);
    }
  }
  pranaArambhCheckout(data: checkoutModel, isRazorPay: boolean) {
    sessionStorage.setItem('tempCourse', this.courseList._id);
    let pass = this.genratePass(6);
    if (this.oldStudent == false) {
      this.newStudentCheckOut(data, isRazorPay, pass);
    }
  }
  twoHundredTTCCheckout(
    data: checkoutModel,
    isRazorPay: boolean,
    isPaypal: boolean = false,
  ) {
    const selectedRoom = this.roomList.find((r) => r.value == data.package);
    const isBooking30 = !this.paymentId && +data.package === 3;
    const dueAmount = isBooking30 ? Math.round((this.amount / 0.3) * 0.7) : 0;

    // ─── PayPal: enforce USD as the only accepted currency ───────────────────
    // This is a critical frontend safety net: even if canUsePaypal was somehow
    // bypassed, the payload sent to the backend will always carry 'USD'.
    // The backend MUST also enforce this on its side.
    const effectiveCurrency = isPaypal ? this.PAYPAL_CURRENCY : data.currency;

    let signupData: TwoHundredTTCSignupModel = {
      name: data.name,
      email: data.email.toLowerCase(),
      phoneNumber: data.phoneNumber.e164Number,
      package: data.package,
      room: selectedRoom?.name,
      price: this.isInstallment ? this.firstInstAmnt : this.amount,
      currency: effectiveCurrency,
      courseStartDate: twoHundredTTCModel['200TTCDate'],
      courseTimeDuration: `${twoHundredTTCModel['200TTCStart']} - ${twoHundredTTCModel['200TTCEnd']} (IST)`,
      id: this.paymentId ?? undefined,
      dueAmount: dueAmount,
    };
    if (isPaypal) {
      this.initializePayPalPaymentFor200TTC(signupData);
    } else if (isRazorPay) {
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
      month: this.selectedMonth || undefined,
    };
    if (this.slug == routeEnum.rishikesh100) {
      signupData.hour = 100;
    } else if (this.slug == routeEnum.rishkesh200) {
      signupData.hour = 200;
    } else if (this.slug == routeEnum.rishikesh300) {
      signupData.hour = 300;
    }
    if (isRazorPay) {
      this.initializeRazorPayRishi(signupData);
    } else {
      this.initializePayStripeRishi(signupData);
    }
  }

  baliCheckout(data: checkoutModel, isRazorPay: boolean) {
    let hour = 100;
    let month;
    if (this.slug == routeEnum.bali200) {
      hour = 200;
      month = 'June, 2026';
    } else if (this.slug == routeEnum.bali300) {
      hour = 300;
      month = 'July, 2026';
    } else {
      hour = 100;
      month = 'June, 2026';
    }
    let room = this.roomList.find((item) => item.value == data.package);
    let baliData: SignupDataModel = {
      name: data.name,
      email: data.email.toLowerCase(),
      phoneNumber: data.phoneNumber.e164Number,
      room: room?.name,
      price: this.amount,
      currency: data.currency,
      hour: hour,
      month: month,
    };
    if (!isRazorPay) {
      this.initializePayBaliStripe(baliData);
    }
  }

  initializePayBaliStripe(data: SignupDataModel) {
    this.webapiService
      .checkoutStripeForBali(data)
      .subscribe((res: stripePayModel) => {
        if (res.sessionId) {
          localStorage.setItem(
            localstorageKey.bali300StripeSessionId,
            res.sessionId,
          );
          localStorage.setItem(localstorageKey.bali300StripeDBId, res.payDbId);
          window.location.href = res.url;
          this.spinner.hide();
        } else {
          alert('Session Genration failed! please try again');
          this.spinner.hide();
        }
      });
  }
  pranayamaCertificationCheckout(data: checkoutModel, isRazorPay: boolean) {
    const isBooking30 = +data.package === 3;
    const dueAmount = isBooking30 ? Math.round((this.amount / 0.3) * 0.7) : 0;

    let signupData: PranayamaCertificationSignupModel = {
      name: data.name,
      email: data.email.toLowerCase(),
      phoneNumber: data.phoneNumber.e164Number,
      price: this.amount,
      currency: data.currency,
      dueAmount: dueAmount,
      month: 'February, 2027',
    };

    if (isRazorPay) {
      this.initializeRazorPaymentForPranayamaCertification(signupData);
    } else {
      this.initializePaymentForPranayamaCertification(signupData);
    }
  }
  initializeRazorPaymentForPranayamaCertification(
    data: PranayamaCertificationSignupModel,
  ) {
    this.webapiService
      .checkoutRazorpayForPranayamaCertification(data)
      .subscribe((res: razorPayModel) => {
        if (res && res.orderId && res.razorpayKey) {
          const options = {
            key: res.razorpayKey,
            amount: res.amount * 100,
            currency: data.currency,
            name: 'Yoga Vidya School',
            description: 'Pranayama Certification Payment',
            order_id: res.orderId,
            handler: (response: any) => {
              localStorage.setItem(
                localstorageKey.pranayamaRzpId,
                response.razorpay_payment_id,
              );
              localStorage.setItem(
                localstorageKey.pranayamaRzpOrderId,
                response.razorpay_order_id,
              );
              localStorage.setItem(
                localstorageKey.pranayamaRzpSig,
                response.razorpay_signature,
              );
              localStorage.setItem(
                localstorageKey.pranayamaRzpDBId,
                res.payDbId,
              );
              localStorage.setItem(
                localstorageKey.pranayamaDue,
                data.dueAmount ? data.dueAmount.toString() : '0',
              );
              this.router.navigate(['/confirmation']);
            },
            prefill: {
              name: data.name,
              email: data.email,
              contact: data.phoneNumber,
            },
            notes: {
              course: JSON.stringify('Pranayama Certification'),
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
  initializePaymentForPranayamaCertification(
    data: PranayamaCertificationSignupModel,
  ) {
    this.webapiService
      .checkoutStripeForPranayamaCertification(data)
      .subscribe((res: stripePayModel) => {
        if (res.sessionId) {
          localStorage.setItem(
            localstorageKey.pranayamaStripeSessionId,
            res.sessionId,
          );
          localStorage.setItem(
            localstorageKey.pranayamaStripeDBId,
            res.payDbId,
          );
          localStorage.setItem(
            localstorageKey.pranayamaDue,
            data.dueAmount ? data.dueAmount.toString() : '0',
          );
          window.location.href = res.url;
          this.spinner.hide();
        } else {
          alert('Session Genration failed! please try again');
          this.spinner.hide();
        }
      });
  }
  newStudentCheckOut(data: checkoutModel, isRazorPay: boolean, pass: string) {
    let signup = {
      firstName: data.name,
      email: data.email.toLowerCase(),
      password: pass,
      isActive: true,
      source: 'web',
      phoneNumber: data.phoneNumber.e164Number,
      paymentCourseId: this.courseList._id,
    };
    this.webapiService.createStudent(signup).subscribe((res: any) => {
      if (res.status == 'ok') {
        sessionStorage.setItem('loginId-checkout', res.studentId);
        if (!isRazorPay) {
          if (this.slug == routeEnum.pranOnlinePranaArambh) {
            if (data.currency == 'INR') {
              this.initializePayment(
                this.isDiscounted
                  ? stripePaymentKey.discountInr
                  : stripePaymentKey.basicInr,
                data.email,
              );
            } else if (data.currency == 'USD') {
              this.initializePayment(
                this.isDiscounted
                  ? stripePaymentKey.discountUsd
                  : stripePaymentKey.basicUsd,
                data.email,
              );
            } else if (data.currency == 'EUR') {
              this.initializePayment(
                this.isDiscounted
                  ? stripePaymentKey.discountEur
                  : stripePaymentKey.basicEur,
                data.email,
              );
            } else if (data.currency == 'USD') {
              this.initializePayment(stripePaymentKey.standardUsd, data.email);
            } else if (data.currency == 'USD') {
              this.initializePayment(stripePaymentKey.premiumUsd, data.email);
            }
          } else if (this.slug == routeEnum.foundationOfSpirituality) {
            this.initializePayment(
              data.currency == 'INR'
                ? stripePaymentKey.fosInr
                : stripePaymentKey.fosUSD,
              data.email,
            );
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
  genratePass(len: number) {
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
      paymentStatus: 'pending',
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
      paymentStatus: 'pending',
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
                  this.couponCodeId,
                );
              }
              sessionStorage.setItem(
                'prana_razorpay_payment_id',
                response.razorpay_payment_id,
              );
              sessionStorage.setItem(
                'prana_razorpay_order_id',
                response.razorpay_order_id,
              );
              sessionStorage.setItem(
                'prana_razorpay_signature',
                response.razorpay_signature,
              );
              sessionStorage.setItem('pranaDbPayRazor', res.payDbId);
              sessionStorage.setItem(
                'prana_razorpay_payment_amount',
                this.isDiscounted
                  ? this.offerAmount.toString()
                  : this.amount.toString(),
              );
              sessionStorage.setItem(
                'prana_razorpay_payment_currency',
                data.currency,
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
                response.razorpay_payment_id,
              );
              sessionStorage.setItem(
                'pranic_purification_razorpay_order_id',
                response.razorpay_order_id,
              );
              sessionStorage.setItem(
                'pranic_purification_razorpay_signature',
                response.razorpay_signature,
              );
              sessionStorage.setItem(
                'pranic_purificationDbPayRazor',
                res.payDbId,
              );
              sessionStorage.setItem(
                'pranic_purification_razorpay_payment_amount',
                data.price,
              );
              sessionStorage.setItem(
                'pranic_purification_razorpay_payment_currency',
                res.currency,
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
            res.sessionId,
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
  initializeRazorPaymentForPranicPurificationII(data: any) {
    this.spinner.show();
    this.webapiService
      .checkoutRazorpayForPranicPurificationII(data)
      .subscribe((res: any) => {
        this.spinner.hide();
        if (res && res.orderId && res.razorpayKey) {
          const options = {
            key: res.razorpayKey,
            amount: res.amount * 100,
            currency: res.currency,
            name: 'Yoga Vidya School',
            description: 'Pranic Purification II Payment',
            order_id: res.orderId,
            handler: (response: any) => {
              sessionStorage.setItem(
                'pranic_purificationII_razorpay_payment_id',
                response.razorpay_payment_id,
              );
              sessionStorage.setItem(
                'pranic_purificationII_razorpay_order_id',
                response.razorpay_order_id,
              );
              sessionStorage.setItem(
                'pranic_purificationII_razorpay_signature',
                response.razorpay_signature,
              );
              sessionStorage.setItem(
                'pranic_purificationIIDbPayRazor',
                res.payDbId,
              );
              sessionStorage.setItem(
                'pranic_purificationII_razorpay_payment_amount',
                data.price,
              );
              sessionStorage.setItem(
                'pranic_purificationII_razorpay_payment_currency',
                res.currency,
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
  initializePaymentForPranicPurificationII(data: any) {
    this.spinner.show();
    this.webapiService
      .checkoutStripeForPranicPurificationII(data)
      .subscribe((res: any) => {
        if (res.sessionId) {
          sessionStorage.setItem(
            localstorageKey.pranicIISessionId,
            res.sessionId,
          );
          sessionStorage.setItem(localstorageKey.praanicIIPayId, res.payDbId);
          window.location.href = res.url;
          this.spinner.hide();
        } else {
          alert('Session Genration failed! please try again');
          this.spinner.hide();
        }
      });
  }
  initializeRazorPaymentFor200TTC(data: TwoHundredTTCSignupModel) {
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
                response.razorpay_payment_id,
              );
              localStorage.setItem(
                localstorageKey['200TTCRzpOrderId'],
                response.razorpay_order_id,
              );
              localStorage.setItem(
                localstorageKey['200TTCRzpSig'],
                response.razorpay_signature,
              );
              localStorage.setItem(
                localstorageKey['200TTCRzpDBId'],
                res.payDbId,
              );
              const isDue =
                !this.paymentId && data.dueAmount && data.dueAmount > 0;
              localStorage.setItem(
                localstorageKey['200TTCInstallment'],
                isDue ? '1st' : '2nd',
              );
              localStorage.setItem(
                localstorageKey['200TTCDue'],
                isDue ? data.dueAmount!.toString() : '0',
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
  initializePaymentFor200TTC(data: TwoHundredTTCSignupModel) {
    this.webapiService
      .checkoutStripeFor200TTC(data)
      .subscribe((res: stripePayModel) => {
        if (res.sessionId) {
          localStorage.setItem(
            localstorageKey['200TTCStripeSessionId'],
            res.sessionId,
          );
          localStorage.setItem(
            localstorageKey['200TTCStripeDBId'],
            res.payDbId,
          );
          const isDue = !this.paymentId && data.dueAmount && data.dueAmount > 0;
          localStorage.setItem(
            localstorageKey['200TTCInstallment'],
            isDue ? '1st' : '2nd',
          );
          localStorage.setItem(
            localstorageKey['200TTCDue'],
            isDue ? data.dueAmount!.toString() : '0',
          );
          window.location.href = res.url;
          this.spinner.hide();
        } else {
          alert('Session Genration failed! please try again');
          this.spinner.hide();
        }
      });
  }
  initializePayPalPaymentFor200TTC(data: TwoHundredTTCSignupModel) {
    this.webapiService
      .checkoutPaypalFor200TTC(data)
      .subscribe((res: paypalPayModel) => {
        if (res.orderId && res.payDbId && res.approvalUrl) {
          localStorage.setItem(
            localstorageKey['200TTCPaypalOrderId'],
            res.orderId,
          );
          localStorage.setItem(
            localstorageKey['200TTCPaypalDBId'],
            res.payDbId,
          );
          const isDue = !this.paymentId && data.dueAmount && data.dueAmount > 0;
          localStorage.setItem(
            localstorageKey['200TTCInstallment'],
            isDue ? '1st' : '2nd',
          );
          localStorage.setItem(
            localstorageKey['200TTCDue'],
            isDue ? data.dueAmount!.toString() : '0',
          );
          window.location.href = res.approvalUrl;
          this.spinner.hide();
        } else {
          alert('Session Genration failed! please try again');
          this.spinner.hide();
        }
      });
  }
  initializeRazorPayRishi(data: SignupDataModel) {
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
                response.razorpay_payment_id,
              );
              localStorage.setItem(
                localstorageKey.rishikesh200OrderId,
                response.razorpay_order_id,
              );
              localStorage.setItem(
                localstorageKey.rishikesh200Sig,
                response.razorpay_signature,
              );
              localStorage.setItem(
                localstorageKey.rishikesh200DBId,
                res.payDbId,
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
  initializePayStripeRishi(data: SignupDataModel) {
    this.webapiService
      .checkoutStripeForRishikesh(data)
      .subscribe((res: stripePayModel) => {
        if (res.sessionId) {
          localStorage.setItem(
            localstorageKey.rishikesh20StripeSessionId,
            res.sessionId,
          );
          localStorage.setItem(
            localstorageKey.rishikesh200StripeDBId,
            res.payDbId,
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
    value: string,
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
      `Checkout - ${courseName}`,
    );
    this.pixelTracking.trackViewContent('checkout_page', this.slug);
  }
  private getCourseName(slug: string): string {
    const courseNames: { [key: string]: string } = {
      [routeEnum.rishikesh100]: '100-Hour Yoga Teacher Training',
      [routeEnum.rishkesh200]: '200-Hour Yoga Teacher Training',
      [routeEnum.rishikesh300]: '300-Hour Yoga Teacher Training',
      [routeEnum.bali100]: '100-Hour Yoga Teacher Training Bali',
      [routeEnum.bali200]: '200-Hour Yoga Teacher Training Bali',
      [routeEnum.bali300]: '300-Hour Yoga Teacher Training Bali',
    };
    return courseNames[slug] || 'Yoga Teacher Training';
  }
  //#region retreat
  retreatsCheckout(data: checkoutModel, isRazorPay: boolean, isPaypal: boolean = false) {
    let room = this.roomList.find((item) => item.value == data.package);

    // PayPal enforces USD as the only accepted currency
    const effectiveCurrency = isPaypal ? this.PAYPAL_CURRENCY : data.currency;

    let retreatData: SignupDataModel = {
      name: data.name,
      email: data.email.toLowerCase(),
      phoneNumber: data.phoneNumber.e164Number,
      room: room?.name,
      price: this.amount,
      currency: effectiveCurrency,
    };
    if (isPaypal) {
      this.initializePayPalPaymentForRetreat(retreatData);
    } else if (isRazorPay) {
      this.initializeRazorPayRetreat(retreatData);
    } else {
      this.initializePayStripeRetreat(retreatData);
    }
  }
  initializeRazorPayRetreat(data: SignupDataModel) {
    this.webapiService
      .checkoutRazorpayRetreat(data)
      .subscribe((res: razorPayModel) => {
        if (res && res.orderId && res.razorpayKey) {
          const options = {
            key: res.razorpayKey,
            amount: res.amount * 100,
            currency: data.currency,
            name: 'Yoga Vidya School',
            description: 'The Essence of Yoga – Mysore Retreat 2026 Payment',
            order_id: res.orderId,
            handler: (response: any) => {
              localStorage.setItem(
                localstorageKey.retreatRzpId,
                response.razorpay_payment_id,
              );
              localStorage.setItem(
                localstorageKey.retreatOrderId,
                response.razorpay_order_id,
              );
              localStorage.setItem(
                localstorageKey.retreatSig,
                response.razorpay_signature,
              );
              localStorage.setItem(localstorageKey.retreatDBId, res.payDbId);
              this.router.navigate(['/confirmation']);
            },
            prefill: {
              name: data.name,
              email: data.email,
              contact: data.phoneNumber,
            },
            notes: {
              course: JSON.stringify(
                'The Essence of Yoga – Mysore Retreat 2026 Payment',
              ),
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
  initializePayStripeRetreat(data: SignupDataModel) {
    this.webapiService
      .checkoutStripeForRetreat(data)
      .subscribe((res: stripePayModel) => {
        if (res.sessionId) {
          localStorage.setItem(
            localstorageKey.retreatStripeSessionId,
            res.sessionId,
          );
          localStorage.setItem(localstorageKey.retreatStripeDBId, res.payDbId);
          window.location.href = res.url;
          this.spinner.hide();
        } else {
          alert('Session Genration failed! please try again');
          this.spinner.hide();
        }
      });
  }
  /**
   * PayPal checkout for The Essence of Yoga – Mysore Retreat.
   * Currency is always forced to USD (PayPal requirement).
   */
  initializePayPalPaymentForRetreat(data: SignupDataModel) {
    this.webapiService
      .checkoutPaypalForRetreat(data)
      .subscribe((res: paypalPayModel) => {
        if (res.orderId && res.payDbId && res.approvalUrl) {
          localStorage.setItem(
            localstorageKey.retreatPaypalOrderId,
            res.orderId,
          );
          localStorage.setItem(
            localstorageKey.retreatPaypalDBId,
            res.payDbId,
          );
          window.location.href = res.approvalUrl;
          this.spinner.hide();
        } else {
          alert('Session Generation failed! please try again');
          this.spinner.hide();
        }
      });
  }
  //#endregion
}
class courseListDto {
  _id: string = '';
  coursetitle: string = '';
  priceId: string = '';
  feeInfo: feeInfoDto[] = [];
}
interface feeInfoDto {
  title: string;
  data: feesDto[];
}
