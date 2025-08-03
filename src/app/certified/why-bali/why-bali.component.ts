import { Component } from '@angular/core';
import { s3Bucket } from '../../enum/s3Bucket';

@Component({
  selector: 'app-why-bali',
  standalone: true,
  imports: [],
  templateUrl: './why-bali.component.html',
  styleUrl: './why-bali.component.css'
})
export class WhyBaliComponent {
 
   s3Bucket = s3Bucket;
}
