import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BannerComponent } from '../course/banner/banner.component';
import { s3Bucket } from '../enum/s3Bucket';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  s3Bucket = s3Bucket;
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }
}
