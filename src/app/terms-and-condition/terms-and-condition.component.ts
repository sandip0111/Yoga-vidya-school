import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-terms-and-condition',
  standalone: true,
  imports: [],
  templateUrl: './terms-and-condition.component.html',
  styleUrl: './terms-and-condition.component.css'
})
export class TermsAndConditionComponent {

  constructor(private router: Router, private seoService: SeoService) {}

  ngOnInit(): void {
    
  }
}
