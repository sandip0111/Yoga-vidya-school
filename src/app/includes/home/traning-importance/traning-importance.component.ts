import { Component, OnInit } from '@angular/core';
import { s3Bucket, youtubeLink } from '../../../enum/s3Bucket';

@Component({
  selector: 'app-traning-importance',
  standalone: true,
  templateUrl: './traning-importance.component.html',
  styleUrls: ['./traning-importance.component.css']
})
export class TraningImportanceComponent implements OnInit {
  s3Bucket = s3Bucket;
  youtubeLink = youtubeLink;
  constructor() { }

  ngOnInit() {
  }

}
