import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choose-us.component.html',
  styleUrls: ['./choose-us.component.css']
})
export class ChooseUsComponent implements OnInit {

  itemsLeft: items[] = [
    { title: 'Immersive Experience',text:'Engage in a deeply transformative journey at the heart of yoga s origin, providing an unparalleled immersive experience.', image: 'bullet.png' },
    { title: 'Scenic Location',text:'Enjoy the serene and picturesque setting in the foothills of the Himalayas, alongside the sacred Ganges River.', image: 'bullet.png' },
    { title: 'Authentic Tradition',text:'Experience yoga in its purest form, with teachings deeply rooted in ancient yogic traditions.', image: 'bullet.png' },
    { title: 'Comprehensive Curriculum',text:'Our curriculum covers beginner to advanced asana practice, meditation, pranayama, and philosophy, ensuring a well rounded education.', image: 'bullet.png' },
    { title: 'Holistic Approach',text:'Focus on self love, healing, and personal empowerment through our holistic training methods.', image: 'bullet.png' },
    { title: 'Transformative Path',text:'Our program transcends mere certification, offering a life changing experience that connects you to yoga s timeless wisdom.', image: 'bullet.png' },
  ];

  itemsRight: items[] = [
    { title: 'Benifits',text:'Benefit from Rishikesh centuries old spiritual legacy, enhancing your understanding and practice of yoga', image: 'bullet.png' },
    { title: 'Renowned Yoga Hub',text:'Train in a globally recognized center for yoga, drawing seekers and practitioners from around the world.', image: 'bullet.png' },
    { title: 'Modern Methodologies',text:'Embrace a blend of traditional wisdom and contemporary teaching techniques for a comprehensive learning experience.', image: 'bullet.png' },
    { title: 'Experienced Instructors',text:'Learn from seasoned teachers dedicated to nurturing your growth, both personally and professionally.', image: 'bullet.png' },
    { title: 'Spiritual Energy',text:'Immerse yourself in teachings imbued with the spiritual essence of Rishikesh, guiding your transformative journey.', image: 'bullet.png' },
    { title: 'Global Community',text:'Join a diverse and supportive community of yoga seekers from around the globe, fostering a sense of belonging and shared purpose.', image: 'bullet.png' },
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface items {
  title: string;
  text:string,
  image: string;
}
