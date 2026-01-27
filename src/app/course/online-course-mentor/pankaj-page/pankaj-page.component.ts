import { Component } from '@angular/core';
import { routeEnum } from '../../../enum/routes';
import { ActivatedRoute } from '@angular/router';
import { CartService, CartItem } from '../../../cart.service';
import { Title } from '@angular/platform-browser';
import { s3Bucket } from '../../../enum/s3Bucket';

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
    private titleService: Title,
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.titleService.setTitle(
      'Ashtanga & Alignment-Based Practice with Pankaj Ji',
    );
    if (id) {
      this.slugId = +id;
    }
  }
  ngOnInit(): void {
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
