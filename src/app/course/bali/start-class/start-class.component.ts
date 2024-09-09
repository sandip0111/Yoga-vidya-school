import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-start-class',
  standalone : true,
  imports:[CommonModule],
  templateUrl: './start-class.component.html',
  styleUrls: ['./start-class.component.css']
})
export class StartClassComponent implements OnInit {
  @Input() data: any;
  fees:any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges):void {
    this.fees = changes['data'].currentValue;
  }


}
