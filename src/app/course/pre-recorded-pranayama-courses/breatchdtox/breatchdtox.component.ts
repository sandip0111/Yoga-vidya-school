import { Component } from '@angular/core';
import { BannerComponent } from '../../banner/banner.component';
import { s3Bucket } from '../../../enum/s3Bucket';
import { RegistrationFormComponent } from '../../../student/registration-form/registration-form.component';
import { BenifitsComponent } from '../../../includes/home/benifits/benifits.component';

@Component({
  selector: 'app-breatchdtox',
  standalone: true,
  imports: [BannerComponent, RegistrationFormComponent, BenifitsComponent],
  templateUrl: './breatchdtox.component.html',
  styleUrl: './breatchdtox.component.css',
})
export class BreatchdtoxComponent {
  s3Bucket = s3Bucket;
}
