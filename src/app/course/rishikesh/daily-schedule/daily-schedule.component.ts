import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routeEnum } from '../../../enum/routes';

@Component({
  selector: 'app-daily-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daily-schedule.component.html',
  styleUrls: ['./daily-schedule.component.css'],
})
export class DailyScheduleComponent implements OnInit {
  @Input() data: any;
  schedule: any;
  title: any;
  slug: any;
  routeEnum = routeEnum;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;
  }
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.schedule = changes['data'].currentValue?.schedule;
    this.title = changes['data'].currentValue?.title;
  }
  goToPaymentPage() {
    this.router.navigate([`/checkout/${this.slug}`]);
  }
}
