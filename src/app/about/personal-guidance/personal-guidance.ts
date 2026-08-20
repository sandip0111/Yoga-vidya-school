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
  constructor(
    private webapiService: WebapiService
  ) {}
  ngOnInit(): void {
    
    this.getCourseBySlug(routeEnum.pg);
  }
  getCourseBySlug(slug: string) {
    let data = {
      slug: slug,
    };
    this.webapiService.getCourseById(data).subscribe({
      next: (res: any) => {
        if (res.data && res.data.length > 0) {
          const course = res.data[0];
          this.feesData1 = course.feeInfo?.find(
            (f: feesInfoDto) => f.title == PersonalGuidanceType.pg1,
          );
          this.feesData2 = course.feeInfo?.find(
            (f: feesInfoDto) => f.title == PersonalGuidanceType.pg2,
          );
          this.feesData3 = course.feeInfo?.find(
            (f: feesInfoDto) => f.title == PersonalGuidanceType.pg3,
          );

          // Update SEO with database values if specific, or use dedicated page fallbacks
          const metaTitle = course.metaTitle && !course.metaTitle.includes('Rishikesh & Bali')
            ? course.metaTitle
            : 'One-on-One Personal Guidance & Mentorship | Yoga Vidya School';
          const metaDesc = course.metaDescription && !course.metaDescription.includes('100, 200 & 300 Hour')
            ? course.metaDescription
            : 'Receive personalized 1-on-1 yoga guidance, pranayama mentorship, and spiritual consultation tailored specifically for your individual practice with Acharya Prashant Jakhmola.';
          const metaKeys = course.metaKeyword || 'Personal Yoga Guidance, 1 on 1 Yoga Mentorship, Spiritual Consultation, Acharya Prashant Mentorship';

          
        }
      },
      error: () => {},
    });
  }
}
