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
        title: 'Yoga Teacher Training in Rishikesh & Bali | Yoga Vidya School',
        description:
          'Yoga Vidya School offers best Yoga Alliance certified 100, 200 & 300 Hour Yoga Teacher Training Courses & Retreats in Rishikesh India & Bali. Hatha, Ashtanga & Pranayama led by Acharya Prashant Jakhmola.',
        keywords:
          'Yoga Teacher Training Rishikesh, Yoga School Rishikesh, 200 Hour Yoga TTC Rishikesh, 300 Hour Yoga Teacher Training, Yoga Retreat Bali, Acharya Prashant Jakhmola',
        url: '/',
      },
    },
  },
  {
    path: 'course',
    component: CourseComponent,
    data: {
      seo: {
        title: 'Yoga Teacher Training Courses | Yoga Vidya School',
        description:
          'Explore all Yoga Alliance certified courses at Yoga Vidya School — 100, 200 & 300 Hour Yoga Teacher Training in Rishikesh & Bali, Pranayama courses, and online yoga classes.',
        keywords:
          'Yoga Teacher Training Courses, Yoga Alliance Certified, Rishikesh Yoga Courses, Bali Yoga Courses',
      },
    },
  },
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
    data: {
      seo: {
        title: '200 Hour Yoga Teacher Training in Bali | Yoga Vidya School',
        description:
          'Join our 200 Hour Yoga Alliance certified Yoga Teacher Training in Bali. Experience traditional Hatha & Ashtanga yoga immersed in the spiritual beauty of Bali, Indonesia.',
        keywords:
          '200 Hour Yoga Teacher Training Bali, Yoga TTC Bali, 200 Hour Yoga Alliance Bali',
      },
    },
  },
  {
    path: '300-hour-yoga-teacher-training-in-bali',
    component: BaliIndexComponent,
    data: {
      seo: {
        title: '300 Hour Yoga Teacher Training in Bali | Yoga Vidya School',
        description:
          'Deepen your yoga practice with our 300 Hour Yoga Alliance certified Yoga Teacher Training in Bali. Advanced training in Hatha, Ashtanga, Pranayama & Yoga Philosophy.',
        keywords:
          '300 Hour Yoga Teacher Training Bali, Advanced Yoga TTC Bali, 300 Hour Yoga Alliance Bali',
      },
    },
  },
  {
    path: 'yoga-retreat-in-bali',
    component: BaliIndexComponent,
    data: {
      seo: {
        title: 'Yoga Retreat in Bali | Yoga Vidya School',
        description:
          'Rejuvenate mind, body and soul with our transformative Yoga Retreat in Bali. Daily asana, pranayama, meditation and cultural excursions surrounded by tropical beauty.',
        keywords:
          'Yoga Retreat Bali, Bali Yoga Holiday, Spiritual Retreat Bali, Yoga Vidya Bali Retreat',
      },
    },
  },
  // {path:'yoga-retreat-in-mysore-india', component: BaliIndexComponent},
  // {path:'yoga-retreat-in-peru', component: BaliIndexComponent},
  {
    path: '100-hours-yoga-teacher-training-in-rishikesh',
    component: RishikeshIndexComponent,
    data: {
      seo: {
        title:
          '100 Hour Yoga Teacher Training in Rishikesh | Yoga Vidya School',
        description:
          'Earn your Yoga Alliance certification with our 100 Hour Yoga Teacher Training in Rishikesh. Intensive course covering Hatha Yoga, Pranayama, Meditation & Yoga Philosophy.',
        keywords:
          '100 Hour Yoga Teacher Training Rishikesh, 100 Hour Yoga TTC Rishikesh, Yoga Alliance 100 Hour',
      },
    },
  },
  {
    path: '200-hours-yoga-teacher-training-in-rishikesh',
    component: RishikeshIndexComponent,
    data: {
      seo: {
        title:
          '200 Hour Yoga Teacher Training in Rishikesh | Yoga Vidya School',
        description:
          'Get Yoga Alliance RYT 200 certified with our comprehensive 200 Hour Yoga Teacher Training in Rishikesh. Covering Hatha, Ashtanga, Pranayama, Anatomy & Yoga Philosophy.',
        keywords:
          '200 Hour Yoga Teacher Training Rishikesh, 200 Hour Yoga TTC Rishikesh, RYT 200 Rishikesh',
      },
    },
  },
  {
    path: '300-hours-yoga-teacher-training-in-rishikesh',
    component: RishikeshIndexComponent,
    data: {
      seo: {
        title:
          '300 Hour Yoga Teacher Training in Rishikesh | Yoga Vidya School',
        description:
          'Advance your teaching with our 300 Hour Yoga Teacher Training in Rishikesh. Yoga Alliance RYT 300 certification covering advanced asanas, Pranayama, Ayurveda & meditation.',
        keywords:
          '300 Hour Yoga Teacher Training Rishikesh, 300 Hour Yoga TTC Rishikesh, RYT 300 Rishikesh',
      },
    },
  },
  {
    path: '200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh',
    component: RishikeshIndexComponent,
    data: {
      seo: {
        title:
          '200 Horas Formación de Profesores de Yoga en Rishikesh | Yoga Vidya School',
        description:
          'Obtén tu certificación Yoga Alliance con nuestra Formación de 200 Horas para Profesores de Yoga en Rishikesh, India. Incluye Hatha, Ashtanga, Pranayama y Filosofía del Yoga.',
        keywords:
          'Formación Profesores Yoga Rishikesh, 200 Horas Yoga TTC, Yoga Alliance España',
      },
    },
  },
  {
    path: '200-hour-yoga-teacher-training-scholarship-in-rishikesh',
    component: RishikeshIndexComponent,
    data: {
      seo: {
        title:
          '200 Hour Yoga Teacher Training Scholarship in Rishikesh | Yoga Vidya School',
        description:
          'Apply for our 200 Hour Yoga Teacher Training Scholarship in Rishikesh. Limited seats available for deserving yoga students seeking Yoga Alliance certification.',
        keywords:
          '200 Hour Yoga TTC Scholarship Rishikesh, Yoga Teacher Training Scholarship India',
      },
    },
  },
  {
    path: '300-hour-yoga-teacher-training-scholarship-in-rishikesh',
    component: RishikeshIndexComponent,
    data: {
      seo: {
        title:
          '300 Hour Yoga Teacher Training Scholarship in Rishikesh | Yoga Vidya School',
        description:
          'Apply for our 300 Hour Yoga Teacher Training Scholarship in Rishikesh. Deepen your yoga practice with advanced training and Yoga Alliance certification.',
        keywords:
          '300 Hour Yoga TTC Scholarship Rishikesh, Advanced Yoga Teacher Training Scholarship India',
      },
    },
  },
  {
    path: 'yoga-retreat-in-rishikesh-india',
    component: RishikeshIndexComponent,
    data: {
      seo: {
        title: 'Yoga Retreat in Rishikesh India | Yoga Vidya School',
        description:
          'Escape to a transformative Yoga Retreat in Rishikesh, the yoga capital of the world. Immerse yourself in daily asana, pranayama, meditation & Ganga aarti ceremonies.',
        keywords:
          'Yoga Retreat Rishikesh, Rishikesh Yoga Holiday, Yoga Retreat India, Spiritual Retreat Rishikesh',
      },
    },
  },

  {
    path: 'adjustment-and-alignment',
    component: RishikeshIndexComponent,
    data: {
      seo: {
        title:
          'Yoga Adjustment & Alignment Teacher Training | Yoga Vidya School',
        description:
          'Master the art of yoga adjustments and alignment in our specialized Yoga Teacher Training in Rishikesh. Learn hands-on techniques for safe and effective yoga teaching.',
        keywords:
          'Yoga Adjustment Alignment, Yoga Alignment Training Rishikesh, Hands-On Adjustment Yoga',
      },
    },
  },

  {
    path: 'yoga-teacher-training-in-india',
    component: RishikeshIndexComponent,
    data: {
      seo: {
        title: 'Yoga Teacher Training in India | Yoga Vidya School Rishikesh',
        description:
          'Join a transformative Yoga Teacher Training in India at Yoga Vidya School in Rishikesh. Yoga Alliance certified 100, 200 & 300 Hour programs in the birthplace of yoga.',
        keywords:
          'Yoga Teacher Training India, Yoga TTC India, Yoga School India, Best Yoga Teacher Training India',
      },
    },
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
    data: {
      seo: {
        title: 'Foundation of Spirituality Course | Yoga Vidya School',
        description:
          'Explore the Foundation of Spirituality course at Yoga Vidya School. Deepen your understanding of yogic philosophy, meditation, and the roots of spiritual practice.',
        keywords:
          'Foundation of Spirituality, Yoga Philosophy Course, Spiritual Yoga Course, Yoga Vidya School',
      },
    },
  },
  {
    path: 'yoga-philosophy-course-free',
    component: BaliIndexComponent,
    data: {
      seo: {
        title: 'Free Yoga Philosophy Course | Yoga Vidya School',
        description:
          'Enroll in our free online Yoga Philosophy Course at Yoga Vidya School. Explore Patanjali Yoga Sutras, Samkhya philosophy, and the deeper teachings of classical yoga.',
        keywords:
          'Free Yoga Philosophy Course, Online Yoga Philosophy, Yoga Sutras, Classical Yoga Philosophy',
      },
    },
  },
  {
    path: routeEnum['200TTC'],
    component: RishikeshIndexComponent,
    data: {
      seo: {
        title: '200 Hour Yoga Teacher Training Online | Yoga Vidya School',
        description:
          'Get Yoga Alliance RYT 200 certified with our comprehensive 200 Hour Online Yoga Teacher Training. Learn from Indian masters from the comfort of your home.',
        keywords:
          '200 Hour Online Yoga Teacher Training, Online Yoga TTC, RYT 200 Online, Yoga Alliance Online Certification',
      },
    },
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
    data: {
      seo: {
        title:
          'Get Certified in Bali | Yoga Teacher Training | Yoga Vidya School',
        description:
          'Get certified as a Yoga Teacher in Bali. Experience traditional Hatha & Ashtanga Yoga Alliance certified TTC amidst the tranquil nature and spiritual culture of Bali.',
        keywords:
          'Get Certified in Bali, Bali Yoga Teacher Training, Yoga Alliance Certification Bali, Yoga School Bali',
      },
    },
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
