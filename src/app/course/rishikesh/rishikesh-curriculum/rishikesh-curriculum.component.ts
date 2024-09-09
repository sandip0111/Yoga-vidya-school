import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  title:any='';
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges):void {
    if(changes['data']?.currentValue){
      this.curriculum = changes['data']?.currentValue.curr;
      this.title = changes['data']?.currentValue.title
    }

    //  console.log(changes['data'].currentValue);

  }
  openCloseTab(index:number){
    this.selectedIndex = index
  }
}
