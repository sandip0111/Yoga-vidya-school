export class checkoutModel {
  name: string;
  email: string;
  phoneNumber: PhoneNumberData;
  package: string;
  currency: string;
  address: string;
  code: string;
  constructor() {
    this.name = '';
    this.email = '';
    this.phoneNumber = {
      number: '',
      internationalNumber: '',
      nationalNumber: '',
      e164Number: '',
      countryCode: '',
      dialCode: '',
    };
    this.package = '';
    this.currency = '';
    this.address = '';
    this.code = '';
  }
}
export interface PhoneNumberData {
  number: string;
  internationalNumber: string;
  nationalNumber: string;
  e164Number: string;
  countryCode: string;
  dialCode: string;
}
export interface getCouponCodeModel {
  slug: string;
  email: string;
}
export interface SignupDataModel {
  name: string;
  email: string;
  phoneNumber: string;
  package: string;
  price: number;
  currency: string;
  courseStartDate: string;
  courseTimeDuration: string;
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
  courseTitle?: string;
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
