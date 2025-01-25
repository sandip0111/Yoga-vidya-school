import { Component,Renderer2, Inject } from '@angular/core';
import { DOCUMENT,CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { WebapiService } from '../webapi.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
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
  constructor(private webapiService:WebapiService,private router: Router,private route: ActivatedRoute,private toastr: ToastrService, private spinner:NgxSpinnerService,@Inject(DOCUMENT) private _document: Document, private _renderer2: Renderer2,private title:Title,private meta:Meta) {
  }
  formData:any = {};
  ngOnInit():void{
    setTimeout(() => {
      this.title.setTitle('Change Password');
      this.meta.updateTag({ name: 'keywords', content: '' });
      this.meta.updateTag({ name: 'description', content: '' });
      const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
      const link = this._document.querySelector('link[rel="canonical"]');
      this._renderer2.setAttribute(link, 'href', canonicalUrl);
      this.studentId = this.route.snapshot.paramMap.get('id'); // Get the parameter
      this.loginId = sessionStorage.getItem('loginId');
      if (!this.loginId) {
        sessionStorage.clear();
        this.title.setTitle('login');
        this.router.navigate(['/login']);
      }
      
    }, 1000)
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
        this.title.setTitle('my-account');
        this.router.navigate(['/my-account']);
      }    
    },
    (error) => {
      this.spinner.hide(); 
      this.toastr.error(error.error.msg);
      if(error.error.status == "404") {
        sessionStorage.clear();
        this.title.setTitle('login');
        this.router.navigate(['/login']);
      }
    });
  }
}
