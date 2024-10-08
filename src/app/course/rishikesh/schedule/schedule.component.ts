import { CommonModule } from '@angular/common';
import { Component, OnInit,Input, SimpleChanges  } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  @Input() data:any
  eventList:any=[];
  slug:any='';
  title:any='';
  constructor(private router:Router,private activatedRoute:ActivatedRoute) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;

    // if(this.slug == '100-hours-yoga-teacher-training-in-rishikesh'){
    //   this.eventList = []
    // }
    // else if(this.slug == '200-hours-yoga-teacher-training-in-rishikesh'){
    //   this.eventList = [
    //     {
    //       title:'200 Hour Yoga Teacher Training in Rishikesh',
    //       subTitle:'Hatha | Ashtanga | Meditation | Pranayama',
    //       trainer:'Anuj',
    //       time:'4:00 PM - Orientation Ceremony ',
    //       date:'August 3, 2024 - August 30, 2024',
    //       mode:'In- School at Rishikesh',
    //       perk:'Yoga Alliance Certification',
    //       redirectUrl:'/200-hours-yoga-teacher-training-in-rishikesh',
    //       space:'5 spaces Available'
    //     },
    //     {
    //       title:'200 Hour Yoga Teacher Training in Rishikesh',
    //       subTitle:'Hatha | Ashtanga | Meditation | Pranayama',
    //       trainer:'Anuj',
    //       time:'4:00 PM - Orientation Ceremony ',
    //       date:'September 3, 2024 – September 30, 2024',
    //       mode:'In- School at Rishikesh',
    //       perk:'Yoga Alliance Certification',
    //       redirectUrl:'/200-hours-yoga-teacher-training-in-rishikesh',
    //       space:'9 spaces Available'
    //     },
    //     {
    //       title:'200 Hour Yoga Teacher Training in Rishikesh',
    //       subTitle:'Hatha | Ashtanga | Meditation | Pranayama',
    //       trainer:'Anuj',
    //       time:'4:00 PM - Orientation Ceremony ',
    //       date:'October 3, 2024 – October 30, 2024 ',
    //       mode:'In- School at Rishikesh',
    //       perk:'Yoga Alliance Certification',
    //       redirectUrl:'/200-hours-yoga-teacher-training-in-rishikesh',
    //       space:'8 spaces Available'
    //     },
    //   ]
    // }

  }

  ngOnChanges(changes: SimpleChanges):void {
    // this.curriculum = changes['data'].currentValue.curr;
    if(changes['data'].currentValue){
      this.title = changes['data'].currentValue.title
    }

    if(changes['data'].currentValue?.events){
      this.eventList = changes['data'].currentValue?.events?.map((event:any) => ({
        title: changes['data'].currentValue.title,
        subTitle: 'Hatha | Ashtanga | Meditation | Pranayama',
        trainer: 'Anuj',
        time: '4:00 PM - Orientation Ceremony',
        date: `${new Date(event.startDate).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })} – ${new Date(event.endDate).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}`,
        mode: `In-School at ${changes['data'].currentValue.loc}`,
        perk: 'Yoga Alliance Certification',
        redirectUrl: `/${changes['data'].currentValue.url}`,
        space: `${event.seat} spaces Available`,
      })).slice(0, 3);
      if(this.slug == '200-hour-yoga-teacher-training-in-bali' ||
        this.slug == '300-hour-yoga-teacher-training-in-bali'){
          this.eventList = this.eventList.map((y: { trainer: string; }) =>{ 
            var mentor = 'Prashant J Yoga';
            return { ...y, trainer: mentor };
          });
        }
      
    }
    else{
      this.eventList = [];
    }

    //  console.log(this.eventList,'--');

  }

  ngOnInit() {
  }


}
