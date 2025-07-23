import { Component, OnInit } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';

@Component({
  selector: 'app-banner',
  standalone: true,
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  s3Bucket = s3Bucket;
  constructor() { }

  ngOnInit() {
  }

}
