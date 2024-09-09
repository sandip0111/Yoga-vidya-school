import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../../../webapi.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: blog[] = [

  ]
  imageUrl:string='';
  constructor(private webapiService: WebapiService) {
    this.imageUrl =this.webapiService.imageUrl;
   }

  ngOnInit() {
    this.getHomeBlog(4);
  }


  getHomeBlog(limit: any) {
    let val = {
      "limit": limit
    }
    this.webapiService.getHomeBlog(val).subscribe((res: any) => {
      // console.log(res);
      this.blogs = res.data;
    });
  }

}

interface blog {
  title: string;
  image: string;
  description: string;
  link: string;
  shortDesc:string
  slug: string;
}
