import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { aboutContentModel } from '../../models/rishikesh';
import { routeEnum } from '../../enum/routes';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  currentRoute: string = '';
  @Input() aboutContent: aboutContentModel = new aboutContentModel('', '', '', '');
  routeEnum = routeEnum;
  constructor(private route: ActivatedRoute) {
    this.currentRoute = this.route.snapshot.url.join('/');
  }

}
