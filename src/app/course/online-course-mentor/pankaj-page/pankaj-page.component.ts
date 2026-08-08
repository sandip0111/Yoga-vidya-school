import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routeEnum } from '../../../enum/routes';
import { s3Bucket } from '../../../enum/s3Bucket';
import { CartService, CartItem } from '../../../cart.service';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-pankaj-page',
  standalone: true,
  imports: [],
  templateUrl: './pankaj-page.component.html',
  styleUrl: './pankaj-page.component.css',
})
export class PankajPageComponent {
  s3Bucket = s3Bucket;
  slugId: number = 0;
  mentor: any;
  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private seoService: SeoService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.slugId = +id;
    }
  }
  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Ashtanga & Alignment-Based Practice with Pankaj Ji | Yoga Vidya School',
      description: 'Master Ashtanga Yoga Vinyasa and posture alignment with senior master Pankaj Ji at Yoga Vidya School in Rishikesh. Online & in-person classes.',
      keywords: 'Pankaj Ji Yoga, Ashtanga Yoga Rishikesh, Asana Alignment, Ashtanga Vinyasa Teacher',
      url: `/pankaji/${this.slugId || 4}`
    });
    this.getTeachersData(routeEnum.online);
  }
  getTeachersData(slug: string) {
    this.cartService.getTeachersData(slug).subscribe({
      next: (res: any) => {
        this.mentor = res.find((t: any) => t.id == this.slugId);
      },
      error: (error) => {
        console.error('Failed to load teachers:', error);
      },
    });
  }
  addToCart(mentor: CartItem): void {
    if (mentor) {
      this.cartService.addToCartMentor(mentor);
    }
  }
}
