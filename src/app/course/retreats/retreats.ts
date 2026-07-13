import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { s3Bucket } from '../../enum/s3Bucket';

@Component({
  selector: 'app-retreats',
  imports: [BannerComponent],
  templateUrl: './retreats.html',
  styleUrl: './retreats.css',
  standalone: true,
})
export class Retreats {
  s3Bucket = s3Bucket;
}
