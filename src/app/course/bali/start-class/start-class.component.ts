import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { feesStructureModel } from '../../../models/rishikesh';
import { Router } from '@angular/router';
import { routeEnum } from '../../../enum/routes';

@Component({
  selector: 'app-start-class',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-class.component.html',
  styleUrls: ['./start-class.component.css'],
})
export class StartClassComponent implements OnInit {
  @Input() data: feesStructureModel = new feesStructureModel();
  @Input() slug: string = '';
  fees: feesStructureModel = new feesStructureModel();
  href: string = '/checkout';
  isOnline200ttc: boolean = false;
  routEnum = routeEnum;
  constructor( private router: Router) {}
  ngOnInit() {
    this.href = `/checkout/${this.slug}`;
    if (this.slug === '200-hours-yoga-teacher-training-online') {
      this.isOnline200ttc = true;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.fees = changes['data'].currentValue;
  }

  scrollToTop(): void {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }

  goToLink(link: string) {
    this.router.navigate([link]);
  }
}
