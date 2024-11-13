import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './course/course.component';
import { TrainersComponent } from './trainers/trainers.component';
import { BaliIndexComponent } from './course/bali/bali-index/bali-index.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RishikeshIndexComponent } from './course/rishikesh/rishikesh-index/rishikesh-index.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CourseVideoComponent } from './course-video/course-video.component';
import { AboutComponent } from './about/about.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { YogaGalleryComponent } from './yoga-gallery/yoga-gallery.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { FaqComponent } from './faq/faq.component';
import { TestinomialComponent } from './testinomial/testinomial.component';
import { BookNowComponent } from './book-now/book-now.component';
import { ContactComponent } from './contact/contact.component';
import { YogateacherComponent } from './yogateacher/yogateacher.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { SuccessPaymentComponent } from './success-payment/success-payment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TrainerDetailComponent } from './trainers/trainer-detail/trainer-detail.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { WebinarRegistrationFormComponent } from './webinar-registration-form/webinar-registration-form.component';

export const routes: Routes = [

  {path: '', component: IndexComponent},
  {path:'course', component: CourseComponent},
  {path:'mentors', component: TrainersComponent},
  {path:'mentor/:id', component:TrainerDetailComponent},
  {path:'blog', component: BlogComponent },
  {path:'blog/:id', component: BlogDetailComponent },
  {path:'200-hour-yoga-teacher-training-in-bali', component: BaliIndexComponent},
  {path:'300-hour-yoga-teacher-training-in-bali', component: BaliIndexComponent},
  {path:'yoga-retreat-in-bali', component: BaliIndexComponent},
  {path:'yoga-retreat-in-mysore-india', component: BaliIndexComponent},
  {path:'yoga-retreat-in-peru', component: BaliIndexComponent},
  {path:'100-hours-yoga-teacher-training-in-rishikesh', component: RishikeshIndexComponent},
  {path:'200-hours-yoga-teacher-training-in-rishikesh', component: RishikeshIndexComponent},
  {path:'300-hours-yoga-teacher-training-in-rishikesh', component: RishikeshIndexComponent},
  {path:'200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh', component: RishikeshIndexComponent},
  {path:'200-hour-yoga-teacher-training-scholarship-in-rishikesh', component: RishikeshIndexComponent},
  {path:'300-hour-yoga-teacher-training-scholarship-in-rishikesh', component: RishikeshIndexComponent},
  {path:'200-hour-yoga-teacher-training-in-kerala-india', component: RishikeshIndexComponent},
  {path:'300-hour-yoga-teacher-training-in-kerala-india', component: RishikeshIndexComponent},
  {path:'yoga-retreat-in-rishikesh-india', component: RishikeshIndexComponent},
  {path:'yoga-retreat-in-kerala-india', component: RishikeshIndexComponent},
  {path:'pranayama-therapy-course-online', component: RishikeshIndexComponent},
  {path:'adjustment-amp-alignment-level-1', component: RishikeshIndexComponent},
  {path:'adjustment-amp-alignment-level-2', component: RishikeshIndexComponent},
  {path:'yoga-teacher-training-in-india', component: RishikeshIndexComponent},
  {path:'drop-in-yoga-classes', component: RishikeshIndexComponent},
  {path:'pranic-purification', component: RishikeshIndexComponent},
  {path:'21-days-ashtanga-yoga-immersion', component: RishikeshIndexComponent},
  {path:'yoga-for-weight-loss', component: RishikeshIndexComponent},
  {path:'online-yoga-classes', component: CourseComponent},
  {path:'breath-detox-yoga', component: BaliIndexComponent},
  {path:'pranayama-course-online-pranarambha', component: BaliIndexComponent},
  {path:'foundation-of-spirituality-an-online-spiritual-awakening-course', component: BaliIndexComponent},
  {path:'yoga-inversion-workshop-headstand', component: BaliIndexComponent},
  {path:'yoga-philosophy-course-free', component: BaliIndexComponent},
  {path:'online-hip-opening-workshop', component: RishikeshIndexComponent},
  {path:'200-hours-yoga-teacher-training-online', component: RishikeshIndexComponent},
  {path:'yoga-history-and-philosophy', component: BaliIndexComponent},
  {path:'my-account',component:MyAccountComponent},
  {path:'password/:id' , component:ChangePasswordComponent},
  {path:'course-video/:id', component:CourseVideoComponent},
  {path:'about-us', component:AboutComponent},
  {path:'login', component: LoginComponent},
  {path:"privacy-policy", component:PrivacyPolicyComponent},
  {path:"gallery",component:YogaGalleryComponent},
  {path:"terms-and-condition", component:TermsAndConditionComponent},
  {path:"faq", component:FaqComponent},
  {path:"testimonial", component:TestinomialComponent},
  {path:'yoga-teacher/acharya-prashant-jakhmola/:id', component: YogateacherComponent },
  {path:'confirmation', component: SuccessPaymentComponent },
  // {path:'add-to-cart', component: AddToCartComponent },
  {path:"book-now", component:BookNowComponent},
  {path:"contact-us", component:ContactComponent},
  {path:"checkout/:id",component:CheckoutComponent},
  {path:"webinar-registration",component:WebinarRegistrationFormComponent},
  { path: '**', pathMatch: 'full',  component: PagenotfoundComponent },
];
