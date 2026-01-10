import { Component } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';
import { Router } from '@angular/router';
import { routeEnum } from '../../../enum/routes';

@Component({
  selector: 'app-bali-100-hour',
  standalone: true,
  imports: [],
  templateUrl: './bali-100-hour.component.html',
  styleUrl: './bali-100-hour.component.css',
})
export class Bali100HourComponent {
  s3Bucket = s3Bucket;
  routeEnum = routeEnum;
  constructor(private router: Router) {}

  registerClick(slug: string, month?: string) {
    this.router.navigate(['checkout', slug]);
  }
}
