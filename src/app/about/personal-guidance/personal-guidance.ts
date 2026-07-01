import { Component } from '@angular/core';
import { s3Bucket } from '../../enum/s3Bucket';
import { BannerComponent } from '../../course/banner/banner.component';

@Component({
  selector: 'app-personal-guidance',
  imports: [BannerComponent],
  templateUrl: './personal-guidance.html',
  styleUrl: './personal-guidance.css',
  standalone: true,
})
export class PersonalGuidance {
  s3Bucket = s3Bucket;
}
