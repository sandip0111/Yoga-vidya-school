import { CommonModule } from '@angular/common';
import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-daily-schedule',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './daily-schedule.component.html',
  styleUrls: ['./daily-schedule.component.css']
})
export class DailyScheduleComponent implements OnInit {
  @Input() data:any;
  schedule:any;
  title:any;
  slug:any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;
  }


  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges):void {
    this.schedule = changes['data'].currentValue?.schedule;
    this.title = changes['data'].currentValue?.title;
    //  console.log(changes['data'].currentValue);

  }

}
