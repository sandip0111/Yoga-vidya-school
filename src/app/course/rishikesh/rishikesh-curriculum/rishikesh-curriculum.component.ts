import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rishikesh-curriculum',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './rishikesh-curriculum.component.html',
  styleUrls: ['./rishikesh-curriculum.component.css']
})
export class RishikeshCurriculumComponent implements OnInit {

  @Input() data:any;
  curriculum:any;
  selectedIndex:number = 0;
  slug: any = '';
  title:any='';
  isItPranicRoute= false;
  constructor(private activatedRoute: ActivatedRoute) {
     this.slug = this.activatedRoute.snapshot.routeConfig?.path;
     if(this.slug == "pranic-purification"){
        this.isItPranicRoute = true;
      }
   }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges):void {
    if(this.slug != "pranic-purification"){
      if(changes['data']?.currentValue){
        this.curriculum = changes['data']?.currentValue.curr;
        this.title = changes['data']?.currentValue.title
      }
    }
    

    //  console.log(changes['data'].currentValue);

  }
  openCloseTab(index:number){
    this.selectedIndex = index
  }

  registerClick() {
     window.open('https://www.yogavidyaschool.com/book-now', '_blank');
    
    }
}
