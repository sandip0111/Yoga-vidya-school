import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { WebapiService } from '../webapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { DomSanitizer } from '@angular/platform-browser';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { routeEnum } from '../enum/routes';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, LazyLoadImageModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css',
  host: { ngSkipHydration: 'true' },
})
export class BlogDetailComponent {
  public loading = false;
  public defaultImage =
    'https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';
  imageUrl: any;
  blogId: any;
  blogArr: any;

  constructor(
    private webapiService: WebapiService,
    private _activatedRoute: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    private spinner: NgxSpinnerService,
    private router: Router,
    @Inject(DOCUMENT) private _document: Document,
    private _renderer2: Renderer2,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      const canonicalUrl = 'https://www.yogavidyaschool.com' + this.router.url;
      const link = this._document.querySelector('link[rel="canonical"]');
      if (link) {
        this._renderer2.setAttribute(link, 'href', canonicalUrl);
      }
    }, 1000);
    this.spinner.show();
    this.imageUrl = this.webapiService.imageUrl;
    this._activatedRoute.params.subscribe((params) => {
      return (this.blogId = params['id']);
    });
    this.getBlogBySlug(this.blogId);
  }

  ngAfterViewChecked() {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }

  getBlogBySlug(slug: any) {
    this.loading = true;
    this.webapiService.getBlogBySlug(slug).subscribe((res: any) => {
      if (res.data.length < 1) {
        this.router.navigate(['/']);
        this.spinner.hide();
        return;
      }
      this.blogArr = res.data;
      this.title.setTitle(res?.data?.title);
      this.meta.updateTag({
        name: 'keywords',
        content: res?.data?.seokeywords,
      });
      this.meta.updateTag({
        name: 'description',
        content: res?.data?.seodescription,
      });
      this.spinner.hide();
    });
  }

  goToBlog() {
    this.router.navigate([`/${routeEnum.blogs}`]);
  }
}
