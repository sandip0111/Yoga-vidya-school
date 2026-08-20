import { Component } from '@angular/core';
import { WebapiService } from '../webapi.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formData: any = {};
  user = 'info';
  domain = 'yogavidyaschool.com';
  email: string = "";
  constructor(private webapiService: WebapiService, private router: Router) { }

  ngOnInit(): void {
    this.email = `${this.user}@${this.domain}`;
    
  }

  insertInquiry(data: any) {
    data.type = 2;
    this.webapiService.saveContactInquiry(data).subscribe((res: any) => {
      if (res.status == "ok") {
        alert('Enquiry has been sent');
        this.formData = {};
      }
      else {
        alert('something went wrong')
      }
    });
  } 

}
