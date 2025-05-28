import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports:[CommonModule,RouterModule],
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent implements OnInit {
  menuItems: MenuItem[] = [
    { title: 'Breath Detox', link: '/breath-detox-yoga' },
    { title: 'Prana Arambha', link: '/pranayama-course-online-pranarambha' },
    { title: 'Yoga Inversion', link: '/yoga-inversion-workshop-headstand' },
    { title: 'Yoga Retreats', link: '/yoga-retreat-in-rishikesh-india' },
    { title: 'Pranayama Sadhana (21 days)', link: '/pranic-purification' },
    { title: '21 Days Ashtanga', link: '/21-days-ashtanga-yoga-immersion' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
interface MenuItem {
  title: string;
  link: string;
}
