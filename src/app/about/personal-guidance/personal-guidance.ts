import { Component } from '@angular/core';
import { s3Bucket } from '../../enum/s3Bucket';
import { BannerComponent } from '../../course/banner/banner.component';
import { WebapiService } from '../../webapi.service';
import { routeEnum } from '../../enum/routes';
import { feesInfoDto } from '../../course/rishikesh/pricing/pricing.component';
import { CommonModule } from '@angular/common';
import { PersonalGuidanceType } from '../../enum/course';

@Component({
  selector: 'app-personal-guidance',
  imports: [CommonModule, BannerComponent],
  templateUrl: './personal-guidance.html',
  styleUrl: './personal-guidance.css',
  standalone: true,
})
export class PersonalGuidance {
  s3Bucket = s3Bucket;
  feesData1: feesInfoDto = {
    title: '',
    data: [],
  };
  feesData2: feesInfoDto = {
    title: '',
    data: [],
  };
  feesData3: feesInfoDto = {
    title: '',
    data: [],
  };
  redirectLink1 = `/checkout/${routeEnum.pg}?type=1`;
  redirectLink2 = `/checkout/${routeEnum.pg}?type=2`;
  redirectLink3 = `/checkout/${routeEnum.pg}?type=3`;
  constructor(private webapiService: WebapiService) {}
  ngOnInit(): void {
    this.getCourseBySlug(routeEnum.pg);
  }
  getCourseBySlug(slug: string) {
    let data = {
      slug: slug,
    };
    this.webapiService.getCourseById(data).subscribe({
      next: (res: any) => {
        if (res.data.length > 0) {
          this.feesData1 = res.data[0].feeInfo.find(
            (f: feesInfoDto) => f.title == PersonalGuidanceType.pg1,
          );
          this.feesData2 = res.data[0].feeInfo.find(
            (f: feesInfoDto) => f.title == PersonalGuidanceType.pg2,
          );
          this.feesData3 = res.data[0].feeInfo.find(
            (f: feesInfoDto) => f.title == PersonalGuidanceType.pg3,
          );
        }
      },
      error: () => {},
    });
  }
}
