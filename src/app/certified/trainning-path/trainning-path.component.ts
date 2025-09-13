import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routeEnum } from '../../enum/routes';
import { s3Bucket } from '../../enum/s3Bucket';
import { PixelTrackingService } from '../../services/pixel-tracking.service';

@Component({
  selector: 'app-trainning-path',
  standalone: true,
  imports: [],
  templateUrl: './trainning-path.component.html',
  styleUrl: './trainning-path.component.css',
})
export class TrainningPathComponent {
  route = routeEnum;
  s3Bucket = s3Bucket;
  @Input() slug: string = '';

  constructor(
    private router: Router,
    private pixelTracking: PixelTrackingService
  ) {}

  goToLink(link: string) {
    // Track course selection
    this.trackCourseSelection(link);
    this.router.navigate([link]);
  }

  private trackCourseSelection(link: string) {
    const courseMapping: { [key: string]: { name: string, type: string, value: number } } = {
      [routeEnum.rishikesh100]: {
        name: '100-Hour Yoga Teacher Training',
        type: '100_hour_ttc',
        value: 800
      },
      [routeEnum.rishkesh200]: {
        name: '200-Hour Yoga Teacher Training',
        type: '200_hour_ttc',
        value: 1200
      },
      [routeEnum.rishikesh300]: {
        name: '300-Hour Yoga Teacher Training',
        type: '300_hour_ttc',
        value: 1500
      },
      [routeEnum.bali200]: {
        name: '200-Hour Yoga Teacher Training Bali',
        type: '200_hour_ttc_bali',
        value: 1400
      }
    };

    const courseInfo = courseMapping[link];
    if (courseInfo) {
      this.pixelTracking.trackCourseSelection(link, courseInfo.name, courseInfo.type);
      this.pixelTracking.trackAddToCart(link, courseInfo.name, courseInfo.value);
      this.pixelTracking.trackViewContent(courseInfo.name, 'course_details_click');
    }
  }
}
