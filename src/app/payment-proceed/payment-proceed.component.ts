import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { WebapiService } from '../webapi.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { SearchCountryField } from 'ngx-intl-tel-input';
import { CountryISO } from 'ngx-intl-tel-input';


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
  submitted: boolean = false;
  price: any;
  paymentHandler: any = null;
  CountryISO = CountryISO;
  searchFields = [SearchCountryField.Name, SearchCountryField.DialCode, SearchCountryField.Iso2];

  constructor(private fb: FormBuilder, private cartService: CartService, private webapiService: WebapiService,  private spinner: NgxSpinnerService) {
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
    this.price = this.cartService.getTotalAmount(selected);
    this.paymentForm.patchValue({ price: this.price });
  }

  onSubmit(): void {
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
}
