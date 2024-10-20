import { CommonModule } from '@angular/common';
import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  @Input() data:any;
  openIndex: number | null = null;
  faqs: faq[] = [];
  slug: any = '';
  isPranicPage: boolean = false;
  is300BaliPage: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.slug = this.activatedRoute.snapshot.routeConfig?.path;    
  }

  toggleDescription(index: number) {
    if (this.openIndex === index) {
      this.openIndex = null; // Close the currently open item if it's clicked again
    } else {
      this.openIndex = index; // Open the new item and close any previously open item
    }
  }
  ngOnInit() {
    if(this.slug == "pranic-purification"){
      this.isPranicPage = true;
    }
    if(this.slug == '300-hour-yoga-teacher-training-in-bali'){
      this.is300BaliPage = true;
    }
  }
  ngOnChanges(changes: SimpleChanges):void {
    if(changes['data'].currentValue?.length > 0) {
      this.faqs = changes['data'].currentValue;
    }
    else{
      this.faqs = [];
    }
    if(this.faqs.length != 0){
      if(this.slug == "pranic-purification"){
        this.faqs = this.faqs.filter(i => i.title != "How to book this course?");
      }
    }
  }
}

interface faq {
  title: string;
  para: string;
}
