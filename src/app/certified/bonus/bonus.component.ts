import { Component } from '@angular/core';
import { routeEnum } from '../../enum/routes';

@Component({
  selector: 'app-bonus',
  standalone: true,
  imports: [],
  templateUrl: './bonus.component.html',
  styleUrl: './bonus.component.css',
})
export class BonusComponent {
  routeEnum = routeEnum;
  bDtox = `/${routeEnum.bDtox}`;
  pranayama = `/${routeEnum.pranOnlinePranaArambh}`;
}
