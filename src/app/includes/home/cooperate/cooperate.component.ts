import { Component, OnInit } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';

@Component({
  selector: 'app-cooperate',
  standalone: true,
  templateUrl: './cooperate.component.html',
  styleUrls: ['./cooperate.component.css']
})
export class CooperateComponent implements OnInit {
  s3Bucket = s3Bucket;
  constructor() { }

  ngOnInit() {
  }

}
