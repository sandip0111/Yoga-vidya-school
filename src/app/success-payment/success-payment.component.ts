import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WebapiService } from '../webapi.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { localstorageKey } from '../enum/localstorage';
import {
  razorPaymentResultModel,
  razorPayReturnModel,
  swaraPaymentResultModel,
} from '../models/checkout';
import { PixelTrackingService } from '../services/pixel-tracking.service';

@Component({
  selector: 'app-success-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-payment.component.html',
  styleUrl: './success-payment.component.css',
})
export class SuccessPaymentComponent {
  sessionId: string | null = '';
  onlinesessionId: any;
  onlineLiveClassesSessionId: any;
  pranicPurificationSessionId: string | null = '';
  onlineClassRazorpayPaymentId: any;
  pranaArambhaRazorpayPaymentId: string | null = '';
  pranicPurificationRazorPaySessionId: string = '';
  twoHundredTTCRazorPaySessionId: string = '';
  twoHundredTTCStripeSessionId: string = '';
  rishikesh200RazorPaySessionId: string = '';
  rishikesh200StripeSessionId: string = '';
  message: string = '';
  paidFlag: any = 'default';
  reuseUrl: any;
  ordId: any;
  amount: number = 0;
  cur: string = '';
  couponCodeId: string | null = '';
  swaraSadhnaRazorPaySessionId: string = '';
  swaraSadhnaStripeSessionId: string = '';
  constructor(
    private webapiService: WebapiService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private title: Title,
    private pixelTracking: PixelTrackingService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.title.setTitle('Confirmation');
    }, 1000);

    this.spinner.show();
    this.sessionId = sessionStorage.getItem('session');
    this.onlinesessionId = sessionStorage.getItem('onlinesession');
    this.onlineLiveClassesSessionId = sessionStorage.getItem(
      'onlineLiveClassesSessionId'
    );
    this.pranicPurificationSessionId = sessionStorage.getItem(
      localstorageKey.pranicSessionId
    );
    this.onlineClassRazorpayPaymentId = sessionStorage.getItem(
      'online_class_razorpay_payment_id'
    );
    this.pranaArambhaRazorpayPaymentId = sessionStorage.getItem(
      'prana_razorpay_payment_id'
    );
    this.pranicPurificationRazorPaySessionId =
      sessionStorage.getItem('pranic_purification_razorpay_payment_id') ?? '';
    this.twoHundredTTCRazorPaySessionId =
      localStorage.getItem(localstorageKey['200TTCRzpId']) ?? '';
    this.rishikesh200RazorPaySessionId =
      localStorage.getItem(localstorageKey.rishikesh200RzpId) ?? '';
    this.twoHundredTTCStripeSessionId =
      localStorage.getItem(localstorageKey['200TTCStripeSessionId']) ?? '';
    this.rishikesh200StripeSessionId =
      localStorage.getItem(localstorageKey.rishikesh20StripeSessionId) ?? '';
    this.couponCodeId = localStorage.getItem(localstorageKey.couponCode);
    this.swaraSadhnaRazorPaySessionId =
      localStorage.getItem(localstorageKey.swaraSadhnaRzpId) ?? '';
    this.swaraSadhnaStripeSessionId =
      localStorage.getItem(localstorageKey.swaraSadhnaStripeSessionId) ?? '';
    // Track purchase completion after a short delay to ensure data is loaded

    if (this.sessionId) {
      setTimeout(() => {
        this.getpaymentResult(this.sessionId, this.couponCodeId ?? '');
      }, 1500);
    }
    if (this.onlinesessionId) {
      setTimeout(() => {
        this.getpaymentResultV2(this.onlinesessionId);
      }, 1500);
    }
    if (this.onlineLiveClassesSessionId) {
      setTimeout(() => {
        this.getpaymentResultLiveClasses(this.onlineLiveClassesSessionId);
      }, 1500);
    }

    if (this.onlineClassRazorpayPaymentId) {
      setTimeout(() => {
        this.getpaymentResultLiveClassesRazorPay(
          this.onlineClassRazorpayPaymentId
        );
      }, 1500);
    }

    if (this.pranicPurificationSessionId) {
      setTimeout(() => {
        this.getPaymentResultPranicPurification(
          this.pranicPurificationSessionId ?? ''
        );
      }, 1500);
    }

    if (this.pranaArambhaRazorpayPaymentId) {
      setTimeout(() => {
        this.getpaymentResulPranaAramRazorPay(
          this.pranaArambhaRazorpayPaymentId
        );
      }, 1500);
    }

    if (this.pranicPurificationRazorPaySessionId) {
      setTimeout(() => {
        this.getRazorPaymentResultPranicPurification(
          this.pranicPurificationRazorPaySessionId
        );
      }, 1500);
    }
    if (this.twoHundredTTCRazorPaySessionId) {
      setTimeout(() => {
        this.getRazorPaymentResult200TTC(this.twoHundredTTCRazorPaySessionId);
      }, 0);
    }
    if (this.twoHundredTTCStripeSessionId) {
      setTimeout(() => {
        this.getStripePaymentResult200TTC(this.twoHundredTTCStripeSessionId);
      }, 0);
    }
    if (this.rishikesh200RazorPaySessionId) {
      setTimeout(() => {
        this.getRazorPaymentResultRishikesh200(
          this.rishikesh200RazorPaySessionId
        );
      }, 0);
    }
    if (this.rishikesh200StripeSessionId) {
      setTimeout(() => {
        this.getStripePaymentResultRishikesh200(
          this.rishikesh200StripeSessionId
        );
      }, 0);
    }
    if (this.swaraSadhnaRazorPaySessionId) {
      setTimeout(() => {
        this.getRazorPaymentResultSwaraSadhna(
          this.swaraSadhnaRazorPaySessionId
        );
      }, 0);
    }
    if (this.swaraSadhnaStripeSessionId) {
      setTimeout(() => {
        this.getStripePaymentResultSwaraSadhna(
          this.swaraSadhnaStripeSessionId
        );
      }, 0);
    }
  }
  getpaymentResult(sessionId: any, couponCode: string) {
    let val = {
      sessionId: sessionId,
      student: sessionStorage.getItem('loginId-checkout'),
      course: sessionStorage.getItem('tempCourse'),
      date: this.getcurrentDate(),
      dbPay: sessionStorage.getItem(localstorageKey.praanicPayId),
      couponCode: couponCode,
    };
    this.webapiService.getPaymentResponse(val).subscribe((res: any) => {
      if (res.status == 'success') {
        this.paidFlag = 'true';
        this.ordId = res.paymtId;
        this.amount = res.amount;
        this.cur = this.currencySet(res.currency);
        this.pixelTracking.trackPurchase(this.ordId, 'course', 'course', this.amount, this.cur);

      } else {
        this.paidFlag = 'false';
        this.reuseUrl = res.sessionId;
      }
      this.spinner.hide();
    });
  }

  getpaymentResultV2(sessionId: any) {
    let val = {
      sessionId: sessionId,
      dbPay: sessionStorage.getItem('onlinedbPay'),
    };
    this.webapiService.getPaymentResponseV2(val).subscribe((res: any) => {
      if (res.status == 'success') {
        this.paidFlag = 'true';
        this.ordId = res.paymtId;
        this.amount = res.amount;
        this.cur = this.currencySet(res.currency);
        this.pixelTracking.trackPurchase(this.ordId, 'course', 'course', this.amount, this.cur);
        this.spinner.hide();
      } else {
        this.paidFlag = 'false';
        this.reuseUrl = res.sessionId;
        this.spinner.hide();
      }
    });
  }

  getpaymentResultLiveClasses(sessionId: any) {
    let val = {
      sessionId: sessionId,
      dbPay: sessionStorage.getItem('onlineLiveClassDbPay'),
    };
    this.webapiService
      .getPaymentResultAndSendMailForLiveClass(val)
      .subscribe((res: any) => {
        if (res.status == 'success') {
          this.paidFlag = 'true';
          this.ordId = res.paymtId;
          this.amount = res.amount;
          this.cur = this.currencySet(res.currency);
          this.pixelTracking.trackPurchase(this.ordId, 'live class', 'live class stripe', this.amount, this.cur);
          this.spinner.hide();
        } else {
          this.paidFlag = 'false';
          this.reuseUrl = res.sessionId;
          this.spinner.hide();
        }
      });
  }

  getpaymentResultLiveClassesRazorPay(razorpay_payment_id: any) {
    const paymentResult = {
      razorpay_payment_id: razorpay_payment_id,
      razorpay_order_id: sessionStorage.getItem(
        'online_class_razorpay_order_id'
      ),
      razorpay_signature: sessionStorage.getItem(
        'online_class_razorpay_signature'
      ),
      payDbId: sessionStorage.getItem('onlineLiveClassDbPayRazor'),
    };
    this.webapiService
      .verifyRazorpayPayment(paymentResult)
      .subscribe((res: any) => {
        if (res.status == 'success') {
          this.paidFlag = 'true';
          this.ordId = res.paymentId;
          this.amount = res.amount;
          this.cur = this.currencySet(res.currency);
          this.pixelTracking.trackPurchase(this.ordId, 'live class', 'live class razorpay', this.amount, this.cur);
          this.spinner.hide();
        } else {
          this.paidFlag = 'false';
          this.reuseUrl = res.sessionId;
          this.spinner.hide();
        }
      });
  }

  getpaymentResulPranaAramRazorPay(razorpay_payment_id: string | null) {
    const paymentResult = {
      razorpay_payment_id: razorpay_payment_id ?? '',
      razorpay_order_id: sessionStorage.getItem('prana_razorpay_order_id'),
      razorpay_signature: sessionStorage.getItem('prana_razorpay_signature'),
      payDbId: sessionStorage.getItem('pranaDbPayRazor'),
      currency: sessionStorage.getItem('prana_razorpay_payment_currency'),
      course: sessionStorage.getItem('tempCourse'),
      student: sessionStorage.getItem('loginId-checkout'),
      amount: sessionStorage.getItem('prana_razorpay_payment_amount'),
      couponCodeId: this.couponCodeId,
    };
    this.webapiService
      .getRazorpayPaymentResultForPranarambha(paymentResult)
      .subscribe((res: any) => {
        if (res.status == 'success') {
          this.paidFlag = 'true';
          this.ordId = res.orderId;
          this.amount = res.amount;
          this.cur = this.currencySet(res.currency);
          this.pixelTracking.trackPurchase(this.ordId, 'prana arambha', 'prana arambha stripe', this.amount, this.cur);
          this.spinner.hide();
        } else {
          this.paidFlag = 'false';
          this.spinner.hide();
        }
      });
  }

  getRazorPaymentResultPranicPurification(razorpay_payment_id: string) {
    const paymentResult = {
      razorpay_payment_id: razorpay_payment_id,
      razorpay_order_id: sessionStorage.getItem(
        'pranic_purification_razorpay_order_id'
      ),
      razorpay_signature: sessionStorage.getItem(
        'pranic_purification_razorpay_signature'
      ),
      payDbId: sessionStorage.getItem('pranic_purificationDbPayRazor'),
    };
    this.webapiService
      .getRazorPaymentResultPranicPurification(paymentResult)
      .subscribe((res: any) => {
        if (res.status == 'success') {
          this.paidFlag = 'true';
          this.ordId = res.orderId;
          sessionStorage.removeItem('pranic_purification_razorpay_payment_id');
          localStorage.removeItem(localstorageKey.couponCode);
          this.pixelTracking.trackPurchase(this.ordId, 'Pranic Purification', 'Pranic Purification razorpay', this.amount, this.cur);
          this.spinner.hide();
        } else {
          this.paidFlag = 'false';
          this.spinner.hide();
        }
      });
  }

  getPaymentResultPranicPurification(pranicPurificationSessionId: string) {
    let val = {
      pranicPurificationSessionId: pranicPurificationSessionId,
      payDbId: sessionStorage.getItem(localstorageKey.praanicPayId),
    };
    this.webapiService
      .getPaymentResultPranicPurification(val)
      .subscribe((res: any) => {
        if (res.status == 'success') {
          sessionStorage.removeItem(localstorageKey.pranicSessionId);
          sessionStorage.removeItem(localstorageKey.praanicPayId);
          this.paidFlag = 'true';
          this.ordId = res.paymtId;
          this.amount = res.amount;
          this.cur = this.currencySet(res.currency);
          this.pixelTracking.trackPurchase(this.ordId, 'Pranic Purification', 'Pranic Purification stripe', this.amount, this.cur);
          this.spinner.hide();
        } else {
          this.paidFlag = 'false';
          this.reuseUrl = res.sessionId;
          this.spinner.hide();
        }
      });
  }

  getcurrentDate() {
    const today = new Date(); // get current date and time
    const year = today.getFullYear(); // get year (YYYY)
    const month = String(today.getMonth() + 1).padStart(2, '0'); // get month (MM) and pad with leading zero if necessary
    const day = String(today.getDate()).padStart(2, '0'); // get day (dd) and pad with leading zero if necessary
    return `${year}-${month}-${day}`; // return date string in the format "YYYY/MM/dd"
  }
  is200TTC: boolean = false;
  getRazorPaymentResult200TTC(razorpayPaymentId: string) {
    let pass = this.genratePass(6);
    let dueAmnt = localStorage.getItem(localstorageKey['200TTCDue']);
    const paymentResult: razorPaymentResultModel = {
      razorpayPaymentId: razorpayPaymentId,
      razorpayOrderId: localStorage.getItem(
        localstorageKey['200TTCRzpOrderId']
      ),
      razorpaySignature: localStorage.getItem(localstorageKey['200TTCRzpSig']),
      payDbId: localStorage.getItem(localstorageKey['200TTCRzpDBId']),
      password: pass,
      installment:
        localStorage.getItem(localstorageKey['200TTCInstallment']) ?? '1st',
      dueAmnt: dueAmnt ? +dueAmnt : 0,
    };
    this.webapiService
      .getRazorPaymentResult200TTC(paymentResult)
      .subscribe((res: razorPayReturnModel) => {
        if (res) {
          this.is200TTC = true;
          this.paidFlag = 'true';
          this.ordId = paymentResult.razorpayOrderId;
          this.amount = res.amount;
          this.cur = this.currencySet(res.currency);
          localStorage.removeItem(localstorageKey['200TTCRzpId']);
          this.pixelTracking.trackPurchase(this.ordId, '200 Rishikesh TTC Online', '200 Rishikesh TTC Online razorpay', this.amount, this.cur);
          this.spinner.hide();
        } else {
          this.paidFlag = 'false';
          this.spinner.hide();
        }
      });
  }
  getStripePaymentResult200TTC(sessionId: string) {
    let pass = this.genratePass(6);
    let dueAmnt = localStorage.getItem(localstorageKey['200TTCDue']);
    let val = {
      sessionId: sessionId,
      payDbId: localStorage.getItem(localstorageKey['200TTCStripeDBId']),
      password: pass,
      installment:
        localStorage.getItem(localstorageKey['200TTCInstallment']) ?? '1st',
      dueAmnt: dueAmnt ? +dueAmnt : 0,
    };
    this.webapiService
      .getStripePaymentResult200TTC(val)
      .subscribe((res: any) => {
        if (res.status == 'success') {
          this.is200TTC = true;
          localStorage.removeItem(localstorageKey['200TTCStripeSessionId']);
          localStorage.removeItem(localstorageKey['200TTCStripeDBId']);
          this.paidFlag = 'true';
          this.ordId = res.paymtId;
          this.amount = res.amount;
          this.cur = this.currencySet(res.currency);
          this.pixelTracking.trackPurchase(this.ordId, '200 Rishikesh TTC Online', '200 Rishikesh TTC Online stripe', this.amount, this.cur);
          this.spinner.hide();
        } else {
          this.paidFlag = 'false';
          this.reuseUrl = res.sessionId;
          this.spinner.hide();
        }
      });
  }
  isRishikesh: boolean = false;
  getRazorPaymentResultRishikesh200(razorpayPaymentId: string) {
    const paymentResult: razorPaymentResultModel = {
      razorpayPaymentId: razorpayPaymentId,
      razorpayOrderId: localStorage.getItem(
        localstorageKey.rishikesh200OrderId
      ),
      razorpaySignature: localStorage.getItem(localstorageKey.rishikesh200Sig),
      payDbId: localStorage.getItem(localstorageKey.rishikesh200DBId),
    };
    this.webapiService
      .getRazorPaymentResultRishikesh(paymentResult)
      .subscribe((res: razorPayReturnModel) => {
        if (res) {
          this.isRishikesh = true;
          this.paidFlag = 'true';
          this.ordId = paymentResult.razorpayOrderId;
          this.amount = res.amount;
          this.cur = this.currencySet(res.currency);
          this.pixelTracking.trackPurchase(this.ordId, '200 Rishikesh TTC offline', '200 Rishikesh TTC offline razorpay', this.amount, this.cur);
          this.spinner.hide();
        } else {
          this.paidFlag = 'false';
          this.spinner.hide();
        }
        localStorage.removeItem(localstorageKey.rishikesh200RzpId);
        localStorage.removeItem(localstorageKey.rishikesh200OrderId);
        localStorage.removeItem(localstorageKey.rishikesh200Sig);
        localStorage.removeItem(localstorageKey.rishikesh200DBId);
      });
  }
  getStripePaymentResultRishikesh200(sessionId: string) {
    let val = {
      sessionId: sessionId,
      payDbId: localStorage.getItem(localstorageKey.rishikesh200StripeDBId),
    };
    this.webapiService
      .getStripePaymentResultRishikesh(val)
      .subscribe((res: any) => {
        if (res.data.status == 'success') {
          this.isRishikesh = true;
          this.paidFlag = 'true';
          this.ordId = res.data.paymtId;
          this.amount = res.data.amount;
          this.cur = this.currencySet(res.data.currency);
          this.pixelTracking.trackPurchase(this.ordId, '200 Rishikesh TTC offline', '200 Rishikesh TTC offline stripe', this.amount, this.cur);
          this.spinner.hide();
        } else {
          this.paidFlag = 'false';
          this.reuseUrl = res.data.sessionId;
          this.spinner.hide();
        }
        localStorage.removeItem(localstorageKey.rishikesh20StripeSessionId);
        localStorage.removeItem(localstorageKey.rishikesh200StripeDBId);
      });
  }
  getRazorPaymentResultSwaraSadhna(razorpayPaymentId: string) {
    const paymentResult: swaraPaymentResultModel = {
      razorpay_payment_id: razorpayPaymentId,
      razorpay_order_id:
        localStorage.getItem(localstorageKey.swaraSadhnaOrderId) ?? '',
      razorpay_signature:
        localStorage.getItem(localstorageKey.swaraSadhnaSig) ?? '',
      payDbId: localStorage.getItem(localstorageKey.swaraSadhnaDBId) ?? '',
      userId: localStorage.getItem(localstorageKey.swaraSadhnaUserID) ?? '',
      amount: localStorage.getItem(localstorageKey.swaraSadhnaAmnt) ?? '0',
    };
    this.webapiService
      .getRazorPaymentResultSwarSadhana(paymentResult)
      .subscribe((res: any) => {
        if (res) {
          this.isRishikesh = true;
          this.paidFlag = 'true';
          this.ordId = paymentResult.razorpay_order_id;
          this.amount = 0;
          this.cur = this.currencySet(res.currency);
          this.spinner.hide();
        } else {
          this.paidFlag = 'false';
          this.spinner.hide();
        }
        localStorage.removeItem(localstorageKey.swaraSadhnaRzpId);
        localStorage.removeItem(localstorageKey.swaraSadhnaOrderId);
        localStorage.removeItem(localstorageKey.swaraSadhnaSig);
        localStorage.removeItem(localstorageKey.swaraSadhnaDBId);
        localStorage.removeItem(localstorageKey.swaraSadhnaUserID);
        localStorage.removeItem(localstorageKey.swaraSadhnaAmnt);
      });
  }
  getStripePaymentResultSwaraSadhna(sessionId: string) {
    const paymentResult = {
      sessionId: sessionId,
      userId: localStorage.getItem(localstorageKey.swaraSadhnaStripeDBId)
    }
    this.webapiService
    .getPaymentResultSwarSadhana(paymentResult)
    .subscribe((res: any) => {
      if (res) {
        this.isRishikesh = true;
        this.paidFlag = 'true';
        this.ordId = res.paymtId;
        this.amount = 0;
        this.spinner.hide();
      } else {
        this.paidFlag = 'false';
        this.spinner.hide();
      }
      localStorage.removeItem(localstorageKey.swaraSadhnaStripeSessionId);
      localStorage.removeItem(localstorageKey.swaraSadhnaStripeDBId);
    });
    
  }
  currencySet(currency: string) {
    let cur: string = '';
    if (currency == 'inr' || currency == 'INR') {
      cur = 'INR';
    } else if (currency == 'usd' || currency == 'USD') {
      cur = 'USD';
    } else if (currency == 'eur' || currency == 'EUR') {
      cur = 'EUR';
    }
    return cur;
  }
  gotoAccount() {
    this.router.navigate(['/login']);
    sessionStorage.removeItem('tempCourse');
    sessionStorage.removeItem(localstorageKey.praanicPayId);
    sessionStorage.removeItem('session');
    sessionStorage.removeItem('loginId-checkout');
    sessionStorage.removeItem('prana_razorpay_signature');
    sessionStorage.removeItem('prana_razorpay_order_id');
    sessionStorage.removeItem('prana_razorpay_payment_id');
    sessionStorage.removeItem('pranaDbPayRazor');
    sessionStorage.removeItem('prana_razorpay_payment_amount');
    sessionStorage.removeItem('prana_razorpay_payment_currency');
    localStorage.removeItem(localstorageKey['200TTCRzpId']);
    localStorage.removeItem(localstorageKey['200TTCRzpOrderId']);
    localStorage.removeItem(localstorageKey['200TTCRzpSig']);
    localStorage.removeItem(localstorageKey['200TTCRzpDBId']);
    localStorage.removeItem(localstorageKey['200TTCInstallment']);
    localStorage.removeItem(localstorageKey['200TTCDue']);
  }
  gotoHome() {
    this.router.navigate(['/']);
    sessionStorage.removeItem('onlinedbPay');
    sessionStorage.removeItem('onlinesession');
    sessionStorage.removeItem('onlineLiveClassesSessionId');
    sessionStorage.removeItem('onlineLiveClassDbPay');
    sessionStorage.removeItem(localstorageKey.pranicSessionId);
    sessionStorage.removeItem('pranicDate');
    sessionStorage.removeItem('pranicDuration');
    sessionStorage.removeItem('online_class_razorpay_payment_id');
    sessionStorage.removeItem('online_class_razorpay_order_id');
    sessionStorage.removeItem('online_class_razorpay_signature');
    sessionStorage.removeItem('onlineLiveClassDbPayRazor');
    sessionStorage.removeItem('pranic_purification_razorpay_payment_id');
    sessionStorage.removeItem('pranic_purification_razorpay_signature');
    sessionStorage.removeItem('pranic_purificationDbPayRazor');
    sessionStorage.removeItem('pranic_purification_razorpay_order_id');
    localStorage.removeItem(localstorageKey['200TTCRzpId']);
    localStorage.removeItem(localstorageKey['200TTCRzpOrderId']);
    localStorage.removeItem(localstorageKey['200TTCRzpSig']);
    localStorage.removeItem(localstorageKey['200TTCRzpDBId']);
    localStorage.removeItem(localstorageKey['200TTCInstallment']);
    localStorage.removeItem(localstorageKey['200TTCDue']);
  }
  genratePass(len: number) {
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?';
    let password = '';
    for (var i = 0; i < len; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    return password;
  }

  private getCourseNameFromId(courseId: string): string {
    const courseNames: { [key: string]: string } = {
      '100-hours-yoga-teacher-training-in-rishikesh':
        '100-Hour Yoga Teacher Training',
      '200-hours-yoga-teacher-training-in-rishikesh':
        '200-Hour Yoga Teacher Training',
      '300-hours-yoga-teacher-training-in-rishikesh':
        '300-Hour Yoga Teacher Training',
      '200-hour-yoga-teacher-training-in-bali':
        '200-Hour Yoga Teacher Training Bali',
      '300-hour-yoga-teacher-training-in-bali':
        '300-Hour Yoga Teacher Training Bali',
      'pranic-purification': 'Pranic Purification Course',
      'breath-detox-yoga': 'Breath Detox Yoga',
      'pranayama-course-online-pranarambha': 'Pranayama Course Online',
    };
    return courseNames[courseId] || 'Yoga Teacher Training';
  }
}
