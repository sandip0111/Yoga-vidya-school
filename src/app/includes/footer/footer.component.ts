import { Component } from '@angular/core';
import { WebapiService } from '../../webapi.service';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  subscribeData:any={}

  constructor(private webService: WebapiService,private spinner: NgxSpinnerService){

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
