import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tt-rishikesh',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tt-rishikesh.component.html',
  styleUrls: ['./tt-rishikesh.component.css']
})
export class TtRishikeshComponent implements OnInit {
  items: items[] = [
    { title: 'Multi-style courses with dedicated morning sessions on static practices hatha yoga while the evenings dedicated for ashtanga vinyasa with dynamic series of asana and consecutive practices', image: 'bullet.png' },
    { title: 'You will get well researched and expertly crafted curriculum of 14+ Subjects, covering all the aspects of Yogic Lifestyle.', image: 'bullet.png' },
    { title: 'Your will get trained under Inspirational Yoga Teachers with exceptional teaching experience, who are Yoga Sadhaks, dedicated yogis.', image: 'bullet.png' },
    { title: 'You will explore and understand the Bhagavadgita Gita, ancient yoga texts and scriptures written by greatest yogis and sages of India.', image: 'bullet.png' },
    { title: 'Important Yoga Philosophies, Mantras and Meditations to keep the positive energy awakened.', image: 'bullet.png' },
    { title: 'You get to learn the authentic source of yoga with clarity over the Yoga Myths and Misinformation available on Internet or anywhere.', image: 'bullet.png' },
    { title: 'In this best yoga school in Rishikesh, With Yogic Anatomy and Physiology, you will learn the details of the structure of human body, how it moves and reacts to each yogic movement while practicing, thus keeping you safe against injuries.', image: 'bullet.png' },
    { title: 'You will understand Yoga beyond Asanas and how to live it as a lifestyle.', image: 'bullet.png' },
    { title: 'Food and Sattvic Diet is source of our strength and energy, so you will learn about what to eat and what to avoid to support your practice.', image: 'bullet.png' },
    { title: 'You will learn to live a balanced life and to manage situations you encounter in your everyday life at home, office or anywhere.', image: 'bullet.png' },
    { title: 'You will become a Yoga Alliance Internationally Certified Yoga Teacher who will inspire the students with confident and clear instructions, appropriate adjustments and alignments and live yoga as an example for everyone.', image: 'bullet.png' },
  ];
  constructor() { }

  ngOnInit() {

  }

}
interface items {
  title: string;
  image: string;
}
