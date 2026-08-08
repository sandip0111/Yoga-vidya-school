import { Component, Inject, Renderer2, DOCUMENT } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { WebapiService } from '../webapi.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { localstorageKey } from '../enum/localstorage';

import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formData: any = {};

  constructor(
    private webapiService: WebapiService,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.seoService.setNoIndex('Student Login');
  }

  studentLogin(data: any) {
    this.spinner.show();
    data.email = data.email.toLowerCase();
    this.webapiService.login(data).subscribe((res: any) => {
      if (res.user) {
        sessionStorage.setItem(localstorageKey.loginId, res.user.id);
        if (res.user.isWebinarUser) {
          sessionStorage.setItem('webinarLoginId', res.user.id);
          sessionStorage.setItem('isWebinarUser', res.user.isWebinarUser);
          window.location.href = '/webinar-video/swar-sadhana';
        } else {
          sessionStorage.setItem('isWebinarUser', res.user.isWebinarUser);
          window.location.href = '/my-account';
        }
      } else {
        this.spinner.hide();
        this.toastr.error(res.msg, 'Invalid Credentials');
      }
    });
  }
}
