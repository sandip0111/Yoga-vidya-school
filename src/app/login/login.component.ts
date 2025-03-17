import { Component,Inject,Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebapiService } from '../webapi.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formData:any = {};

  constructor(private webapiService:WebapiService,private router:Router,private toastr: ToastrService, private spinner:NgxSpinnerService, @Inject(DOCUMENT) private _document: Document, private _renderer2: Renderer2) {

  }

  ngOnInit():void{
    const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
    const link = this._document.querySelector('link[rel="canonical"]');
    this._renderer2.setAttribute(link, 'href', canonicalUrl);
  }

  studentLogin(data:any){
    this.spinner.show();
    data.email = data.email.toLowerCase();
    this.webapiService.login(data).subscribe((res: any) => {
      if (res.user) {
        sessionStorage.setItem('loginId', res.user.id);
        if(res.user.isWebinarUser) {
          sessionStorage.setItem('webinarLoginId', res.user.id);
          sessionStorage.setItem('isWebinarUser', res.user.isWebinarUser);
          window.location.href = '/webinar-video/swar-sadhana';
        }else{
          sessionStorage.setItem('loginId', res.user.id);
          sessionStorage.setItem('isWebinarUser', res.user.isWebinarUser);
          window.location.href = '/my-account';
        }
        
      }
      else {
        this.spinner.hide();
        this.toastr.error(res.msg,'Invalid Credentials');
      }
    });

  }

}
