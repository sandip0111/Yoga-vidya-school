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
          titleBox: 'Yoga Teacher Training',
          paraBox: `Yoga Alliance Certified  100, 200, 300 and 500 Hr. Yoga TTCs`,
          dateTimeBox: 'Starts on 3rd of Every Month',
          imgBox: s3Bucket.offer1,
          durationBox: '14 Days to 30 Days ',
          url: `/${routeEnum.rishkesh200}`,
        },
        // {
        //   titleBox: 'Yoga Retreats and Wellness Stays ',
        //   paraBox:
        //     'Private and Group Retreats covering Asanas, Meditation, Pranayama, Ayurveda Guided Local Excursions ',
        //   dateTimeBox: 'Every Monday',
        //   imgBox: s3Bucket.offer2,
        //   durationBox: '3 Days to 15 Days ',
        //   url: `/${routeEnum.yogaRetreat}`,
        // },
      ],
    },
    {
      boxHeading: 'Online Offerings',
      boxBody: [
        {
          titleBox: 'Guided Virtual Session',
          paraBox: `Daily Yoga Classes, Yoga Workshops and 200 Hour Yoga Teacher Training Private Classes also Available`,
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
  dateTimeBox: string;
  imgBox: s3Bucket;
  durationBox: string;
  url: string;
}
