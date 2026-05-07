import { Component, OnInit } from '@angular/core';
import { s3Bucket } from '../../../enum/s3Bucket';
import { Router } from '@angular/router';
import { routeEnum } from '../../../enum/routes';

@Component({
  selector: 'app-cooperate',
  standalone: true,
  templateUrl: './cooperate.component.html',
  styleUrls: ['./cooperate.component.css'],
})
export class CooperateComponent implements OnInit {
  s3Bucket = s3Bucket;
  constructor(private router: Router) {}

  ngOnInit() {
    document.getElementById('destination-bg2')?.style.setProperty('--bg-image', `url('${s3Bucket.rishikeshHome}')`);
  }
  goToPage() {
    this.router.navigate([routeEnum.prashantjPage]);
  }
}
