import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WebapiService } from '../../../webapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StartClassComponent } from '../../../course/bali/start-class/start-class.component';
import { routeEnum } from '../../../enum/routes';

@Component({
  selector: 'app-mentors',
  standalone: true,
  imports: [CommonModule, StartClassComponent],
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css'],
})
export class MentorsComponent implements OnInit {
  mentors: mentor[] = [];
  mentorLoop: number = 0;
  imageurl: string = '';
  slug: any = '';
  hideBtn = false;
  routeList = routeEnum;
  constructor(
    private webapiService: WebapiService,
    protected sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.imageurl = this.webapiService.imageUrl;
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;

    if (
      this.slug == '300-hours-yoga-teacher-training-in-rishikesh' ||
      this.slug == '100-hours-yoga-teacher-training-in-rishikesh' ||
      this.slug ==
        '200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh' ||
      this.slug == '200-hour-yoga-teacher-training-scholarship-in-rishikesh' ||
      this.slug == '300-hour-yoga-teacher-training-scholarship-in-rishikesh' ||
      this.slug == 'online-hip-opening-workshop' ||
      this.slug == 'yoga-history-and-philosophy' ||
      this.slug == '200-hour-yoga-teacher-training-in-kerala-india' ||
      this.slug == '300-hour-yoga-teacher-training-in-kerala-india' ||
      this.slug == 'yoga-retreat-in-rishikesh-india' ||
      this.slug == 'yoga-retreat-in-kerala-india' ||
      this.slug == 'pranayama-therapy-course-online' ||
      this.slug == 'yoga-teacher-training-in-india' ||
      this.slug == 'drop-in-yoga-classes'
    ) {
      this.mentors = [
        {
          name: 'Swami Atmatattwananda Sarawati',
          picture: 'image_1673271849951.jpg',
          intro: 'Yoga Philosophy',
          slug: 'swami-atmatattwananda-saraswati',
        },
        {
          name: 'Acharya Prashant Jakhmola',
          picture: 'image_1673271873934.jfif',
          intro: 'Pranayama, Asanas ',
          slug: 'acharya-prashant-jakhmola',
        },

        {
          name: 'Aparna Sharma',
          picture: 'image_1673271914610.jpeg',
          intro: 'Meditation & Mantras',
          slug: 'aparna-sharma',
        },
        {
          name: 'Pankaj Sharma',
          picture: 'image_1675167512673.jpeg',
          intro: 'Ashtanga Yoga',
          slug: 'pankaj-sharma',
        },
        {
          name: 'Taniya',
          picture: 'image_1675243508012.jpg',
          intro: 'Hatha/ Yoga Therapy',
          slug: 'taniya',
        },
        {
          name: 'Shivam Joshi',
          picture: 'image_1673271925503.jpeg',
          intro: 'Pranayama',
          slug: 'shivam-joshi',
        },
        {
          name: 'Ksenia Rasapriya Bodhi Ji',
          picture: 'image_1673271882991.jpg',
          intro: 'Yoga Anatomy',
          slug: 'ksenia-rasapriya-bodhi-ji',
        },
      ];
    } else if (
      this.slug == '200-hour-yoga-teacher-training-in-bali' ||
      this.slug == '300-hour-yoga-teacher-training-in-bali'
    ) {
      this.mentors = [
        {
          name: 'Swami Atmatattwananda Sarawati',
          picture: 'image_1673271849951.jpg',
          intro: 'Yoga Philosophy',
          slug: 'swami-atmatattwananda-saraswati',
        },
        {
          name: 'Acharya Prashant Jakhmola',
          picture: 'image_1673271873934.jfif',
          intro: 'Pranayama, Asanas ',
          slug: 'acharya-prashant-jakhmola',
        },
        {
          name: 'Ksenia Rasapriya Bodhi Ji',
          picture: 'image_1673271882991.jpg',
          intro: 'Yoga Anatomy',
          slug: 'ksenia-rasapriya-bodhi-ji',
        },
      ];
    } else if (
      this.slug == 'breath-detox-yoga' ||
      this.slug == 'pranayama-course-online-pranarambha' ||
      this.slug == 'yoga-inversion-workshop-headstand' ||
      this.slug == 'yoga-philosophy-course-free' ||
      this.slug == '21-days-ashtanga-yoga-immersion' ||
      this.slug == 'adjustment-amp-alignment-level-1' ||
      this.slug == 'adjustment-amp-alignment-level-2' ||
      this.slug == '21-days-ashtanga-yoga-immersion' ||
      this.slug == 'yoga-retreat-in-bali' ||
      this.slug == 'yoga-retreat-in-mysore-india' ||
      this.slug == 'yoga-retreat-in-peru'
    ) {
      this.mentors = [
        {
          name: 'Acharya Prashant Jakhmola',
          picture: 'image_1673271873934.jfif',
          intro: 'Pranayama, Asanas ',
          slug: 'acharya-prashant-jakhmola',
        },
      ];
    } else if (this.slug == 'pranic-purification') {
      this.hideBtn = true;
      this.mentors = [
        {
          name: 'Acharya Prashant Jakhmola',
          picture: 'image_1673271873934.jfif',
          intro: 'Pranayama, Asanas ',
          slug: 'acharya-prashant-jakhmola',
        },
      ];
    } else if (this.slug == 'online-yoga-classes') {
      this.mentors = [
        // {
        //   name: "Acharya Prashant Jakhmola",
        //   picture: "image_1673271873934.jfif",
        //   intro: "Pranayama, Asanas ",
        //   slug: "acharya-prashant-jakhmola"
        // },
        // {
        //   name: "Anuj",
        //   picture: "image_1695634116777.jpeg",
        //   intro: "",
        //   slug: "anuj"
        // },
        // {
        //   name: "Taniya",
        //   picture: "image_1675243508012.jpg",
        //   intro: "Hatha/ Yoga Therapy",
        //   slug: "taniya"
        // },
        // {
        //   name: "Shiva",
        //   picture: "image_1718605139191.jpeg",
        //   intro: "Ashtanga Yoga",
        //   slug: "shiva"
        // }
      ];
    } else if (this.slug == '200-hours-yoga-teacher-training-online') {
      this.mentors = [
        {
          name: 'Acharya Prashant Jakhmola',
          picture: 'image_1673271873934.jfif',
          intro: 'Pranayama, Asanas ',
          slug: 'acharya-prashant-jakhmola',
        },
        {
          name: 'Swami Atmatattwananda Sarawati',
          picture: 'image_1673271849951.jpg',
          intro: 'Yoga Philosophy',
          slug: 'swami-atmatattwananda-saraswati',
        },
        {
          name: 'Shivam Joshi',
          picture: 'image_1673271925503.jpeg',
          intro: 'Pranayama',
          slug: 'shivam-joshi',
        },
      ];
    } else if (this.slug == '') {
      this.mentors = [
        {
          name: 'Swami Atmatattwananda Sarawati',
          picture: 'image_1673271849951.jpg',
          intro: 'Yoga Philosophy',
          slug: 'swami-atmatattwananda-saraswati',
        },
        {
          name: 'Reema Saikia Ji',
          picture: 'image_1673271861555.jpg',
          intro: 'Meditation / Yoga Nidra',
          slug: 'reema-saikia-ji',
        },
        {
          name: 'Acharya Prashant Jakhmola',
          picture: 'image_1673271873934.jfif',
          intro: 'Pranayama, Asanas ',
          slug: 'acharya-prashant-jakhmola',
        },
        {
          name: 'Ksenia Rasapriya Bodhi Ji',
          picture: 'image_1673271882991.jpg',
          intro: 'Yoga Anatomy',
          slug: 'ksenia-rasapriya-bodhi-ji',
        },
      ];
    } else if (this.slug == 'yoga-for-weight-loss') {
      this.mentors = [
        {
          name: 'Shubham Uniyal',
          picture: 'image_1698039862587.jpg',
          intro: 'Hath Yoga',
          slug: 'shubham-uniyal',
        },
      ];
    } else if( this.slug == this.routeList.rishkesh200 ) {
      this.mentors = [
        {
          name: 'Swami Atmatattwananda Sarawati',
          picture: 'image_1673271849951.jpg',
          intro: 'Yoga Philosophy',
          slug: 'swami-atmatattwananda-saraswati',
        },
        {
          name: 'Aparna Sharma',
          picture: 'image_1673271914610.jpeg',
          intro: 'Meditation & Mantras',
          slug: 'aparna-sharma',
        },
        {
          name: 'Pankaj Sharma',
          picture: 'image_1675167512673.jpeg',
          intro: 'Ashtanga Yoga',
          slug: 'pankaj-sharma',
        },
        {
          name: 'Taniya',
          picture: 'image_1675243508012.jpg',
          intro: 'Hatha/ Yoga Therapy',
          slug: 'taniya',
        },
        {
          name: 'Shivam Joshi',
          picture: 'image_1673271925503.jpeg',
          intro: 'Pranayama',
          slug: 'shivam-joshi',
        },
      ];
    }

    this.mentors.forEach((item) => {
      switch (item.name) {
        case 'Swami Atmatattwananda Sarawati':
          item.instaLink = 'https://www.instagram.com/atmatattwananda';
          break;

        case 'Acharya Prashant Jakhmola':
          item.instaLink = 'https://www.instagram.com/prashantjyoga/';
          item.youTubeLink = 'https://www.youtube.com/@prashantjyoga';
          break;

        case 'Ksenia Rasapriya Bodhi Ji':
          item.instaLink = 'https://www.instagram.com/ksenia_rasapriya/';
          break;

        case 'Aparna Sharma':
          item.instaLink = 'https://www.instagram.com/aparnashanti_yoga';
          break;

        case 'Shivam Joshi':
          item.instaLink =
            'https://www.instagram.com/traditional_yoga_with_shivam';
          break;

        case 'Taniya':
          item.instaLink = 'https://www.instagram.com/yogawith_taniya';
          break;

        case 'Anuj':
          item.instaLink = 'https://www.instagram.com/sadhakanuj';
          break;

        case 'Shiva':
          item.instaLink = 'https://www.instagram.com/yogacharya_shiva';
          break;
      }
    });
  }

  ngOnInit() {
    // if (sessionStorage.getItem('hmloop')) {
    //   if (sessionStorage.getItem('hlimit') == sessionStorage.getItem('hmloop')) {
    //     this.mentorLoop = 1;
    //   }
    //   else {
    //     this.mentorLoop = Number(sessionStorage.getItem('hmloop')) + 1;
    //   }
    // }
    // this.getHomeMentors(this.mentorLoop);
  }

  // getHomeMentors(limit: any) {
  //   let val = {
  //     "limit": limit
  //   }
  //   this.webapiService.getHomeMentors(val).subscribe((res: any) => {
  //     console.log(res);
  //     this.mentors = res.data;
  //     sessionStorage.setItem('hmloop', res.data[res.data.length - 1]?.sortBy);
  //     sessionStorage.setItem('hlimit', res.total);
  //   });
  // }
}

interface mentor {
  name: string;
  picture: string;
  slug: string;
  intro: string;
  instaLink?: string;
  youTubeLink?: string;
}
