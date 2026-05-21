import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';

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
      icon: s3Bucket.achive,
      count: 290
    },
    {
      title: 'Subscriber Count',
      icon: s3Bucket.achive,
      count: 758000
    },
    {
      title: 'View Count',
      icon: s3Bucket.achive,
      count: 48263269
    },
    {
      title: 'Years On Youtube',
      icon: s3Bucket.achive,
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
