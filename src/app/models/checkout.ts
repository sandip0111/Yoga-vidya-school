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
