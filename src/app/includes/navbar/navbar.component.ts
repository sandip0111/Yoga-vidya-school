import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventBusService } from '../../event-bus.service';
import { CartService } from '../../cart.service';
import { s3Bucket } from '../../enum/s3Bucket';
import { routeEnum } from '../../enum/routes';
import { localstorageKey } from '../../enum/localstorage';

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
      this.loginUser = sessionStorage.getItem(localstorageKey.loginId);
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
            link: `/${routeEnum.rishikesh}`,
          },
          {
            title: 'Get Certified in Bali',
            link: `/${routeEnum.bali}`,
          },
          {
            title: 'Get Certified Online',
            link: '/200-hours-yoga-teacher-training-online',
          },
        ],
      },
      {
        title: 'Online Yoga Programmes',
        link: '#',
        submenu: [
          { title: 'Online Yoga Classes', link: '/online-yoga-classes' },
          {
            title: 'Pranic Purification',
            link: '/pranic-purification',
          },
          {
            title: 'Free Webinar',
            link: `/${routeEnum.freeWebiner}`,
          },
          {
            title: 'Foundations of Spirituality',
            link: '/foundation-of-spirituality-an-online-spiritual-awakening-course',
          },
          {
            title: 'योग शास्त्र / योग ग्रंथ अध्यन',
            link: '/yoga-philosophy-course-free',
          },
          {
            title: 'Pre-recorded Pranayama Courses',
            link: '/pre-recorded-pranayama-courses',
          },
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
      sessionStorage.removeItem(localstorageKey.loginId);
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
