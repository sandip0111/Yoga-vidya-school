import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @Input() data:any
 slug:any;
 accData:any;
 fees:any
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges):void {
    this.fees = changes['data'].currentValue;
   if(this.slug == '200-hour-yoga-teacher-training-scholarship-in-rishikesh'){
    if(this.fees){
      this.fees.amount =500;
      this.fees.currency = 'USD';
    }
   }
   if(this.slug == '300-hour-yoga-teacher-training-scholarship-in-rishikesh'){
    if(this.fees){
      this.fees.amount = 600;
      this.fees.currency = 'USD';
    }
   }
  }

}
