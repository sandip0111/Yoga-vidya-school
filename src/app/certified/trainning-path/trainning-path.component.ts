import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routeEnum } from '../../enum/routes';
import { s3Bucket } from '../../enum/s3Bucket';

@Component({
  selector: 'app-trainning-path',
  standalone: true,
  imports: [],
  templateUrl: './trainning-path.component.html',
  styleUrl: './trainning-path.component.css',
})
export class TrainningPathComponent {
  route = routeEnum;
  s3Bucket = s3Bucket;
  @Input() slug: string = '';
  constructor(private router: Router) {}
  goToLink(link: string) {
    this.router.navigate([link]);
  }
}
