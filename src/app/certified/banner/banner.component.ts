import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Input() imgSlug?: string ;
  @Input() bannerTitle?: string;
  @Input() bannerSubtitle?: string;

}
