import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { WebapiService } from '../webapi.service';
import { Router, ActivatedRoute, RouteReuseStrategy } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { paymentkey } from '../enum/payment';

@Component({
  selector: 'app-book-now',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-now.component.html',
  styleUrl: './book-now.component.css',
})
export class BookNowComponent {
  checkData: any = {};
  oldStudent: boolean = true;
  slug: any;
  courseList: any;
  paymentHandler: any = null;
  constructor(
    private title: Title,
    private webapiService: WebapiService,
    private _activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private routeReuseStrategy: RouteReuseStrategy,
    @Inject(DOCUMENT) private _document: Document,
    private _renderer2: Renderer2
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.invokeStripe();
      this.title.setTitle('Book Now');
      const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
      const link = this._document.querySelector('link[rel="canonical"]');
      this._renderer2.setAttribute(link, 'href', canonicalUrl);
    }, 1000);
  }

  invokeStripe() {
    if (typeof window !== 'undefined') {
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
  }

  checkoutData(data: any) {
    if (data.name && data.email && data.price && data.currency) {
      // if (this.paymentHandler && this.paymentHandler.redirectToCheckout) {
      this.spinner.show();
      this.webapiService.stripeWithoutProduct(data).subscribe((res: any) => {
        // console.log(res, '--------------');
        this.spinner.hide();
        if (res.sessionId) {
          sessionStorage.setItem('onlinesession', res.sessionId);
          sessionStorage.setItem('onlinedbPay', res.payDbId);
          window.location.href = res.url;

          // this.paymentHandler.redirectToCheckout({
          //   sessionId: res.sessionId
          // })
        } else {
          alert('Session Genration failed! please try again');
          this.spinner.hide();
        }
      });
      // }
      // else {
      //   this.invokeStripe();
      // }
    } else {
      alert('All feilds are mandatory!');
    }
  }

  validateNumber(e: any) {
    if (e.target.value < 1) {
      alert('Please enter a valid number');
      this.checkData.price = 1;
      e.target.value = 1;
    }
  }
}
