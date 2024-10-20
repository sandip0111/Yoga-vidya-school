import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  slug: any = '';
  isParnicPage = false;
  is300BaliPage = false;
  testimonials:testimonial[]=[];
  
  constructor(private activatedRoute: ActivatedRoute) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;
    if(this.slug == 'pranic-purification'){
      this.isParnicPage = true;
      this.testimonials = [
        {
          img:"https://my-s3-images-bucket.s3.amazonaws.com/images/testimonials-pexels-parv-choudhary-724334-3395599.jpg",
          name:"Neha",
          description:"Prashant ji is an awesome guru. He takes utmost care while teaching so that anyone with little yoga experience can understand. At the same time he will take care of highly experienced yogastudents",
          rating:5
        },
        {
          img:"https://my-s3-images-bucket.s3.amazonaws.com/images/testimonials-pexels-corentin-henry-1296863-9992716.jpg",
          name:"Mathew",
          description:"Pranayama classes with Prashant have left such a strong impression on me that I can hardly wait for something like this to happen again. In just one month, I have felt tremendous mental and psychological benefits; I truly noticed changes. It feels like I've started cleansing on a deeper level, emotionaly above all! I'm looking forward to more classes! Overall, I am extremely satisfied with your entire offering. You truly provide quality",
          rating:5
        }
      ]
    }
    else{
      this.testimonials = [
      {
        img:"https://my-s3-images-bucket.s3.amazonaws.com/images/EMMA_oig8ll.jpg",
        name:"Emma",
        description:"The liberty, the inside oneness and openess that I felt after Prashant's classes always fullfilled me. I could feel the energy rising as well as the expansion of my limits. It is with a deep work of precision, humor, gentleness and perseverance that he gives his class. Prashant allowed me to go deeper on my and others and open new pathways. He's on of those who inspire and stays next to you for time ahead. Thank Prashant to have align me in so many ways and brought me further on. See you soon",
        rating:5
      },
      {
        img:"https://my-s3-images-bucket.s3.amazonaws.com/images/ELINEKL_uynd0l.jpg",
        name:"Elinkel",
        description:"I believe Yoga Vidya School’s 200 hour yoga teacher training can change anybody's view on Yoga and its practice. The course teach you about real yogic lifestyle with its true meaning. The yoga teachers of this school have rich knowledge of all the aspects and principles of Yoga and goes deep into it to make it accessible to all level of students. Mantra and philosophy classes can give you a whole new energy. Another important factor that make this school the best, is its location away from the crowd of hotels and yoga schools of Rishikesh. The place is blessed with nature, making you feel like a real yoga retreat in jungle.",
        rating:5
      }
    ]
    }

    if(this.slug == '300-hour-yoga-teacher-training-in-bali'){
      this.is300BaliPage = true;
    }
   }

  ngOnInit() {
  }

}

interface testimonial{
  img:string;
  name:string;
  description:string;
  rating:number;
}
