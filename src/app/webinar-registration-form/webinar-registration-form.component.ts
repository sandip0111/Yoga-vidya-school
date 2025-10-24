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
import { routeEnum } from '../enum/routes';
import { BannerComponent } from "../certified/banner/banner.component";
import { s3Bucket } from '../enum/s3Bucket';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-webinar-registration-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, BannerComponent],
  templateUrl: './webinar-registration-form.component.html',
  styleUrl: './webinar-registration-form.component.css',
})
export class WebinarRegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;
  selectedOption: any;

  dropdownOptions = [
    {
      value: 'Swar Sadhana',
      label: 'Swar Sadhana',
      title: 'Swar Sadhana',
      link: routeEnum.swaraSadhana + '/',
      description: `Get ready to dive into the transformative workshop on SWAR SADHANA🧘. This powerful session will guide you through the ancient technique of harnessing your energy to drive your actions. Your physical body is fully controlled by two energies present in nature. SUN 🌞 and MOON 🌑. These two energies are flowing constantly in your body and can be controlled by your right and left nostril.
👃 Swar sadhana is a way to get mastery over these two energies to get spontaneous mastery over your actions.
This is an ancient method given by SHIVA to PARVATI.

Remember, every thought and action you take is fueled by the energy flowing through you. By maintaining this energy flow, you can truly take control of your present moment.

This is an interactive workshop on  SWAR YOG. Which is an ancient method taught by shiva to parwati. This knowledge is hidden and only passed by known Yogi or practitioner. Through this workshop, you will be understanding how to merge your right energy flow with your actions and how to manipulate your flow of energy, which is sun and moon.

Swar Sadhana, which involves understanding the dominant energy in our body based on the nostril that is more open. We learn how to identify whether our sun or moon energy is more active, and how to choose the appropriate actions and activities that align with the dominant energy. The video covers various scenarios, such as talking to people, physical exercise, running, swimming, climbing, business planning, giving speeches, rest, concentration, long-term planning, reading scriptures, and sleeping, and how to optimize these activities based on the dominant energy.`,
      feesINR: '799',
      fesUSD: '',
    },
    // { value: "Kundalini parichay", label: 'Kundalini parichay', title: 'Kundalini parichay',
    //   description: `It is the term used for sleeping dormant potential force in every human organism,
    //   which is not yet awakened . The recite point of this force is root of the spinal
    //   column. until this energy is not awakened, Person remains in illusion and unaware
    //   of this universe and its functioning, but once it is awaken Through the practice
    //   of yoga and other spiritual techniques, this energy makes its way through centre
    //   of the spine to the brain. Once this energy ascend, it passes through each energy
    //   centres which are interconnected with the different silent areas of the brain.
    //   The dormant areas of the brain start blooming And new awareness arises. this
    //   upcoming webinar is to know about this energy and what are the practices to awaken it.`,
    //   feesINR: '799',
    //   fesUSD: ''
    //   }
  ];
bannerTitle: string|undefined;
imgSlug: string|undefined;
bannerSubtitle: string|undefined;
s3Bucket = s3Bucket;
  constructor(
    private fb: FormBuilder,
    private webapiService: WebapiService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private title: Title
  ) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      webinarDate: ['2025-10-25']
      // phone: ['', Validators.required],
      // refferalCode: ['', Validators.required],
      // webinar: [''],
      // password: [''],
      // city: [''], // Optional
    });
  }

  ngOnInit(): void {
    this.selectedOption = this.dropdownOptions[0];
    this.registrationForm.patchValue({
      webinar: this.selectedOption.value,
    });
    this.title.setTitle('Free Webinar - Yoga Vidya School');
    console.log(this.registrationForm.get('webinar'));
    this.bannerSubtitle = "Sadhana to Seva: Becoming the Torchbearer of Yoga with Prashant J - Yoga Vidya School Founder";
    this.bannerTitle = "Free Online Webinar";
    this.imgSlug = this.s3Bucket.freeWebinnarHero;
    //this.registrationForm.get('webiner')?.setValue(this.selectedOption.label);
  }

  scrollToForm(event: Event, selectedOption: any) {
    event.preventDefault(); // Prevent default anchor behavior (page reload)
    window.open(selectedOption.link, '_blank');
    // Get the form element by ID
    // const element = document.getElementById('register-form');
    // if (element) {
    //   // Scroll the element into view with smooth behavior
    //   element.scrollIntoView({ behavior: 'smooth' });
    // }
  }

  onSelectionChange(selectedValue: any) {
    this.selectedOption = selectedValue;
    this.registrationForm.patchValue({
      webinar: this.selectedOption.value,
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.valid) {
      let emailControl = this.registrationForm.get('email');
      if (emailControl?.value) {
        emailControl.setValue(emailControl.value.toLowerCase(), {
          emitEvent: false,
        });
        this.spinner.show();
        this.webapiService
          .registerWebinarUser(this.registrationForm.value)
          .subscribe({
            next: (res: any) => {
              this.toastr.success(res.message, 'Success');
              this.spinner.hide();
              this.submitted = false;
              this.registrationForm.reset({
                  webinarDate: '2025-10-25' // keep hidden date if needed
                });

             

            },
            error: (error) => {
              this.toastr.error(error.error.message, 'Invalid Credentials');
              this.spinner.hide();
            },
          });
      }
     
    };
  }

  genratePass(len: any) {
    var charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?';
    var password = '';

    for (var i = 0; i < len; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }

    return password;
  }
}
