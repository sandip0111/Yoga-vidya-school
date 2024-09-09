import { Component, OnInit } from '@angular/core';
import { StartClassComponent } from '../bali/start-class/start-class.component';

@Component({
  selector: 'app-course-banner',
  standalone:true,
  imports:[StartClassComponent],
  templateUrl: './course-banner.component.html',
  styleUrls: ['./course-banner.component.css']
})
export class CourseBannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
