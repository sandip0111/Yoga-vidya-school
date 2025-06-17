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
