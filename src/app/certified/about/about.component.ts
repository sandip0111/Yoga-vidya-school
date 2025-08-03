import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { aboutContentModel } from '../../models/rishikesh';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @Input() aboutContent: aboutContentModel = new aboutContentModel('', '', '', '');
  constructor() {
   
    
  }

}
