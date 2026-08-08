import { Component } from '@angular/core';
import { WebapiService } from '../webapi.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../services/seo.service';

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
  constructor(private webapiService: WebapiService, private router: Router, private seoService: SeoService) { }

  ngOnInit(): void {
    this.email = `${this.user}@${this.domain}`;
    this.seoService.updateSeo({
      title: 'Contact Us | Yoga Vidya School Rishikesh & Bali',
      description: 'Get in touch with Yoga Vidya School for Yoga Teacher Training inquiries, enrollment guidance, or retreat details in Rishikesh, India & Bali.',
      keywords: 'Yoga Vidya School Contact, Contact Yoga School Rishikesh, Yoga Teacher Training Inquiry',
      url: '/contact-us',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'name': 'Contact Yoga Vidya School',
        'url': 'https://www.yogavidyaschool.com/contact-us',
        'telephone': '+919818660954'
      }
    });
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
