import { Component, OnInit } from '@angular/core';
import { contact, contactLink } from '../../enum/details';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  contactDetailsEnum = contact;
  contactDetailLinkEnum = contactLink;
  constructor() { }

  ngOnInit() {
  }

}
