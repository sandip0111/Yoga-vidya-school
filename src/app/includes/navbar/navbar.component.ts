import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventBusService } from '../../event-bus.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginUser:any='';
  cartItemTotal: any = 0;
  menuItems: MenuItem[] = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '#', submenu: [
        { title: 'Yoga Vidya School', link: '/about-us' },
        { title: 'Prashant Ji', link: '/yoga-teacher/acharya-prashant-jakhmola/prashantjyoga'},
        { title: 'Yoga Teachers', link: '/mentors' },
      ]
    },
    { title: 'Yoga Teacher Training', link: '#', submenu: [
      { title: 'Get Certified in Rishikesh', link: '#', submenu: [
        { title: '100 Hour Yoga TTC', link: '/100-hours-yoga-teacher-training-in-rishikesh' },
        { title: '200 Hour Yoga TTC', link: '/200-hours-yoga-teacher-training-in-rishikesh' },
        { title: 'Formacion Intensiva de Yoga en Rishikesh India', link: '/200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh' },
        { title: '300 Hour Yoga TTC', link: '/300-hours-yoga-teacher-training-in-rishikesh' },
        { title: '200 Hour Yoga Teacher Training Scholarship In Rishikesh', link: '/200-hour-yoga-teacher-training-scholarship-in-rishikesh' },
        { title: '300 Hour Yoga Teacher Training Scholarship In Rishikesh', link: '/300-hour-yoga-teacher-training-scholarship-in-rishikesh' },
      ]},
      { title: 'Get Certified in Bali', link: '#' , submenu: [
        { title: '200 Hour Yoga TTC', link: '/200-hour-yoga-teacher-training-in-bali' },
        { title: '300 Hour Yoga TTC', link: '/300-hour-yoga-teacher-training-in-bali' },
      ]},
      { title: 'Get Certified in Kerala', link: '#' , submenu: [
        { title: '200 Hour Yoga TTC', link: '/200-hour-yoga-teacher-training-in-kerala-india' },
        { title: '300 Hour Yoga TTC', link: '/300-hour-yoga-teacher-training-in-kerala-india' },
      ]},
    ] },
    { title: 'Online Yoga Workshop', link: '#', submenu: [
      { title: 'Online Yoga Classes', link: '/online-yoga-classes' },
      { title: 'Prana Arambha', link: '/pranayama-course-online-pranarambha' },
      { title: 'Yoga Webinar Registration', link: '/webinar-registration' },
      { title: 'Breath Detox Yoga', link: '/breath-detox-yoga' },      
      { title: 'Foundations of Spirituality', link: '/foundation-of-spirituality-an-online-spiritual-awakening-course' },
      { title: 'Yoga Inversion Workshop', link: '/yoga-inversion-workshop-headstand' },
      { title: 'योग शास्त्र / योग ग्रंथ अध्यन', link: '/yoga-philosophy-course-free' },
      { title: 'Hip Opening Workshop', link: '/online-hip-opening-workshop' },
      { title: '200 Hours Yoga TTC', link: '/200-hours-yoga-teacher-training-online' },
      { title: 'Yogic Scriptures Study', link: '/yoga-history-and-philosophy' },

    ] },
        { title: 'Yoga Retreats', link: '#', submenu: [
          { title: 'Rishikesh', link: '#' , submenu: [
            { title: 'Yoga Retreats in Rishikesh', link: '/yoga-retreat-in-rishikesh-india' },
          ]},
          { title: 'Bali', link: '#' , submenu: [
            { title: 'Yoga Retreats in Bali', link: '/yoga-retreat-in-bali' },
          ]},
          { title: 'Mysore', link: '#' , submenu: [
            { title: 'Yoga Retreats in Mysore', link: '/yoga-retreat-in-mysore-india' },
          ]},
          { title: 'Peru', link: '#' , submenu: [
            { title: 'Yoga Retreats in Peru', link: '/yoga-retreat-in-peru' },
          ]},
          { title: 'Kerala', link: '#' , submenu: [
            { title: 'Yoga Retreats in Kerala', link: '/yoga-retreat-in-kerala-india' },
          ]},
        ] },
        { title: 'More Yoga Classes', link: '#', submenu: [
          { title: 'Pranayama Sadhana (21 days)', link: '/pranic-purification' },
          { title: '21 Days Ashtanga Yoga Immersion', link: '/21-days-ashtanga-yoga-immersion' },
          { title: 'Pranayama Therapy Course Online', link: '/pranayama-therapy-course-online' },
          { title: 'Adjustment & Alignment', link: '/adjustment-and-alignment' },
          { title: 'Adjustment & Alignment Level 2', link: '/adjustment-and-alignment-level-2' },
          { title: 'Yoga Teacher Training in India', link: '/yoga-teacher-training-in-india' },
          { title: 'Drop-in Yoga Classes', link: '/drop-in-yoga-classes' },
          { title: 'Yoga for Weight Loss', link: '/yoga-for-weight-loss' },

        ] }
  ];
  loginButton: MenuItem = { title: 'Login', link: '/login', iconClass: 'fas fa-lock' };
  constructor(private eventBus: EventBusService, private cartService: CartService){

  }
  ngOnInit(): void {
    var items = this.cartService.getItems();
    this.cartItemTotal = items.reduce((total, item) => total + item.quantity, 0);
    this.eventBus.on('cart-icon', (data) => {
      this.cartItemTotal = data.message;
    });
    // console.log(this.menuItems,'--');
    if (typeof sessionStorage !== "undefined") {
      this.loginUser = sessionStorage.getItem('loginId');
    }
  }
  preventCollapse(event: MouseEvent) {
    event.stopPropagation();
  }



  logOut() {
    if (typeof sessionStorage !== "undefined") {
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
}
