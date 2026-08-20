import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {
  user = 'info';
  domain = 'yogavidyaschool.com';
  email: string = "";
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.email = `${this.user}@${this.domain}`;
    
  }
}
