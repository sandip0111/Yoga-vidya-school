import { CommonModule } from '@angular/common';
import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
})
export class CurriculumComponent implements OnInit {
  @Input() data:any
  items: item[] = [];
  slug: any='';
  currData: any;
  title: any = '';
  is300Course= false;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path
    if(this.slug == '200-hour-yoga-teacher-training-in-bali'){

      this.items = [
        {
          image: 'https://placehold.co/50x50',
          title: 'Classical Hatha Yoga',
          para: '',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Ashtanga Vinyasa',
          para: '',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Pranayama and Breath',
          para: '',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Yogic Anatomy and Physiology',
          para: '',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Asana Alignment and Adjustments',
          para: '',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Yoga Darshan',
          para: '',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Mantra Yoga',
          para: '',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Dhyana',
          para: '',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Pratyahara - Yoga Nidra',
          para: '',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Shatkarma',
          para: '',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'History of Yoga',
          para: '',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Yogic Lifestyle',
          para: '',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Sanskrit',
          para: '',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Teaching Methodology',
          para: '',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Ayurveda',
          para: '',
        },
      ]

    }
    else if(this.slug == "300-hour-yoga-teacher-training-in-bali"){
      this.is300Course = true;
      this.items = [
        {
          image: 'https://placehold.co/50x50',
          title: 'Advanced Hatha Yoga',
          para: 'Delve deeper into Hatha Yoga, explore advanced asanas, and take on board its philosophy. Deepen your understanding of the mind-body connection and learn how to incorporate more challenging asanas into your practice while focusing on alignment, breath control, and mindfulness.',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Advanced Ashtanga Vinyasa',
          para: 'Learn the complete Primary Series of postures of advanced Ashtanga Yoga in the traditional Mysore style and allow yourself to progress at your own pace. Receive in-person attention and adjustments knowledge from the teachers at the asana clinic.',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Yoga philosophy',
          para: 'Learn about the philosophical framework of yoga before you move on to practise different asanas and yoga styles. Understand the importance of ethical principles in deepening making your physical and mental energy on a right path of yogic lifestyle. ',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Pranayama II',
          para: 'Have an in-depth understanding of the practice and theory of pranayama, the yogic science of breath control. Explore its advanced breathing techniques, their effects on the mind, body and emotions and how to incorporate them into our personal practice and teaching.',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Yogic Anatomy and Physiology II',
          para: 'Explore beyond the foundations of yogic anatomy and physiology and learn about the subtle energy channels and energy chakras, and their role in physical and spiritual well-being and their overall impact on the biomechanics.',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Yoga Darshan II',
          para: 'Explore deeper philosophical concepts and paras such as the Yoga Sutras of Patanjali. Gain a profound understanding of the yogic world, the nature of the mind, and the path to self-realisation.',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Dhyana Part II',
          para: 'Learn advanced meditation practices and learn in detail how to bring your mind to complete focus and attention. Explore different approaches to handling the mind and cultivating inner awareness. ',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Advanced Shatkarma',
          para: 'Shatkarmas are purification techniques in yoga and during the course, you get to learn about advanced practices like Neti (nasal cleansing), Tratak (gazing practices), and Kapalbhati (breathing exercise). Learn how these practices help in purifying the energy channels and physical mind and body.',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'History of Yoga',
          para: 'Encounter yourself with the history and culture of yoga and understand how it was nurtured back in the day. Learn the purposes and intentions behind yogic practices and bring in a profound impact on your physical, mental, and spiritual well-being.',
        },
        {
          image: 'https://placehold.co/50x50',
          title: 'Teaching Methodology II',
          para: 'Equip yourself with advanced teaching skills and techniques and learn how to design and structure Master-level yoga classes. Understand how to effectively communicate instructions, and provide individualised adjustments to your students while creating a supportive learning environment.',
        }
      ]

    }
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges):void {
    if(changes['data'].currentValue){
      this.currData = changes['data'].currentValue?.curr;
      this.title = changes['data'].currentValue?.title;
    }
    // console.log(this.feesData,'--');

  }
}



interface item {
  image: string;
  title: string;
  para: string;
}
