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
} from '../models/checkout';

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
  message: string = '';
  paidFlag: any = 'default';
  reuseUrl: any;
  ordId: any;
  amount: number = 0;
  cur: string = '';
  couponCodeId: string | null = '';
  constructor(
    private webapiService: WebapiService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private title: Title
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
    this.twoHundredTTCStripeSessionId =
      localStorage.getItem(localstorageKey['200TTCStripeSessionId']) ?? '';
    this.couponCodeId = localStorage.getItem(localstorageKey.couponCode);
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
          this.ordId = res.paymtId;
          this.amount = res.amount;
          this.cur = this.currencySet(res.currency);
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
    const paymentResult: razorPaymentResultModel = {
      razorpayPaymentId: razorpayPaymentId,
      razorpayOrderId: localStorage.getItem(
        localstorageKey['200TTCRzpOrderId']
      ),
      razorpaySignature: localStorage.getItem(localstorageKey['200TTCRzpSig']),
      payDbId: localStorage.getItem(localstorageKey['200TTCRzpDBId']),
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
          this.spinner.hide();
        } else {
          this.paidFlag = 'false';
          this.spinner.hide();
        }
      });
  }
  getStripePaymentResult200TTC(sessionId: string) {
    let val = {
      sessionId: sessionId,
      payDbId: localStorage.getItem(localstorageKey['200TTCStripeDBId']),
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
          this.spinner.hide();
        } else {
          this.paidFlag = 'false';
          this.reuseUrl = res.sessionId;
          this.spinner.hide();
        }
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
  }
}
