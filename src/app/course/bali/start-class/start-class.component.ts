import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { feesStructureModel } from '../../../models/rishikesh';

@Component({
  selector: 'app-start-class',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-class.component.html',
  styleUrls: ['./start-class.component.css'],
})
export class StartClassComponent implements OnInit {
  @Input() data: feesStructureModel = new feesStructureModel();
  fees: feesStructureModel = new feesStructureModel();
  constructor() {}
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.fees = changes['data'].currentValue;
    console.log('test 2', this.fees);
  }
}
