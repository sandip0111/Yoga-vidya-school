import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routeEnum } from '../../../enum/routes';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  @Input() data: faq[] = [];
  openIndex: number | null = null;
  faqs: faq[] = [];
  slug: string | undefined = '';
  isPranicPage: boolean = false;
  is300BaliPage: boolean = false;
  routeEnum = routeEnum;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;
  }

  toggleDescription(index: number) {
    if (this.openIndex === index) {
      this.openIndex = null;
    } else {
      this.openIndex = index;
    }
  }
  ngOnInit() {
    if (this.slug == routeEnum.pranicPurification) {
      this.isPranicPage = true;
    }
    if (this.slug == routeEnum['300HourTTCBali']) {
      this.is300BaliPage = true;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'].currentValue?.length > 0) {
      this.faqs = changes['data'].currentValue;
    } else {
      this.faqs = [];
    }
    if (this.faqs.length != 0) {
      if (this.slug == routeEnum.pranicPurification) {
        this.faqs = this.faqs.filter(
          (i) => i.title != 'How to book this course?'
        );
      }
    }
  }
  goToPaymentPage() {
    this.router.navigate([routeEnum.bDtox, routeEnum.stRegister]);
  }
}

export interface faq {
  title: string;
  para: string;
}
