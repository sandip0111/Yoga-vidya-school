import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benifits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benifits.component.html',
  styleUrls: ['./benifits.component.css']
})
export class BenifitsComponent implements OnInit {
  items: item[] = [
    {
      title: 'Year of Experience',
      icon: 'benifit1.png',
      count: '15'
    },
    {
      title: 'Number of Center',
      icon: 'benifit2.png',
      count: '10'
    },
    {
      title: 'Certified Students',
      icon: 'benifit3.png',
      count: '8000 +'
    },
    {
      title: 'Yoga Trainers',
      icon: 'benifit4.png',
      count: '20'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

interface item{
  title: string;
  icon: string;
  count: string;
}
