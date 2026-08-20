import { Component } from '@angular/core';
import { WebapiService } from '../webapi.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule,RouterLink,NgxPaginationModule,LazyLoadImageModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  public defaultImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
  loading: boolean = false;
  imageUrl: any
  blogList: any;
  p: number = 1;
  total: any;
  filter: any = {};
  constructor(private webapiService: WebapiService, private spinner: NgxSpinnerService, private router: Router, private seoService: SeoService) {

  }

  ngOnInit(): void {
    this.spinner.show();
    this.filter = {
      pageNo: 1,
      size: 10
    }
    this.imageUrl = this.webapiService.imageUrl;
    this.getAllBlogs();
    
  }

  getAllBlogs() {
    this.webapiService.getBlogs(this.filter).subscribe((res: any) => {
      this.blogList = res.data;
      this.total = res.total;
      this.spinner.hide();
    });
  }

  onTableDataChange(event: any) {
    this.spinner.show();
    this.filter.pageNo = event;
    this.getAllBlogs();
    this.p = event;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
