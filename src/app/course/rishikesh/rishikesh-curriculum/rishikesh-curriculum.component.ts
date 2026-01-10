import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { s3Bucket } from '../../../enum/s3Bucket';

@Component({
  selector: 'app-rishikesh-curriculum',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rishikesh-curriculum.component.html',
  styleUrls: ['./rishikesh-curriculum.component.css'],
})
export class RishikeshCurriculumComponent implements OnInit {
  @Input() data: any;
  curriculum: any;
  selectedIndex: number = -1;
  slug: any = '';
  title: any = '';
  isItPranicRoute = false;
  pranicDate?: string;
  pranicDuration?: string;
  s3Bucket = s3Bucket;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;
    if (this.slug == 'pranic-purification') {
      this.isItPranicRoute = true;
      const date = new Date('2025-07-24');
      const day = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'long' });
      this.pranicDate = `${day} ${month}`;
      this.pranicDuration = '7PM to 8PM (IST)';
      if (isPlatformBrowser(this.platformId)) {
        sessionStorage.setItem('pranicDate', date.toISOString());
        sessionStorage.setItem('pranicDuration', this.pranicDuration);
      }
    }
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.slug != 'pranic-purification') {
      if (changes['data']?.currentValue) {
        this.curriculum = changes['data']?.currentValue.curr;
        this.title = changes['data']?.currentValue.title;
      }
    }

    //  console.log(changes['data'].currentValue);
  }
  openCloseTab(index: number) {
    if (this.selectedIndex === index) {
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = index;
    }
  }

  registerClick() {
    if (this.slug != 'pranic-purification') {
      window.open('https://www.yogavidyaschool.com/book-now', '_blank');
    } else {
      this.router.navigate(['checkout', this.slug]);
      window.scrollTo(0, 0);
    }
  }
}
