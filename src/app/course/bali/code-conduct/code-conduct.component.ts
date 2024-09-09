import { CommonModule } from '@angular/common';
import { Component, OnInit, SimpleChanges,Input } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-code-conduct',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-conduct.component.html',
  styleUrls: ['./code-conduct.component.css']
})
export class CodeConductComponent implements OnInit {
  @Input() data:any
  guidelines:item[] = [];
  cdData: any;
  slug:any='';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;
    if(this.slug == "100-hours-yoga-teacher-training-in-rishikesh"){
      this.guidelines = [];
    }
    if(this.slug == '200-hours-yoga-teacher-training-in-rishikesh'){
     this.guidelines = [
      // { text: "Students are expected to attend all classes except in case of emergencies." },
      // { text: "Students should wear comfortable clothing apt for their yoga classes. Wearing flashy and revealing clothes should be avoided at the yoga school campus." },
      // { text: "Uninformed absences will affect a student's performance." },
      // { text: "Students are expected to dedicate at least two hours daily to study for the course." },
      // { text: "The teaching literature is protected by copyright and any misuse will call upon a legal action." },
      // { text: "Smoking and alcohol are strictly prohibited on the school campus." },
      // { text: "Inform the kitchen staff in advance if you are going to skip your meal. This will help avoid wastage of food." },
      // { text: "Discipline and respect for teachers are paramount and should be adhered to." },
      // { text: "Before departing, students should submit their books, mats, and other equipment taken during the course." }
     ]
    }
  }

  ngOnChanges(changes: SimpleChanges):void {
    this.cdData = changes['data'].currentValue;
    // console.log(changes['data'],'--');

  }

  ngOnInit() {
  }



}

interface item{
  text:string
}
