import { Component, Renderer2, Inject, DOCUMENT } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { WebapiService } from '../webapi.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { localstorageKey } from '../enum/localstorage';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {

  studentId: any;
  loginId:any;
  constructor(
    private webapiService: WebapiService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private seoService: SeoService
  ) {}
  formData:any = {};
  ngOnInit():void{
    this.seoService.setNoIndex('Change Password');
    this.studentId = this.route.snapshot.paramMap.get('id');
    if (typeof sessionStorage === 'undefined') {
      return;
    }

    this.loginId = sessionStorage.getItem(localstorageKey.loginId);
    if (!this.loginId) {
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }
  }

  changeStudentPassword(data:any){
    this.spinner.show();
    var body = {
      oldPassword : data.oldPassword,
      newPassword: data.newPassword,
      studentId: this.studentId
    }
    this.webapiService.changeStudentPassword(body).subscribe((res: any) => {
      if (res.status == '200') {
        this.spinner.hide();
        this.toastr.success(res.msg);
        this.router.navigate(['/my-account']);
      }    
    },
    (error) => {
      this.spinner.hide(); 
      this.toastr.error(error.error.msg);
      if(error.error.status == "404") {
        sessionStorage.clear();
        this.router.navigate(['/login']);
      }
    });
  }
}
