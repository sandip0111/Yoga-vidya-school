import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routeEnum } from '../../enum/routes';

@Component({
  selector: 'app-includes',
  standalone: true,
  imports: [],
  templateUrl: './includes.component.html',
  styleUrl: './includes.component.css'
})
export class IncludesComponent {
  slug: string = '';
  routeEnum = routeEnum;
  constructor(private _activatedRoute: ActivatedRoute) {
    this.slug = this._activatedRoute.snapshot.routeConfig?.path || '';
  }
}
