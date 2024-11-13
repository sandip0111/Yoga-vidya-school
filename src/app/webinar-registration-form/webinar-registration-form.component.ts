import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { WebapiService } from '../webapi.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-webinar-registration-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './webinar-registration-form.component.html',
  styleUrl: './webinar-registration-form.component.css',
})
export class WebinarRegistrationFormComponent {
  registrationForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private webapiService: WebapiService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      company: [''], // Optional
    });
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.registrationForm.valid) {
      // Proceed with form submission (e.g., send data to the server)
      this.spinner.show();
      this.webapiService
        .registerWebinarUser(this.registrationForm.value)
        .subscribe({
          next: (res: any) => {
            this.toastr.success(res.message, 'Success');
            this.spinner.hide();
          },
          error: (error) => {
            
            this.toastr.error(error.error.message, 'Invalid Credentials');
            this.spinner.hide();
          },
        });
    }
  }
}
