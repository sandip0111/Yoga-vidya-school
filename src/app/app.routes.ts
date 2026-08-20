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
import { PaymentProceedComponent } from './payment-proceed/payment-proceed.component';
import { RegistrationFormComponent } from './student/registration-form/registration-form.component';
import { WebinarVideosComponent } from './webinar-videos/webinar-videos.component';
import { CertifiedComponent } from './certified/certified.component';
import { PrashantPageComponent } from './course/online-course-mentor/prashant-page/prashant-page.component';
import { TaniyaPageComponent } from './course/online-course-mentor/taniya-page/taniya-page.component';
import { AnujPageComponent } from './course/online-course-mentor/anuj-page/anuj-page.component';
import { routeEnum } from './enum/routes';
import { CourseMentorComponent } from './course/course-mentor/course-mentor.component';
import { PankajPageComponent } from './course/online-course-mentor/pankaj-page/pankaj-page.component';
import { PranicPurificationIiComponent } from './course/pranic-purification-ii/pranic-purification-ii.component';
import { BreatchdtoxComponent } from './course/pre-recorded-pranayama-courses/breatchdtox/breatchdtox.component';
import { PranaArambhComponent } from './course/pre-recorded-pranayama-courses/prana-arambh/prana-arambh.component';
import { RishikshMain } from './course/rishikesh/rishiksh-main/rishiksh-main';
import { PranicPurification } from './course/pranic-purification/pranic-purification';
import { PersonalGuidance } from './about/personal-guidance/personal-guidance';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: {
      seo: {
        title: 'Yoga Vidya School'
      }
    }
  },
  { path: 'course', component: CourseComponent },
  {
    path: routeEnum.mentors,
    component: TrainersComponent,
    data: {
      seo: {
        title: `Our Expert Yoga Teachers & Mentors | Yoga Vidya School`,
        description: `Meet our team of experienced traditional yoga masters in Rishikesh & Bali. Experts in Ashtanga, Hatha, Pranayama, Yoga Philosophy, Alignment, Adjustment & Anatomy.`,
        keywords: `Yoga Mentors Rishikesh, Yoga Teachers India, Acharya Prashant Jakhmola, Yoga Masters Rishikesh, Traditional Yoga Gurus`,
      },
    },
  },
  {
    path: 'mentor/:id',
    component: TrainerDetailComponent,
    data: {
      seo: {
        title: `Yoga Teacher & Mentor | Yoga Vidya School`,
        description: `Learn more about our expert yoga mentors at Yoga Vidya School in Rishikesh & Bali. Discover their background, expertise, and teaching journey.`,
        keywords: `Yoga Mentor Rishikesh, Yoga Teacher Bali`,
      },
    },
  },
  {
    path: routeEnum.blogs,
    component: BlogComponent,
    data: {
      seo: {
        title: `Yoga Blogs, Insights & Tips | Yoga Vidya School`,
        description: `Explore authentic articles on yoga philosophy, pranayama practices, asana alignment, meditation, and healthy yogic lifestyle tips written by experts.`,
        keywords: `Yoga Blogs, Yoga Articles, Yoga Philosophy, Pranayama Techniques, Yoga Tips Rishikesh`,
      },
    },
  },
  { path: 'blog/:id', component: BlogDetailComponent },
  {
    path: '200-hour-yoga-teacher-training-in-bali',
    component: BaliIndexComponent,
  },
  {
    path: '300-hour-yoga-teacher-training-in-bali',
    component: BaliIndexComponent,
  },
  { path: 'yoga-retreat-in-bali', component: BaliIndexComponent },
  // {path:'yoga-retreat-in-mysore-india', component: BaliIndexComponent},
  // {path:'yoga-retreat-in-peru', component: BaliIndexComponent},
  {
    path: '100-hours-yoga-teacher-training-in-rishikesh',
    component: RishikeshIndexComponent,
  },
  {
    path: '200-hours-yoga-teacher-training-in-rishikesh',
    component: RishikeshIndexComponent,
  },
  {
    path: '300-hours-yoga-teacher-training-in-rishikesh',
    component: RishikeshIndexComponent,
  },
  {
    path: '200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh',
    component: RishikeshIndexComponent,
  },
  {
    path: '200-hour-yoga-teacher-training-scholarship-in-rishikesh',
    component: RishikeshIndexComponent,
  },
  {
    path: '300-hour-yoga-teacher-training-scholarship-in-rishikesh',
    component: RishikeshIndexComponent,
  },
  {
    path: 'yoga-retreat-in-rishikesh-india',
    component: RishikeshIndexComponent,
  },

  { path: 'adjustment-and-alignment', component: RishikeshIndexComponent },

  {
    path: 'yoga-teacher-training-in-india',
    component: RishikeshIndexComponent,
  },

  {
    path: routeEnum.pranicPurification,
    component: PranicPurification,
    data: {
      seo: {
        title: `Pranic Purification Online Course | Yoga Vidya School`,
        description: `Cleanse and balance your prana (vital energy body) with traditional pranayama, Shatkarma techniques, and breathwork guided by Acharya Prashant Jakhmola.`,
        keywords: `Pranic Purification, Pranayama Course, Breathwork Online, Energy Body Cleansing, Shatkarma Practice`,
      },
    },
  },

  {
    path: routeEnum.pranicPurificationII,
    component: PranicPurificationIiComponent,
    data: {
      seo: {
        title: `Pranic Purification Level 2 | Advanced Breathwork Course | Yoga Vidya School`,
        description: `Advanced Pranic Purification Level 2 course to deepen your pranayama practice, bandhas, and subtle energy purification under expert guidance.`,
        keywords: `Pranic Purification Level 2, Advanced Pranayama Course, Advanced Breathwork, Bandhas, Energy Purification`,
      },
    },
  },

  {
    path: routeEnum.online,
    component: CourseMentorComponent,
    data: {
      seo: {
        title: `Live Online Yoga Classes & Daily Practice | Yoga Vidya School`,
        description: `Join daily live online yoga classes led by Indian masters. Practice Hatha asanas, Pranayama & Meditation live from home for holistic wellness.`,
        keywords: `Online Yoga Classes, Daily Live Yoga, Online Hatha Yoga, Online Pranayama Classes, Acharya Prashant Yoga`,
      },
    },
  },
  {
    path: routeEnum.bDtox,
    component: BreatchdtoxComponent,
    data: {
      seo: {
        title: `Breath Detox Yoga Course | Free Online Breathwork | Yoga Vidya School`,
        description: `Join our Free Breath Detox Yoga course. Purify respiratory channels, boost oxygenation, release stress, and master foundational pranayama exercises.`,
        keywords: `Breath Detox Yoga, Free Pranayama Course, Respiratory Detox, Online Breathwork, Yoga Vidya School`,
      },
    },
  },
  {
    path: routeEnum.pranOnlinePranaArambh,
    component: PranaArambhComponent,
    data: {
      seo: {
        title: `Prana Arambha - Online Pranayama Beginners Course | Yoga Vidya School`,
        description: `Begin your pranayama journey with Prana Arambha. Master foundational breath control techniques, daily practice routines, and vital force expansion.`,
        keywords: `Prana Arambha, Pranayama Beginners Course, Online Pranayama Training, Breathwork Foundations, Acharya Prashant Jakhmola`,
      },
    },
  },
  {
    path: routeEnum.foundationOfSpirituality,
    component: BaliIndexComponent,
  },
  { path: 'yoga-philosophy-course-free', component: BaliIndexComponent },
  {
    path: routeEnum['200TTC'],
    component: RishikeshIndexComponent,
  },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'password/:id', component: ChangePasswordComponent },
  {
    path: routeEnum.courseVideo + '/:id/:teacherId',
    component: CourseVideoComponent,
  },
  {
    path: routeEnum.aboutUs,
    component: AboutComponent,
    data: {
      seo: {
        title: `About Us | Yoga Vidya School Rishikesh & Bali`,
        description: `Learn about Yoga Vidya School, founded by Acharya Prashant Jakhmola in Rishikesh. We provide traditional, Yoga Alliance certified Yoga Teacher Training courses in Rishikesh, India & Bali.`,
        keywords: `About Yoga Vidya School, Acharya Prashant Jakhmola, Yoga School Rishikesh, Yoga Alliance Certified School India`,
      },
    },
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    data: {
      seo: {
        title: `Privacy Policy | Yoga Vidya School`,
        description: `Privacy Policy of Yoga Vidya School Rishikesh & Bali regarding student data protection, cookies, course bookings, and website privacy standards.`,
        keywords: `Yoga Vidya School Privacy Policy, Data Protection, Privacy Terms`,
      },
    },
  },
  {
    path: 'gallery',
    component: YogaGalleryComponent,
    data: {
      seo: {
        title: `Photo Gallery | Yoga Vidya School Rishikesh & Bali`,
        description: `Browse photos of Yoga Vidya School campuses in Rishikesh & Bali, yoga teacher training classes, excursion trips, graduation ceremonies, and ashram life.`,
        keywords: `Yoga Gallery, Yoga Vidya School Photos, Rishikesh Ashram Photos, Yoga Student Life, Bali Yoga Gallery`,
      },
    },
  },
  {
    path: 'terms-and-condition',
    component: TermsAndConditionComponent,
    data: {
      seo: {
        title: `Terms & Conditions | Yoga Vidya School`,
        description: `Official Terms & Conditions of Yoga Vidya School for course registration, payment policy, code of conduct, and refund guidelines in Rishikesh & Bali.`,
        keywords: `Yoga Vidya School Terms, Course Terms and Conditions, Refund Policy, Student Code of Conduct`,
      },
    },
  },

  {
    path: 'faq',
    component: FaqComponent,
    data: {
      seo: {
        title: `Frequently Asked Questions | Yoga Vidya School`,
        description: `Find answers to common questions about Yoga Teacher Training in Rishikesh & Bali, Yoga Alliance certification, course curriculum, accommodation, food, and prerequisites.`,
        keywords: `Yoga FAQ, Yoga Teacher Training Questions, Yoga Alliance Certification FAQ, Rishikesh Yoga Course FAQ`,
      },
    },
  },
  {
    path: 'testimonial',
    component: TestinomialComponent,
    data: {
      seo: {
        title: `Student Testimonials & Reviews | Yoga Vidya School`,
        description: `Read genuine reviews and watch video testimonials from international graduates of our 100, 200 & 300 Hour Yoga Teacher Training courses in Rishikesh & Bali.`,
        keywords: `Yoga Vidya School Reviews, Yoga Teacher Training Testimonials, Rishikesh Yoga Course Reviews, Student Experiences Bali Yoga`,
      },
    },
  },
  {
    path: routeEnum.aboutPrashantJi,
    component: YogateacherComponent,
    data: {
      seo: {
        title: `Acharya Prashant Jakhmola | Founder & Master Yoga Teacher`,
        description: `Meet Acharya Prashant Jakhmola, founder of Yoga Vidya School in Rishikesh. Revered yoga master specializing in Pranayama, Asana Alignment, and Spiritual Sadhana.`,
        keywords: `Acharya Prashant Jakhmola, Prashant J Yoga, Yoga Master Rishikesh, Yoga Vidya School Founder, Pranayama Master India`,
      },
    },
  },
  { path: 'confirmation', component: SuccessPaymentComponent },
  { path: 'add-to-cart', component: AddToCartComponent },
  { path: 'book-now', component: BookNowComponent },
  {
    path: 'contact-us',
    component: ContactComponent,
    data: {
      seo: {
        title: `Contact Us | Yoga Vidya School Rishikesh & Bali`,
        description: `Get in touch with Yoga Vidya School for Yoga Teacher Training inquiries, enrollment guidance, or retreat details in Rishikesh, India & Bali.`,
        keywords: `Yoga Vidya School Contact, Contact Yoga School Rishikesh, Yoga Teacher Training Inquiry`,
      },
    },
  },
  { path: 'checkout/:id', component: CheckoutComponent },
  {
    path: routeEnum.freeWebiner,
    loadComponent: () =>
      import('./webinar-registration-form/webinar-registration-form.component').then(
        (m) => m.WebinarRegistrationFormComponent,
      ),
  },
  { path: 'proceed-payment', component: PaymentProceedComponent },
  {
    path: 'breath-detox-yoga/student-register',
    component: RegistrationFormComponent,
  },
  {
    path: routeEnum.rishikesh,
    component: RishikshMain,
    data: {
      seo: {
        title: `Get Certified in Rishikesh | Yoga Teacher Training Courses | Yoga Vidya School`,
        description: `Get certified as a Yoga Teacher in Rishikesh, India. Yoga Alliance approved 100, 200 & 300 Hour Yoga TTC courses at Yoga Vidya School.`,
        keywords: `Get Certified in Rishikesh, Yoga Alliance Certification Rishikesh, Yoga Teacher Training India, Rishikesh Yoga School`,
      },
    },
  },
  {
    path: 'get-certified-in-bali',
    component: CertifiedComponent,
  },
  {
    path: `${routeEnum.online_prashant_page}/:id`,
    component: PrashantPageComponent,
    data: {
      seo: {
        title: `Online Sadhana with Acharya Prashant Jakhmola | Yoga Vidya School`,
        description: `Join daily Online Yoga Sadhana & Pranayama classes with founder Acharya Prashant Jakhmola. Experience authentic yogic practice, breathwork, and meditation from anywhere in the world.`,
        keywords: `Online Sadhana, Prashant Jakhmola Yoga, Online Pranayama Classes, Daily Yoga Practice Online`,
      },
    },
  },
  // {
  //   path: `${routeEnum.online_taniya_page}/:id`,
  //   component: TaniyaPageComponent,
  // },
  {
    path: 'anuj-online-class/:id',
    component: AnujPageComponent,
    data: {
      seo: {
        title: `Online Hatha & Alignment Yoga classes | Yoga Vidya School`,
        description: `Join Online Hatha & Alignment Yoga classes with Anuj Pareek at Yoga Vidya School. Improve mobility, posture, alignment, and flexibility.`,
        keywords: `Anuj Pareek Yoga, Therapeutic Hatha Yoga, Alignment Yoga Class, Online Hatha Yoga`,
      },
    },
  },
  {
    path: `${routeEnum.pankaji}/:id`,
    component: PankajPageComponent,
    data: {
      seo: {
        title: `Ashtanga & Alignment-Based Practice with Pankaj Ji | Yoga Vidya School`,
        description: `Master Ashtanga Yoga Vinyasa and posture alignment with senior master Pankaj Ji at Yoga Vidya School in Rishikesh. Online & in-person classes.`,
        keywords: `Pankaj Ji Yoga, Ashtanga Yoga Rishikesh, Asana Alignment, Ashtanga Vinyasa Teacher`,
      },
    },
  },
  {
    path: routeEnum.preRecordPranayamaCourse,
    loadComponent: () =>
      import('./course/pre-recorded-pranayama-courses/pre-recorded-pranayama-courses.component').then(
        (m) => m.PreRecordedPranayamaCoursesComponent,
      ),
  },
  {
    path: routeEnum.sa,
    loadComponent: () =>
      import('./course/swara-sadhana/swara-sadhana.component').then(
        (m) => m.SwaraSadhanaComponent,
      ),
  },
  {
    path: routeEnum.bali100,
    loadComponent: () =>
      import('./course/bali/bali-100-hour/bali-100-hour.component').then(
        (m) => m.Bali100HourComponent,
      ),
  },
  {
    path: routeEnum.retreats,
    loadComponent: () =>
      import('./course/retreats/retreats').then((m) => m.Retreats),
  },
  {
    path: routeEnum.pg,
    component: PersonalGuidance,
    data: {
      seo: {
        title: `One-on-One Personal Guidance & Mentorship | Yoga Vidya School`,
        description: `Receive personalized 1-on-1 yoga guidance, pranayama mentorship, and spiritual consultation tailored specifically for your individual practice.`,
        keywords: `Personal Yoga Guidance, 1 on 1 Yoga Mentorship, Spiritual Consultation, Acharya Prashant Mentorship`,
      },
    },
  },
  { path: 'webinar-video/:name', component: WebinarVideosComponent },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];
