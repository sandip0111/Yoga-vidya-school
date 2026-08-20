import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

  constructor(private router: Router, private seoService: SeoService) {}

  ngOnInit(): void {
    
  }
}
