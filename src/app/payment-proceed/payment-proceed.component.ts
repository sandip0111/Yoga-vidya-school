import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService, CartItem } from '../cart.service';
import { WebapiService } from '../webapi.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { SearchCountryField } from 'ngx-intl-tel-input';
import { CountryISO } from 'ngx-intl-tel-input';
import { Router } from '@angular/router';

declare var Razorpay: any;
@Component({
  selector: 'app-payment-proceed',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, NgxIntlTelInputModule],
  templateUrl: './payment-proceed.component.html',
  styleUrl: './payment-proceed.component.css'
})
export class PaymentProceedComponent implements OnInit {
  paymentForm: FormGroup;
  currency: any;
  courses: CartItem[] = [];
  availableCourses: CartItem[] = [];
  courseMentor = [
        {
          id: 1,
          name: "Acharya Prashant Jakhmola",
          image: "image_1673271873934.jfif",
          intro: "Yoga Sadhana",
          time:"6:00 AM - 7:00 AM (IST)",
          price:"Rs. 2999/USD 70",
          priceInIndian: 2999,
          priceInUSD: 70
        },
        {
          id: 2,
          name: "Anuj",         
          image: "image_1695634116777.jpeg",
          intro: "Hatha Yoga",
          time:"5:00 AM - 6:00 AM (IST)",
          price:"Rs. 1999/USD 50",
          priceInIndian: 1999,
          priceInUSD:50,
        },
        
        {
          id: 3,
          name: "Taniya",          
          image: "image_1675243508012.jpg",
          intro: "Women Wellness Yoga",
          time:"7:30 AM – 8:30 AM (IST)",
          time1:"5:30 PM – 6:30 PM (IST)",
          price:"Rs. 1999/USD 40",
          priceInIndian: 1999,
          priceInUSD: 40
        },
        {
          id: 4,
          name: "Shivam Joshi",
          
          image: "image_1673271925503.jpeg",
          intro: "Iyengar/ Yoga Therapy ",
          time:"6:30 PM – 8:00 PM (IST)",
          price:"Rs. 2499/ USD 60",
          priceInIndian: 2499,
          priceInUSD: 60
        }
      ]
  submitted: boolean = false;
  price: any;
  paymentHandler: any = null;
  CountryISO = CountryISO;

  searchFields = [SearchCountryField.Name, SearchCountryField.DialCode, SearchCountryField.Iso2];

  constructor(private fb: FormBuilder, private router: Router, private cartService: CartService, private webapiService: WebapiService,  private spinner: NgxSpinnerService) {
    this.courses = this.cartService.getItems();
    this.availableCourses = this.courseMentor.map((mentor) => {
      const course: CartItem = {
        id: mentor?.id, // Ensure you extract the ID correctly from `mentor`
        title: `${mentor?.name} online yoga class`,
        shortDescription: mentor?.time + (mentor?.time1 != undefined ? (', '+ mentor?.time1) : ""),
        priceINR: mentor?.priceInIndian ?? 0,
        priceUSD: mentor?.priceInUSD ?? 0,
        quantity: 1,
        priceInfo: mentor?.price
      };
      return course;
    });

    this.paymentForm = this.fb.group({
      holderName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      currency: ['', Validators.required],
      price: [{ value: '', disabled: true }], // Read-only field
    });
  }
  phoneError: string = '';
  currencyOptions: string[] = [];
  isPhoneValid: boolean = false;

  ngOnInit(): void {
    // this.paymentForm.value.currency = this.cartService.getCurrency();
    // this.paymentForm.value.price = this.cartService.getTotalAmount(this.paymentForm.value.currency);
    // this.currency = this.paymentForm.value.currency;
    // this.price = this.paymentForm.value.price;
    this.invokeStripe();
    this.loadRazorpayScript();
  }

  onPhoneInputChange(): void {
    const control = this.paymentForm.controls['mobile'];
    this.isPhoneValid = control.valid;
  
    if (!this.isPhoneValid) {
      this.phoneError = 'Invalid phone number';
      this.currencyOptions = [];
      this.paymentForm.patchValue({ currency: '', price: ''});
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
  
    // Auto-select the first option
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
    if(selected === null || selected === undefined || selected === '')
    {
      this.paymentForm.patchValue({ currency: '', price: '' });
      return;
    }
    this.price = this.cartService.getTotalAmount(selected);
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
    this.courses = this.courses.filter(c => c.id !== course.id);
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
     
      console.log('Form Data:', this.paymentForm.getRawValue());
      this.spinner.show();
      var data = this.paymentForm.getRawValue();
      var courseList = this.cartService.getItems();
      let val = { name: data.holderName, email: data.email, phone: data.mobile.e164Number, currency: data.currency, paymentStatus: "due", price: data.price, courses: courseList}
    
      this.webapiService.checkoutStripeForLiveClasses(val).subscribe((res: any) => {
        this.spinner.hide();
        if (res.sessionId) {
          sessionStorage.setItem('onlineLiveClassesSessionId', res.sessionId)
          sessionStorage.setItem('onlineLiveClassDbPay', res.payDbId);         
          window.location.href = res.url;
        }
        else {
          alert("Session Genration failed! please try again");
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
  }

  initializePayment(id: any, email: any) {
    // this.spinner.show();
    // if (this.paymentHandler && this.paymentHandler.redirectToCheckout) {
    
   
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
        paymentStatus: 'due'
      };

      this.spinner.show();

      // Call your API to create an order ID for Razorpay
      this.webapiService.createRazorpayOrder(paymentData).subscribe((res: any) => {
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
            // After payment success
            sessionStorage.setItem('online_class_razorpay_payment_id',  response.razorpay_payment_id);
            sessionStorage.setItem('online_class_razorpay_order_id',  response.razorpay_order_id);
            sessionStorage.setItem('online_class_razorpay_signature',  response.razorpay_signature);
            sessionStorage.setItem('onlineLiveClassDbPayRazor',  res.payDbId );
            this.router.navigate(['/confirmation']);
            // const paymentResult = {
            //   razorpay_payment_id: response.razorpay_payment_id,
            //   razorpay_order_id: response.razorpay_order_id,
            //   razorpay_signature: response.razorpay_signature,
            //   payDbId: res.payDbId // optional, if needed for tracking
            // };
            // this.webapiService.verifyRazorpayPayment(paymentResult).subscribe(() => {
            //   alert('Payment Successful!');
            // }, () => {
            //   alert('Payment verification failed.');
            // });
          },
          prefill: {
            name: data.holderName,
            email: data.email,
            contact: data.mobile.e164Number
          },
          notes: {
            courses: JSON.stringify(courseList)
          },
          theme: {
            color: '#3399cc'
          }
        };

        const rzp = new Razorpay(options);
        rzp.open();
      } 
    }, err => {
      this.spinner.hide();
      
      });

    }
 }


}
