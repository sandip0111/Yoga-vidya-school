import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

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
  pranicDate?: string;
  pranicDuration?: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
     this.slug = this.activatedRoute.snapshot.routeConfig?.path;
     if(this.slug == "pranic-purification"){
        this.isItPranicRoute = true;
        const date = new Date("2025-07-24");
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'long' });
        this.pranicDate = `${day} ${month}`;
        this.pranicDuration = "7PM to 8PM (IST)";
        sessionStorage.setItem('pranicDate', date.toISOString());
        sessionStorage.setItem('pranicDuration', this.pranicDuration);
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
    if(this.slug != "pranic-purification"){
      window.open('https://www.yogavidyaschool.com/book-now', '_blank');
    } else{
      this.router.navigate(['checkout', this.slug]);
    }
     
    
    }
}
