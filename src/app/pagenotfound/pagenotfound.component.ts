import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-pagenotfound',
  standalone: true,
  imports: [],
  templateUrl: './pagenotfound.component.html',
  styleUrl: './pagenotfound.component.css'
})
export class PagenotfoundComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setNoIndex('Page Not Found');
  }
}
