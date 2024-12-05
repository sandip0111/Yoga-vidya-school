import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../../webapi.service';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  subscribeData:any={};
  footerAddress: string="";
  slug: any = "";
  constructor(private webService: WebapiService,private spinner: NgxSpinnerService, private router: Router){
    this.footerAddress = "Near Kailashanand Gaushala,Mateshwari Hospital Jonk Village Post, Swarg Ashram Rishikesh, Uttarakhand 249304";
    
  }
  ngOnInit(): void {
    // Subscribe to router events to capture URL after navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Get the full URL path after the domain
        this.slug = event.urlAfterRedirects; // or event.url for the actual path
        if(this.slug == '/200-hour-yoga-teacher-training-in-bali' || this.slug == '/300-hour-yoga-teacher-training-in-bali' || this.slug == '/yoga-retreat-in-bali' || this.slug == '/adjustment-and-alignment' || this.slug == '/adjustment-and-alignment-level-2'){
          this.footerAddress = "Ahamta retreat, Jl. Sri Wedari No.46, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571, Indonesia"
        }
        if(this.slug =='/yoga-retreat-in-peru'){
          this.footerAddress = `Samadhi Sacred Valley,
                                Huayllabamba 08670, Peru`;
        }
      }
    });
  }
  

  subscribeHere(data:any){
    this.spinner.show();
    if(data.email && this.validateEmail(data.email)){
  //  console.log(data,'-');
   this.webService.createSubscriber(data).subscribe((res: any) => {
         console.log(res);
         if(res.status == "ok"){
          alert(res.msg);
          this.spinner.hide();
          this.subscribeData = {};
         }
         else{
          alert(res.msg);
          this.spinner.hide();
         }
    });
    }
    else{
      alert('Valid Email is required');
      this.spinner.hide();
    }
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

}
