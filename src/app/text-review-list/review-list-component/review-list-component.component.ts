import { Component, AfterViewInit,ElementRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-review-list-component',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './review-list-component.component.html',
  styleUrl: './review-list-component.component.css'
})
export class ReviewListComponentComponent  {
  reviews = [
    {
      author: 'Hello Prashant Sir Ji,',
      content: `I came to know about you this year, around March, through your YouTube video on Surya Namaskar. Couldn’t learn in person, hence joined your yoga class in April. Since then, I’ve learned from other teachers of Yoga Vidya School as well and from outside.
  
      The key 🗝️ things which I observed about you and your teaching style are:
      1. You are an amazing Sadhak, the key quality of a good yoga teacher. You are so disciplined, balanced, and grounded at the same time.
      2. You inspire everyone and teach practices verified through your own experience.
      3. Most importantly, you teach yoga as a "unique spiritual journey" and not merely a physical exercise. You transform the same asanas into meditative practices by keeping the body still and focusing on drishti and breathing, making it pranayama.`,
      regards: 'Thank you!',
    },
    {
      author: 'I am truly grateful and blessed to found you Guru ji 🙏 🙏 🙏 🙏',
      content: 'Thanks a lot, please keep teaching us and letting us grow under your guidance 🙏🙏🙏🙏',
      regards: 'God bless you And your Family Prashant ji',
    },
    {
      author: 'Pranam Guruji,',
      content: `I wanted to express my heartfelt gratitude for taking the time to create such a beautiful pranayama sadhana for us. As your student for many years, I regret not being able to join the live classes because of timing issue, but I've been diligently practicing with the recordings.
      
      I'm thrilled to share that I haven't missed a single day of sadhana, and I've noticed significant progress in my breathing and ability to sit for longer periods. I can now complete my entire 30-40 minute sadhana in padmasana without any discomfort.`,
      regards: 'Thank you for your guidance and wisdom. Your teachings have had a profound impact on my life.',
    },
    {
      author: '',
      content: `Having managed Endometriosis Stage 4 with yoga asana and pranayama for five years,
I feel incredibly grateful to live a pain-free life. While recovering from a major surgery,
I am unable to practice certain techniques like Kumbhak and holding the navel and pelvic area, Thank you for your guidance and wisdom. Your teachings have had a profound impact on my life.
I know these practices will stay with me and enrich my future sadhana once I’ve fully recovered. but  
I am truly grateful for this opportunity to learn from you and look forward to continuing this journey of growth.`,
      regards: 'Thank you Guruji.',
    },
    {
      author: 'Pranam Guruji',
      content: `I couldn't get a chance to share my experience in the session today, but I would go
ahead and share it here. Joining the Pranayama Sadhana with you has been a transformative experience.
 As a yoga instructor and practitioner, I felt deeply connected to you after attending your Yoga 
Sutra classes, where you served not just as a teacher but as a mentor and guide.
 I joined this Sadhana to deepen my practice and truly understand the intricacies of breathwork, 
recognizing how many people overlook the basics before starting any yoga practice (Specially pranayama).`,
      regards: 'Thank you very much',
    },
    {
      author:'Namaste sir.',
      content:`pahle to apko dhanyavad. Apke sath mera 3rd  session hai.Physical level pe to labh ho hi rahe hai 
lekin pranayam ke jariye inner journey kya hai, apke is abhyas se pata chal raha hai. Itni sahajta 
or saraltase ap abhyas hamse karva rahe hai .Apke har vedio ko follow karti hu . Bahot badi Sadhana 
hai yog abhyas ki.Apke guidance me abhyas ko adhik drudh  karne ka prayas chal raha hai.`,
      regards:'Thank you once again.'

    }
  ];
  combinedReviews: any[] = [];
  speed = 30; // Speed in seconds

  @ViewChild('scrollContent') scrollContent!: ElementRef<HTMLDivElement>;

  constructor() {
    // Duplicate reviews for seamless scrolling
    this.combinedReviews = [...this.reviews, ...this.reviews];
  }

  // Pause scrolling
  pauseScroll() {
    if (this.scrollContent) {
      this.scrollContent.nativeElement.style.animationPlayState = 'paused';
    }
  }

  // Resume scrolling
  resumeScroll() {
    if (this.scrollContent) {
      this.scrollContent.nativeElement.style.animationPlayState = 'running';
    }
  }
 
}
