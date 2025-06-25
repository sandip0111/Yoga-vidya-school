export class onLineVideoModel {
  sortBy: string;
  title: string;
  updateId: string;
  url: string;
  isShow: boolean = false;
  isVideoShown: boolean = false;
  dayNumber: number = 0;
  questions: string[] = [];
  constructor() {
    this.sortBy = '';
    this.title = '';
    this.updateId = '';
    this.url = '';
  }
}
