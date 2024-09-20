import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-course-modal',
  standalone: false,
  templateUrl: './course-modal.component.html',
  styleUrl: './course-modal.component.css'
})
export class CourseModalComponent {
redirectToBooKNow(url: string) {
    window.location.href = url;
}
  items = [
    { title: '200 Hours YTTC Rishikesh', subtitle: '(Duration: 24 Days)', price: '@$1300 USD', priceDescription:'(Single Occupancy)', btnURL:'https://www.yogavidyaschool.com/200-hours-yoga-teacher-training-in-rishikesh' },
    { title: '300 Hours YTTC Rishikesh', subtitle: '(Duration: 27 Days)', price: '@$1600 USD',  priceDescription:'(Single Occupancy)', btnURL:'https://www.yogavidyaschool.com/300-hours-yoga-teacher-training-in-rishikesh'  },
    { title: '300 Hours YTTC Bali', subtitle: '(Duration: 27 Days)', price: '@$3800 USD',  priceDescription:'(Single Occupancy)', btnURL:'https://www.yogavidyaschool.com/300-hour-yoga-teacher-training-in-bali'  }
   
  ];
  constructor(public activeModal: NgbActiveModal){
    
  }
}
