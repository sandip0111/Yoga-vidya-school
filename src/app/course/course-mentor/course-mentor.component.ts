import { Component } from '@angular/core';
import { StartClassComponent } from '../bali/start-class/start-class.component';
import { ActivatedRoute, Router } from '@angular/router';
import { WebapiService } from '../../webapi.service';
import { CommonModule } from '@angular/common';
import { CartItem, CartService } from '../../cart.service';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-course-mentor',
  standalone: true,
  imports: [CommonModule, StartClassComponent],
  templateUrl: './course-mentor.component.html',
  styleUrl: './course-mentor.component.css',
})
export class CourseMentorComponent {
  slug: any = '';
  imageUrl: string = '';
  course?: CartItem;
  courseMentor: mentorTimings[] = [];
  isShowAddToCart: boolean = false;

  constructor(
    private cartService: CartService,
    private sanitizer: DomSanitizer,
    private webapiService: WebapiService,
    private _activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.slug = this._activatedRoute.snapshot.routeConfig?.path;
    this.imageUrl = this.webapiService.imageUrl;

    if (this.slug == 'online-yoga-classes') {
      this.isShowAddToCart = true;
      this.courseMentor = [
        {
          id: 1,
          name: 'Acharya Prashant Jakhmola',
          image: 'image_1673271873934.jfif',
          intro: 'Yoga Sadhana',
          time: '7:00 AM - 8:00 AM (IST)',
          price: 'Rs. 2999/USD 70',
          priceInIndian: 2999,
          priceInUSD: 70,
        },
        {
          id: 2,
          name: 'Anuj Pareek',
          description: `
          <p>Anuj class is based on Mobility to recover from long years of spinal & Hip compression from long hours of sitting on desk job or from your sedentary lifestyle. Classes are designed with Hatha yoga 3 series of sequences which include backbending, hip opening, inversion and therapeutic methods. Classes are very progressive and you wont see its as repetitive, every month there is new offering and curated with personal attention on each students need, also largely focused on self practice and how to approach practice on your own on the days off.</p
          <br/><p><strong>Excited to see you</strong></p>`,
          image: 'image_1695634116777.jpeg',
          intro: 'Hatha Yoga',
          time: '5:30 AM - 6:30 AM (IST)',
          price: 'Rs. 1999/USD 50',
          priceInIndian: 1999,
          priceInUSD: 50,
        },

        // {
        //   id: 3,
        //   name: "Shiva",
        //   image: "image_1718605139191.jpeg",
        //   intro: "Ashtanga Yoga",
        //   time:"4:00 PM – 5:00 PM (IST)",
        //   price:"Rs. 1499/ USD 30",
        //   priceInIndian: 1499,
        //   priceInUSD: 30
        // },
        {
          id: 3,
          name: 'Taniya Verma',
          description: `
  <p>This class is designed for all the females from menarche to menopause, with a holistic approach combining ancient yoga wisdom with modern lifestyle tips to empower women to take control of their health and wellbeing. In this transformative journey, you will explore:</p>

  <ul>
    <li>Transformative asanas to awaken vitality and strength in the physical body.</li>
    <li>Healthy eating habits to nourish and balance your body.</li>
    <li>Pranayama techniques to calm and soothe the nervous system.</li>
    <li>Restorative asanas to release tension and promote relaxation during the menstrual cycle.</li>
  </ul>
  <p>Join us to rediscover your inner strength, balance your hormones, and cultivate overall wellbeing. Together, let's address the unique challenges women face due to hormonal issues and embark on a path towards radiant health, happiness, and fulfillment.</p>
`,
          image: 'IMG_20250331_171325_021.jpg',
          intro: 'Women Wellness Yoga',
          time: '5:00 PM – 6:00 PM (IST)',
          time1: '',
          price: 'Rs. 1999/USD 40',
          priceInIndian: 1999,
          priceInUSD: 40,
        },
        // {
        //   id: 4,
        //   name: "Shivam Joshi",
        //   description:this.sanitizer
        //   .bypassSecurityTrustHtml(` <h5 style="text-align: center">Saturday/Sunday</h5></br> <p>Join Shivam Joshi’s classes in this holistic journey towards physical vitality and mental clarity. Experience the profound benefits of a practice rooted in tradition of Hatha Yoga and Iyengar Yoga. These 120-minute online classes focus on mastering foundational asanas with precision and care. Incorporating the principles of Iyengar Yoga, you’ll learn to achieve perfect alignment using supportive props. Highly recommended yoga sessions to master.</p>`),
        //   image: "image_1673271925503.jpeg",
        //   intro: "Iyengar/ Yoga Therapy ",
        //   time:"6:30 PM – 8:30 PM (IST)",
        //   price:"Rs. 6000/ USD 75",
        //   priceInIndian: 6000,
        //   priceInUSD: 75
        // },
        {
          id: 5,
          name: 'Anuj Pareek',
          description: this.sanitizer
            .bypassSecurityTrustHtml(` <h5 style="text-align: center">Monday/Wednesday/Friday</h5></br>
          <p>These classes are designed for practitioners who want to move beyond the basics and take their practice to the next level. You'll be guided through advanced preparations for asanas, including arm balances, inversions, and other complex postures. The sessions also include mobility drills and therapeutic techniques to help release physical tension and improve range of motion—supporting your journey into deeper and safer practice.</p
          <br/><p><strong>Excited to see you</strong></p>`),
          image: 'image_1695634116777.jpeg',
          intro: 'Intermediate Alignment Based Class',
          time: '6:15 PM - 7:15 PM (IST)',
          price: 'Rs. 3500/USD 70',
          priceInIndian: 3500,
          priceInUSD: 70,
        },
      ];
    } else if (
      this.slug == 'breath-detox-yoga' ||
      this.slug == 'pranayama-course-online-pranarambha' ||
      this.slug == 'yoga-inversion-workshop-headstand' ||
      this.slug == 'yoga-philosophy-course-free' ||
      this.slug == 'pranic-purification' ||
      this.slug == '21-days-ashtanga-yoga-immersion' ||
      this.slug == 'pranayama-therapy-course-online' ||
      this.slug == 'adjustment-and-alignment' ||
      this.slug == 'adjustment-and-alignment-level-2' ||
      this.slug == 'yoga-teacher-training-in-india' ||
      this.slug == 'drop-in-yoga-classes' ||
      this.slug == 'yoga-for-weight-loss'
    ) {
      this.courseMentor = [
        {
          name: 'Acharya Prashant Jakhmola',
          image: 'image_1673271873934.jfif',
          intro: 'Morning Sadhana',
          time: '',
          price: '',
        },
      ];
    } else if (
      this.slug == 'online-hip-opening-workshop' ||
      this.slug == 'yoga-history-and-philosophy'
    ) {
      this.courseMentor = [
        {
          name: 'Acharya Prashant Jakhmola',
          image: 'image_1673271873934.jfif',
          intro: 'Morning Sadhana',
          time: '',
          price: '',
        },
        {
          name: 'Swami Atmatattwananda Sarawati',
          image: 'image_1673271849951.jpg',
          intro: 'Yoga Philosophy',
          time: '',
          price: '',
        },
        {
          name: 'Aparna Sharma',
          image: 'image_1673271914610.jpeg',
          intro: 'Meditation & Mantras',
          time: '',
          price: '',
        },
        {
          name: 'Pankaj Sharma',
          image: 'image_1675167512673.jpeg',
          intro: 'Ashtanga Yoga',
          time: '',
          price: '',
        },
        {
          name: 'Taniya',
          image: 'image_1675243508012.jpg',
          intro: 'Hatha/ Yoga Therapy',
          time: '',
          price: '',
        },
        {
          name: 'Shivam Joshi',
          image: 'image_1673271925503.jpeg',
          intro: 'Pranayama',
          time: '',
          price: '',
        },
        {
          name: 'Ksenia Rasapriya Bodhi Ji',
          image: 'image_1673271882991.jpg',
          intro: 'Yoga Anatomy',
          time: '',
          price: '',
        },
      ];
    } else if (this.slug == '200-hours-yoga-teacher-training-online') {
      this.courseMentor = [
        {
          name: 'Acharya Prashant Jakhmola',
          image: 'image_1673271873934.jfif',
          intro: 'Morning Sadhana',
          time: '',
          price: '',
        },
        {
          name: 'Swami Atmatattwananda Sarawati',
          image: 'image_1673271849951.jpg',
          intro: 'Yoga Philosophy',
          time: '',
          price: '',
        },
        {
          name: 'Shivam Joshi',
          image: 'image_1673271925503.jpeg',
          intro: 'Pranayama',
          time: '',
          price: '',
        },
      ];
    }
  }

