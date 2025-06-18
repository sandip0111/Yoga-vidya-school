import { SafeHtml } from '@angular/platform-browser';

export class feesStructureModel {
  amount: string;
  currency: string;
  title: string;
  videoId: string;
  constructor() {
    this.amount = '';
    this.currency = '';
    this.title = '';
    this.videoId = '';
  }
}
export interface getSlugDataModel {
  slug: string;
}

export class aboutContentModel {
  image: string;
  title: string;
  secondTitle: string;
  desc: SafeHtml;
  subTitle: string | null;
  subTitle1: string | null;
  constructor(
    img: string,
    title: string,
    secTitle: string,
    desc: SafeHtml,
    subtitle: string | null = null,
    subtitle1: string | null = null
  ) {
    this.image = img;
    this.title = title;
    this.secondTitle = secTitle;
    this.desc = desc;
    this.subTitle = subtitle;
    this.subTitle1 = subtitle1;
  }
}
