import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { s3Bucket } from '../enum/s3Bucket';

@Component({
  selector: 'app-yoga-gallery',
  standalone: true,
  imports: [],
  templateUrl: './yoga-gallery.component.html',
  styleUrl: './yoga-gallery.component.css',
})
export class YogaGalleryComponent {
  s3bucket = s3Bucket;
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }
}
