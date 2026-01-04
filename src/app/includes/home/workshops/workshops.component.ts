import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../../../webapi.service';
import { s3Bucket } from '../../../enum/s3Bucket';
@Component({
  selector: 'app-workshops',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {
  workshops: workshop[] = []
  s3Bucket = s3Bucket;
  constructor(private webapiService:WebapiService) { }

  ngOnInit() {
    this.getAllOnlineEvents();
    this.getAllEvents();
  }


  getAllOnlineEvents() {
    this.webapiService.getAllOnlineEvents().subscribe((res: any) => {
    });
  }

  getAllEvents() {
    this.webapiService.getAllEvents().subscribe((res: any) => {
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
