export class checkoutModel {
  name: string;
  email: string;
  phoneNumber: PhoneNumberData;
  package: any;
  currency: string;
  address: string;
  code: string;
  constructor() {
    this.name = '';
    this.email = '';
    this.phoneNumber = new PhoneNumberData();
    this.package = '';
    this.currency = '';
    this.address = '';
    this.code = '';
  }
}
export class PhoneNumberData {
  number: string;
  internationalNumber: string;
  nationalNumber: string;
  e164Number: string;
  countryCode: string;
  dialCode: string;
  constructor() {
    this.number = '';
    this.internationalNumber = '';
    this.nationalNumber = '';
    this.e164Number = '';
    this.countryCode = '';
    this.dialCode = '';
  }
}
export interface getCouponCodeModel {
  slug: string;
  email: string;
}
export interface SignupDataModel {
  name: string;
  email: string;
  phoneNumber: string;
  package?: string;
  price: number;
  currency: string;
  courseStartDate?: string;
  courseTimeDuration?: string;
  id?: string;
  room?: string;
  hour?: number;
}
export interface swaraDataModel {
  city: string;
  email: string;
  name: string;
  password: string;
  phone: string;
  timeSlot: string;
  webinar: string;
  isWebsite: boolean;
  paymentType?: string;
}
export interface swaraRazorModel {
  currency: string;
  custEmail: string;
  price: number;
  userId: string;
}
export interface swaraStripeModel {
  custEmail: string;
  priceId: string;
  userId: string;
}
export interface razorPayModel {
  amount: number;
  orderId: string;
  payDbId: string;
  razorpayKey: string;
}
export interface razorPaymentResultModel {
  razorpayPaymentId: string | null;
  razorpayOrderId: string | null;
  razorpaySignature: string | null;
  payDbId: string | null;
  password?: string;
  installment?: string;
  dueAmnt?: number;
}
export interface swaraPaymentResultModel {
  amount: string;
  payDbId: string;
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  userId: string;
}
export interface stripePayModel {
  sessionId: string;
  payDbId: string;
  url: string;
}
export interface razorPayReturnModel {
  amount: number;
  currency: string;
}
export interface dropdownModel {
  name: string;
  value: number;
}
