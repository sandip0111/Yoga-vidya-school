import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';

@Component({
  selector: 'app-testinomial',
  standalone: true,
  imports: [],
  templateUrl: './testinomial.component.html',
  styleUrl: './testinomial.component.css'
})
export class TestinomialComponent {

  constructor(private spinner: NgxSpinnerService, private router: Router) {}

  ngOnInit(): void {
    
  }
}
