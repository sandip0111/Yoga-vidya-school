import { faq } from "../includes/home/faq/faq.component";

export interface CurriculumItem {
  title: string;
  para: string;
}

export interface FeeDataItem {
  amount: number;
  currency: string;
}

export interface FeeInfoItem {
  title: string;
  data: FeeDataItem[];
  hidden?: boolean;
}

export interface ScheduleItem {
  time: string;
  activity: string;
}

export interface VideoInfoItem {
  title?: string;
  url?: string;
  description?: string;
}

export class baliCourseModel {
  _id: string;
  slug: string;
  content: faq[];
  coursetitle: string;
  created: string;
  curriculumInfo: CurriculumItem[];
  feeInfo: FeeInfoItem[];
  scheduleInfo: ScheduleItem[];
  videoInfo: VideoInfoItem[];
  isActive: boolean;
  constructor() {
    this._id = '';
    this.slug = '';
    this.content = [];
    this.coursetitle = '';
    this.created = '';
    this.curriculumInfo = [];
    this.feeInfo = [];
    this.scheduleInfo = [];
    this.videoInfo = [];
    this.isActive = false;
  }
}