  addToCart(event: Event, id?: number): void {
    event.preventDefault();
    if (id != undefined) {
      const mentor = this.courseMentor.find((i) => i.id == id);
      this.course = {
        id: id,
        title:
          mentor?.intro == 'Intermediate Alignment Based Class'
            ? mentor?.name + ' Intermediate Alignment Based Class'
            : mentor?.name + ' online yoga class',
        shortDescription:
          mentor?.time +
          (mentor?.time1 != undefined ? ', ' + mentor?.time1 : '') +
          (mentor?.time2 != undefined ? ', ' + mentor?.time2 : ''),
        priceINR:
          mentor?.priceInIndian != undefined ? mentor?.priceInIndian : 0,
        priceUSD: mentor?.priceInUSD != undefined ? mentor?.priceInUSD : 0,
        quantity: 1,
        priceInfo: mentor?.price,
      };
    }

    if (this.course != undefined) {
      this.cartService.addItem(this.course);
    }
    // this.router.navigate(['/add-to-cart']);
    this.router.navigate(['/proceed-payment']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

interface mentorTimings {
  name: string;
  intro: string;
  description?: string | SafeHtml;
  time: string;
  time1?: string;
  time2?: string;
  price: string;
  priceInIndian?: number;
  priceInUSD?: number;
  image: string;
  id?: number;
}
