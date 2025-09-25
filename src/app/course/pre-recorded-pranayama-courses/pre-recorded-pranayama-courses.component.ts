import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { s3Bucket } from '../../enum/s3Bucket';
import { routeEnum } from '../../enum/routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-recorded-pranayama-courses',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './pre-recorded-pranayama-courses.component.html',
  styleUrl: './pre-recorded-pranayama-courses.component.css',
})
export class PreRecordedPranayamaCoursesComponent {
  s3Bucket = s3Bucket;
  routEnum = routeEnum;
  constructor(private router: Router) {}
  goToLink(pageLink: string) {
    this.router.navigate([pageLink]);
  }
}
