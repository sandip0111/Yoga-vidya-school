import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventBusService } from '../../event-bus.service';
import { CartService } from '../../cart.service';
import { s3Bucket } from '../../enum/s3Bucket';
import { routeEnum } from '../../enum/routes';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loginUser: string | null = null;
  cartItemTotal: any = 0;
  menuItems: MenuItem[] = [];
  loginButton: MenuItem = {
    title: '',
    link: '',
    iconClass: '',
    isShow: false,
  };
  constructor(
    private eventBus: EventBusService,
    private cartService: CartService
  ) {
    if (typeof sessionStorage !== 'undefined') {
      this.loginUser = sessionStorage.getItem('loginId');
    }
  }
  s3Bucket = s3Bucket;
  ngOnInit(): void {
    this.assignStaticVal();
    var items = this.cartService.getItems();
    this.cartItemTotal = items.reduce(
      (total, item) => total + item.quantity,
      0
    );
    this.eventBus.on('cart-icon', (data) => {
      this.cartItemTotal = data.message;
    });
  }
  assignStaticVal() {
    if (this.loginUser) {
      this.loginButton = {
        title: '',
        link: '',
        iconClass: '',
        isShow: false,
      };
    } else {
      this.loginButton = {
        title: 'Login',
        link: '/login',
        iconClass: 'fas fa-lock',
        isShow: true,
      };
    }
    this.menuItems = [
      { title: 'Home', link: '/' },
      {
        title: 'About',
        link: '#',
        submenu: [
          { title: 'Yoga Vidya School', link: '/about-us' },
          {
            title: 'Prashant Ji',
            link: '/yoga-teacher/acharya-prashant-jakhmola/prashantjyoga',
          },
          { title: 'Yoga Teachers', link: '/mentors' },
        ],
      },
      {
        title: 'Yoga Teacher Training',
        link: '#',
        submenu: [
          {
            title: 'Get Certified in Rishikesh',
            link: '#',
            submenu: [
              {
                title: '100 Hour Yoga TTC',
                link: `/${routeEnum.rishikesh100}`,
              },
              {
                title: '200 Hour Yoga TTC',
                link: `/${routeEnum.rishkesh200}`,
              },
              {
                title: '300 Hour Yoga TTC',
                link: `/${routeEnum.rishikesh300}`,
              },
              // {
              //   title: 'Formacion Intensiva de Yoga en Rishikesh India',
              //   link: '/200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh',
              // },
              // {
              //   title: '200 Hour Yoga Teacher Training Scholarship In Rishikesh',
              //   link: '/200-hour-yoga-teacher-training-scholarship-in-rishikesh',
              // },
              // {
              //   title: '300 Hour Yoga Teacher Training Scholarship In Rishikesh',
              //   link: '/300-hour-yoga-teacher-training-scholarship-in-rishikesh',
              // },
            ],
          },
          {
            title: 'Get Certified in Bali',
            link: '#',
            submenu: [
              {
                title: '200 Hour Yoga TTC',
                link: '/200-hour-yoga-teacher-training-in-bali',
              },
              {
                title: '300 Hour Yoga TTC',
                link: '/300-hour-yoga-teacher-training-in-bali',
              },
            ],
          },
          // {
          //   title: 'Get Certified in Kerala',
          //   link: '#',
          //   submenu: [
          //     {
          //       title: '200 Hour Yoga TTC',
          //       link: '/200-hour-yoga-teacher-training-in-kerala-india',
          //     },
          //     {
          //       title: '300 Hour Yoga TTC',
          //       link: '/300-hour-yoga-teacher-training-in-kerala-india',
          //     },
          //   ],
          // },
        ],
      },
      {
        title: 'Online Yoga Programmes',
        link: '#',
        submenu: [
          { title: 'Online Yoga Classes', link: '/online-yoga-classes' },
          {
            title: 'Prana Arambha',
            link: '/pranayama-course-online-pranarambha',
          },
          {
            title: 'Pranayama Sadhana (21 days)',
            link: '/pranic-purification',
          },
          {
            title: '200 Hours Yoga TTC',
            link: '/200-hours-yoga-teacher-training-online',
          },
          { title: 'Yoga Webinar Registration', link: '/webinar-registration' },
          {
            title: 'Swara Sadhana',
            link: 'https://swaryoga.yogavidyaschool.com',
          },
          { title: 'Breath Detox Yoga', link: '/breath-detox-yoga' },
          {
            title: 'Foundations of Spirituality',
            link: '/foundation-of-spirituality-an-online-spiritual-awakening-course',
          },
          {
            title: 'योग शास्त्र / योग ग्रंथ अध्यन',
            link: '/yoga-philosophy-course-free',
          },
          // {
          //   title: 'Yoga Inversion Workshop',
          //   link: '/yoga-inversion-workshop-headstand',
          // },
          // { title: 'Hip Opening Workshop', link: '/online-hip-opening-workshop' },
          // {
          //   title: 'Yogic Scriptures Study',
          //   link: '/yoga-history-and-philosophy',
          // },
        ],
      },
      {
        title: 'Contact Us',
        link: 'contact-us',
      },
      {
        title: 'Blog',
        link: '/blogs',
      },
    ];
  }
  preventCollapse(event: MouseEvent) {
    event.stopPropagation();
  }

  logOut() {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem('loginId');
    }
    window.location.href = '/';
  }
}

interface MenuItem {
  title: string;
  link: string;
  submenu?: MenuItem[];
  iconClass?: string;
  isShow?: boolean;
}
