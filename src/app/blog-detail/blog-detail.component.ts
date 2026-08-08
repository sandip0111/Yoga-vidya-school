import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebapiService } from '../webapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DomSanitizer } from '@angular/platform-browser';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { routeEnum } from '../enum/routes';
import { SeoService } from '../services/seo.service';

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
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
  imageUrl: any;
  blogId: any;
  blogArr: any;

  constructor(
    private webapiService: WebapiService,
    private _activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private router: Router,
    public sanitizer: DomSanitizer,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.imageUrl = this.webapiService.imageUrl;
    this._activatedRoute.params.subscribe((params) => {
      this.blogId = params['id'];
      if (this.blogId) {
        this.getBlogBySlug(this.blogId);
      }
    });
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
      const blogData = res.data[0] || res.data;
      const blogTitle = blogData?.title || 'Yoga Article';
      const blogDescription = blogData?.seodescription || blogData?.shortDescription || 'Read authentic yoga insights from Yoga Vidya School.';
      const blogKeywords = blogData?.seokeywords || 'Yoga Blog, Yoga Article';
      const blogImage = blogData?.image ? `${this.imageUrl}/${blogData.image}` : undefined;

      this.seoService.updateSeo({
        title: blogTitle,
        description: blogDescription,
        keywords: blogKeywords,
        image: blogImage,
        url: `/blog/${slug}`,
        type: 'article',
        schema: {
          '@context': 'https://schema.org',
          '@type': 'Article',
          'headline': blogTitle,
          'description': blogDescription,
          'image': blogImage,
          'publisher': {
            '@type': 'Organization',
            'name': 'Yoga Vidya School',
            'logo': {
              '@type': 'ImageObject',
              'url': 'https://d29rwrqvux6m5p.cloudfront.net/images/Yoga-Vidya-Logo.svg'
            }
          }
        }
      });

      this.spinner.hide();
    });
  }

  goToBlog() {
    this.router.navigate([`/${routeEnum.blogs}`]);
  }
}
