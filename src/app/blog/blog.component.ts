import { Component,Renderer2,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WebapiService } from '../webapi.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule,RouterLink,NgxPaginationModule,LazyLoadImageModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  public defaultImage = 'https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';
  loading: boolean = false;
  imageUrl: any
  blogList: any;
  p: number = 1;
  total: any;
  filter: any = {};
  constructor(private webapiService: WebapiService, private spinner: NgxSpinnerService, private title: Title, private meta: Meta, private router: Router, @Inject(DOCUMENT) private _document: Document, private _renderer2: Renderer2) {

  }

  ngOnInit(): void {
    this.spinner.show();
    this.filter = {
      pageNo: 1,
      size: 10
    }
    this.imageUrl = this.webapiService.imageUrl;
    this.getAllBlogs();
    setTimeout(() => {
      this.title.setTitle('Blogs');
      this.meta.updateTag({ name: 'keywords', content: 'Yoga Blogs, Yoga Techniques' });
      this.meta.updateTag({ name: 'description', content: 'Read quality Yoga Blogs online' });
      const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
      const link = this._document.querySelector('link[rel="canonical"]');
      this._renderer2.setAttribute(link, 'href', canonicalUrl);
    }, 1000)

  }

  getAllBlogs() {
    this.webapiService.getBlogs(this.filter).subscribe((res: any) => {
      this.blogList = res.data;
      this.total = res.total;
      this.spinner.hide();
    });
  }

  onTableDataChange(event: any) {
    this.filter.pageNo = event;
    this.getAllBlogs();
    this.p = event;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
