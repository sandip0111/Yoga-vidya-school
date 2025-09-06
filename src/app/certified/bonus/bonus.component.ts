import { Component } from '@angular/core';
import { routeEnum } from '../../enum/routes';
import { PixelTrackingService } from '../../services/pixel-tracking.service';

@Component({
  selector: 'app-bonus',
  standalone: true,
  imports: [],
  templateUrl: './bonus.component.html',
  styleUrl: './bonus.component.css',
})
export class BonusComponent {
  routeEnum = routeEnum;
  bDtox = `/${routeEnum.bDtox}`;
  pranayama = `/${routeEnum.pranOnlinePranaArambh}`;

  constructor(private pixelTracking: PixelTrackingService) {}

  onBonusCourseClick(courseName: string, courseUrl: string) {
    this.pixelTracking.trackBonusCourseClick(courseName, courseUrl);
    this.pixelTracking.trackViewContent('bonus_course', courseName);
  }
}
