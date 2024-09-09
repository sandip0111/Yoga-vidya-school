import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../../../webapi.service';
@Component({
  selector: 'app-workshops',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {
  workshops: workshop[] = [

  ]
  constructor(private webapiService:WebapiService) { }

  ngOnInit() {
    this.getAllOnlineEvents();
    this.getAllEvents();
  }


  getAllOnlineEvents() {
    this.webapiService.getAllOnlineEvents().subscribe((res: any) => {
      // console.log(res.data);

      // this.onlineEventList = res.data
    });
  }

  getAllEvents() {
    this.webapiService.getAllEvents().subscribe((res: any) => {
      // console.log(res.data);

      this.workshops = res.data
    });
  }

}

interface workshop{
  title: string;
  location: string;
  url: string;
  image: string;
  startDate:string
}
