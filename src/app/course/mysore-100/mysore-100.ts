import { Component } from '@angular/core';
import { s3Bucket } from '../../enum/s3Bucket';
import { BannerComponent } from '../banner/banner.component';
import { CommonModule } from '@angular/common';
import { IncludesComponent } from '../bali/includes/includes.component';
import { BonusComponent } from '../../certified/bonus/bonus.component';
import { ChooseUsComponent } from '../bali/choose-us/choose-us.component';
import { MentorsComponent } from '../../includes/home/mentors/mentors.component';
import { TestimonialsComponent } from '../../includes/home/testimonials/testimonials.component';

@Component({
  selector: 'app-mysore-100',
  imports: [
    BannerComponent,
    CommonModule,
    IncludesComponent,
    BonusComponent,
    ChooseUsComponent,
    MentorsComponent,
    TestimonialsComponent
  ],
  templateUrl: './mysore-100.html',
  styleUrl: './mysore-100.css',
})
export class Mysore100 {
  s3Bucket = s3Bucket;
}
