import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-webinar-registration-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './webinar-registration-form.component.html',
  styleUrl: './webinar-registration-form.component.css',
})
export class WebinarRegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;
  selectedOption: any;
  dropdownOptions = [
    { value: 'option1', label: 'Kundalini parichay', title: 'Kundalini parichay', 
description: `It is the term used for sleeping dormant potential force in every human organism, 
which is not yet awakened . The recite point of this force is root of the spinal
column. until this energy is not awakened, Person remains in illusion and unaware 
of this universe and its functioning, but once it is awaken Through the practice 
of yoga and other spiritual techniques, this energy makes its way through centre
of the spine to the brain. Once this energy ascend, it passes through each energy
centres which are interconnected with the different silent areas of the brain. 
The dormant areas of the brain start blooming And new awareness arises. this
upcoming webinar is to know about this energy and what are the practices to awaken it.`,
feesINR: '799',
fesUSD: ''
}

];
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
      webiner: [''],
      company: [''], // Optional
    });
  }
  
  ngOnInit(): void {
    this.selectedOption = this.dropdownOptions[0];
    this.registrationForm.value.webinar = this.selectedOption
  }


  onSelectionChange(selectedValue: any) {
    this.selectedOption = selectedValue;
    this.registrationForm.value.webinar = this.selectedOption
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
