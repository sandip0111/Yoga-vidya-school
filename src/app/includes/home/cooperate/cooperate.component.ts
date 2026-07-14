import { Component, OnInit } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';
import { Router } from '@angular/router';
import { routeEnum } from '../../../enum/routes';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-cooperate',
  standalone: true,
  templateUrl: './cooperate.component.html',
  styleUrls: ['./cooperate.component.css'],
})
export class CooperateComponent implements OnInit {
  s3Bucket = s3Bucket;
  imageurl: string = environment.imageUrl;
  constructor(private router: Router) {}

  ngOnInit() {
    if (typeof document === 'undefined') {
      return;
    }

    document.getElementById('destination-bg2')?.style.setProperty('--bg-image', `url('${s3Bucket.rishikeshHome}')`);
    document.getElementById('destination-bg1')?.style.setProperty('--bg-bali', `url('${s3Bucket.baliHome}')`);
  }
  goToPage() {
    this.router.navigate([routeEnum.prashantjPage]);
  }
}
