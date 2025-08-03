import { Component, Input } from '@angular/core';
import { routeEnum } from '../../enum/routes';

@Component({
  selector: 'app-ready',
  standalone: true,
  imports: [],
  templateUrl: './ready.component.html',
  styleUrl: './ready.component.css',
})
export class ReadyComponent {
  @Input() slug: string = '';
  routeEnum = routeEnum;
}
