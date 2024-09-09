import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import { StartClassComponent } from '../../bali/start-class/start-class.component';
import { ActivatedRoute,Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education-categories',
  standalone: true,
  imports: [CommonModule,StartClassComponent],
  templateUrl: './education-categories.component.html',
  styleUrls: ['./education-categories.component.css']
})
export class EducationCategoriesComponent implements OnInit {

  @Input() data:any
  slug: any='';
  eduCatLeft:any=[];
  eduCatRight:any=[];
  title:string='';
  noContent:boolean = false;
  fees:any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

    this.slug = this.activatedRoute.snapshot.routeConfig?.path;
    if(this.slug == '100-hours-yoga-teacher-training-in-rishikesh'){
      // this.eduCatLeft = ["Ashtanga Yoga 5 times week, covering complete primary series","Hatha Yoga 5 times a week, covering 60+ Asanas","types of Pranayama and Yogic Breath Work","10+ Meditation Techniques, Including Mindful and Dynamic Meditations"];
      // this.eduCatRight = ["Yogic Anatomy + Adjustments alignments from Day 1"," Every day insightful and engaging sessions of Yogic Philosophy and Yoga Ethics","Teaching Methodology, Sequencing and Demonstrations to become an inspiring yoga teacher","Ayurveda Sessions on body constitutions, ayurveda herbs to get healed without allopathy"];
      //  this.title = "100-Hours Yoga Teacher Training in Rishikesh"

       this.noContent = true;
    }
    else if(this.slug == '200-hours-yoga-teacher-training-in-rishikesh'){

      this.eduCatLeft = ["Ashtanga Yoga 5 times week, covering complete primary series","Hatha Yoga 5 times a week, covering 60+ Asanas","Multiple types of Pranayama and Yogic Breath Work","10+ Meditation Techniques, Including Mindful and Dynamic Meditations"];
      this.eduCatRight = ["Yogic Anatomy + Adjustments alignments from Day 1"," Every day insightful and engaging sessions of Yogic Philosophy and Yoga Ethics","Teaching Methodology, Sequencing and Demonstrations to become an inspiring yoga teacher","Ayurveda Sessions on body constitutions, ayurveda herbs to get healed without allopathy"];
      this.title = "200-Hours Yoga Teacher Training in Rishikesh";

    }
    else if(this.slug =='200-horas-de-formacioacuten-de-profesores-de-yoga-en-rishikesh'){
      this.noContent = true;
    }
    else if(this.slug == '300-hours-yoga-teacher-training-in-rishikesh'){
      this.eduCatLeft = ["Ashtanga Yoga 5 times week, covering complete primary series","Hatha Yoga 5 times a week, covering 60+ Asanas","Multiple types of Pranayama and Yogic Breath Work","10+ Meditation Techniques, Including Mindful and Dynamic Meditations"];
      this.eduCatRight = ["Yogic Anatomy + Adjustments alignments from Day 1"," Every day insightful and engaging sessions of Yogic Philosophy and Yoga Ethics","Teaching Methodology, Sequencing and Demonstrations to become an inspiring yoga teacher","Ayurveda Sessions on body constitutions, ayurveda herbs to get healed without allopathy"];
      this.title = "300-Hours Yoga Teacher Training in Rishikesh";

    }
    else if(this.slug == '200-hour-yoga-teacher-training-scholarship-in-rishikesh' || this.slug == '300-hour-yoga-teacher-training-scholarship-in-rishikesh'){
      this.noContent = true;
    }
    else if(this.slug == '200-hour-yoga-teacher-training-in-kerala-india' || this.slug == '300-hour-yoga-teacher-training-in-kerala-india'){
      this.noContent = true;
    }
    else if(this.slug == 'yoga-retreat-in-rishikesh-india' || this.slug == 'yoga-retreat-in-kerala-india'){
      this.noContent = true;
    }
    else if(this.slug == 'pranayama-therapy-course-online' || this.slug == 'adjustment-amp-alignment-level-1' || this.slug == 'adjustment-amp-alignment-level-2' || this.slug == 'yoga-teacher-training-in-india' || this.slug == 'drop-in-yoga-classes' || this.slug == 'pranic-purification' || this.slug == '21-days-ashtanga-yoga-immersion' || this.slug == 'yoga-for-weight-loss' || this.slug == 'online-hip-opening-workshop' || this.slug == '200-hours-yoga-teacher-training-online'){
      this.noContent = true;
    }
  }

  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges):void {
    this.fees = changes['data'].currentValue;
    // console.log(this.ytData,'--');

  }

}
