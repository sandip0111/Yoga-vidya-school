import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  items: item[] = [
    {
      title: 'Video Count',
      icon: 'achieve1.png',
      count: 290
    },
    {
      title: 'Subscriber Count',
      icon: 'achieve2.png',
      count: 758000
    },
    {
      title: 'View Count',
      icon: 'achieve3.png',
      count: 48263269
    },
    {
      title: 'Years On Youtube',
      icon: 'achieve4.png',
      count: 10
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

interface item{
  title: string;
  icon: string;
  count: number;
}
