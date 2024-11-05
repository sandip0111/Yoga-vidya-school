import { Component } from '@angular/core';
import { StartClassComponent } from '../bali/start-class/start-class.component';
import { ActivatedRoute,Router } from '@angular/router';
import { WebapiService } from '../../webapi.service';
import { CommonModule } from '@angular/common';
import { CartItem, CartService } from '../../cart.service';

@Component({
  selector: 'app-course-mentor',
  standalone: true,
  imports: [CommonModule,StartClassComponent],
  templateUrl: './course-mentor.component.html',
  styleUrl: './course-mentor.component.css'
})
export class CourseMentorComponent {
 slug:any = '';
 imageUrl:string = '';
 course?: CartItem;
 courseMentor:mentorTimings[]=[];
 isShowAddToCart: boolean = false;

  constructor(private cartService: CartService, private webapiService: WebapiService, private _activatedRoute: ActivatedRoute, private router: Router){
    this.slug = this._activatedRoute.snapshot.routeConfig?.path;
    this.imageUrl = this.webapiService.imageUrl;

    if(this.slug == 'online-yoga-classes'){
      this.isShowAddToCart = true;
      this.courseMentor = [
        {
          id: 1,
          name: "Anuj",
          image: "image_1695634116777.jpeg",
          intro: "",
          time:"5:30 AM - 6:30 AM (IST)",
          price:"Rs. 1999/USD 40",
          priceInIndian: 1999
        },
        {
          id: 2,
          name: "Acharya Prashant Jakhmola",
          image: "image_1673271873934.jfif",
          intro: "Morning Sadhana",
          time:"6:00 AM(IST) - Yoga Sadhana",
          time1:"7:30 AM(IST) - Advance Yoga",
          time2:"5:30 PM(IST) - Prayanama Sadhana",
          price:"Rs. 1499/USD 30",
          priceInIndian: 1499
        },
        {
          id: 3,
          name: "Shiva",
          image: "image_1718605139191.jpeg",
          intro: "Ashtanga Yoga",
          time:"4:00 PM – 5:00 PM (IST)",
          price:"Rs. 1499/ USD 30",
          priceInIndian: 1499
        },
        {
          id: 4,
          name: "Taniya",
          image: "image_1675243508012.jpg",
          intro: "Women Wellness",
          time:"5:30 PM – 6:30 PM (IST)",
          price:"Rs. 1499/USD 30",
          priceInIndian: 1499
        }
      ]
    }
    else if(this.slug == 'breath-detox-yoga' || this.slug == 'pranayama-course-online-pranarambha' || this.slug == 'yoga-inversion-workshop-headstand' || this.slug == 'yoga-philosophy-course-free' || this.slug == 'pranic-purification' || this.slug == '21-days-ashtanga-yoga-immersion' || this.slug == 'pranayama-therapy-course-online' || this.slug == 'adjustment-amp-alignment-level-1' || this.slug == 'adjustment-amp-alignment-level-2' || this.slug == 'yoga-teacher-training-in-india' || this.slug == 'drop-in-yoga-classes' || this.slug == 'yoga-for-weight-loss'){
      this.courseMentor = [
        {
          name: "Acharya Prashant Jakhmola",
          image: "image_1673271873934.jfif",
          intro: "Morning Sadhana",
          time:"",
          price:""
        }
      ]
    }
    else if(this.slug =='online-hip-opening-workshop' || this.slug == 'yoga-history-and-philosophy'){
       this.courseMentor = [
        {
          name: "Acharya Prashant Jakhmola",
          image: "image_1673271873934.jfif",
          intro: "Morning Sadhana",
          time:"",
          price:""
        },
        {
          name: "Swami Atmatattwananda Sarawati",
          image: "image_1673271849951.jpg",
          intro: "Yoga Philosophy",
          time:"",
          price:""
        },        
        {
          name: "Aparna Sharma",
          image: "image_1673271914610.jpeg",
          intro: "Meditation & Mantras",
         time:"",
          price:""
        },
        {
          name: "Pankaj Sharma",
          image: "image_1675167512673.jpeg",
          intro: "Ashtanga Yoga",
          time:"",
          price:""
        },
        {
          name: "Taniya",
          image: "image_1675243508012.jpg",
          intro: "Hatha/ Yoga Therapy",
          time:"",
          price:""
        },
        {
          name: "Shivam Joshi",
          image: "image_1673271925503.jpeg",
          intro: "Pranayama",
          time:"",
          price:""
        },
        {
          name: "Ksenia Rasapriya Bodhi Ji",
          image: "image_1673271882991.jpg",
          intro: "Yoga Anatomy",
          time:"",
          price:""
        }
       ]
    }
    else if(this.slug =='200-hours-yoga-teacher-training-online'){
      this.courseMentor = [
        {
          name: "Acharya Prashant Jakhmola",
          image: "image_1673271873934.jfif",
          intro: "Morning Sadhana",
          time:"",
          price:""
        },
        {
          name: "Swami Atmatattwananda Sarawati",
          image: "image_1673271849951.jpg",
          intro: "Yoga Philosophy",
          time:"",
          price:""
        },
        {
          name: "Shivam Joshi",
          image: "image_1673271925503.jpeg",
          intro: "Pranayama",
          time:"",
          price:""
        }
      ]
    }
  }

  addToCart(event: Event, id?: number): void {
    event.preventDefault();
    if(id != undefined){
      const mentor = this.courseMentor.find(i => i.id == id);
      this.course = {
        id: id,
        title: mentor?.name + " online class",
        shortDescription: mentor?.time + (mentor?.time1 != undefined ? (', '+ mentor?.time1) : "") + (mentor?.time2 != undefined ? (', '+ mentor?.time2) : ""),
        price: mentor?.priceInIndian != undefined ? mentor?.priceInIndian: 0,
        quantity: 1
       }
    }
   
   if(this.course != undefined){
	   this.cartService.addItem(this.course);
   };  
    this.router.navigate(['/add-to-cart']);
  }

}


interface mentorTimings {
  name: string;
  intro: string;
  time: string;
  time1?: string;
  time2?: string;
  price: string;
  priceInIndian?: number;
  image: string;
  id?: number;
}

