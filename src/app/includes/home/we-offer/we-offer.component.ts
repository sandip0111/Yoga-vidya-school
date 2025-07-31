import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';
import { routeEnum } from '../../../enum/routes';

@Component({
  selector: 'app-we-offer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './we-offer.component.html',
  styleUrls: ['./we-offer.component.css'],
})
export class WeOfferComponent implements OnInit {
  s3Bucket = s3Bucket;
  offers: offer[] = [
    {
      boxHeading: 'In-Person',
      boxBody: [
        {
          titleBox: 'Yoga Teacher Training - in Rishikhes',
          paraBox: `Yoga Alliance Certified 100, 200 and 300 HRS`,
          dateTimeBox: 'Next Batch Starts: 3rd October 2025',
          imgBox: s3Bucket.offer1,
          durationBox: '28 days',
          url: `/${routeEnum.rishkesh200}`,
        },
        {
          titleBox: 'Yoga Teacher Training - in Bali',
          paraBox: 'Yoga Alliance Certified 100, 200, 500 HRS',
          paraBox2: 'Yoga Alliance Certified 300 HRS',
          dateTimeBox: 'Next Batch Starts: November 2025',
          dateTimeBox2: 'Next Batch Starts: December 2025',
          imgBox: s3Bucket.offer2,
          durationBox: '28 days',
          durationBox2: '28 days',
          url: `/${routeEnum.yogaRetreat}`,
        },
      ],
    },
    {
      boxHeading: 'Online Offerings',
      boxBody: [
        {
          titleBox: 'Guided Virtual Session',
          paraBox: `Daily Yoga Classes`,
          dateTimeBox: 'First Monday of Every Months',
          imgBox: s3Bucket.offer3,
          durationBox: 'One Month for Classes',
          url: `/${routeEnum['200TTC']}`,
        },
        {
          titleBox: 'Prerecorded courses',
          paraBox:
            'Exclusively designed by Prashant J Yoga, Breath Detox, Prana Arambha Courses on Alignments and Yoga Philosophy',
          dateTimeBox: 'Starts Anytime',
          imgBox: s3Bucket.offer4,
          durationBox: '1 Week to 30 Days',
          url: `/${routeEnum.pranOnlinePranaArambh}`,
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit() {}
}

interface offer {
  boxHeading: string;
  boxBody: subOffer[];
}
interface subOffer {
  titleBox: string;
  paraBox: string;
  paraBox2?: string;
  dateTimeBox: string;
  dateTimeBox2?: string;
  imgBox: s3Bucket;
  durationBox: string;
  durationBox2?: string;
  url: string;
}
