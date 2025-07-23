import { Component, OnInit } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  s3Bucket = s3Bucket;
  constructor() {}

  ngOnInit() {}
}
