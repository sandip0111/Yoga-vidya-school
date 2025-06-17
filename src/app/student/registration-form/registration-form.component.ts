import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WebapiService } from '../../webapi.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

interface RegistrationForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
  password: string;
  isActive: boolean;
  course: Array<string>;
  source: string;
  created: Date;
}
@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;
  submitted = false;
  courseName: string = '';
  constructor(private formBuilder: FormBuilder,private router: Router, private webapiService: WebapiService,  private toastr: ToastrService,
    private spinner: NgxSpinnerService) {
   
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      city: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {   
   this.courseName = "Breath Detox Yoga";  

  }

  get f(): { [key in keyof RegistrationForm]: any } {
    return this.registrationForm.controls as { [key in keyof RegistrationForm]: any };
  }


  onSubmit() {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }
    this.spinner.show();
    let arr = ['63c3f26c461e531f3c3452e1'];
    this.registrationForm.value.isActive = true;
    this.registrationForm.value.created =  new Date(Date.now() + (5.5 * 60 * 60 * 1000));
    this.registrationForm.value.source = 'web';
    this.registrationForm.value.course = arr;
    console.log('Form submitted:', this.registrationForm.value);
    this.webapiService.createStudent(this.registrationForm.value).subscribe({
      next: (res: any) => {
        if(res.status == 'error'){
          this.toastr.error(res.msg, 'error');
        }
        else if(res.status == 'ok'){
          this.toastr.success(res.msg, 'success');
        }        
        this.spinner.hide();
        this.registrationForm.reset();

      },
      error: (error) => {
        
        this.toastr.error(error.error.message, 'Invalid Credentials');
        this.spinner.hide();
      }
    });
    // Here, you can send the form data to your backend
  }
}
