import { Component, OnInit } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  s3Bucket = s3Bucket;
  constructor() { }

  ngOnInit() {
  }

}
