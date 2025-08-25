import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  jsonData,
  mentorTimings,
} from '../../course-mentor/course-mentor.component';
import { CartService } from '../../../cart.service';
import { s3Bucket } from '../../../enum/s3Bucket';

@Component({
  selector: 'app-anuj-page',
  standalone: true,
  imports: [],
  templateUrl: './anuj-page.component.html',
  styleUrl: './anuj-page.component.css',
})
export class AnujPageComponent implements OnInit {
  mentor?: mentorTimings;
  slugId: number = 0;
  title: string = '';
  heroImage: string = '';
  s3Bucket = s3Bucket;
  about: string = '';
  constructor(private route: ActivatedRoute, private cartService: CartService) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.slugId = +id;
    }
  }
  ngOnInit(): void {
    this.mentor = jsonData.find((m) => m.id == this.slugId);
    if (this.slugId == 2) {
      this.title = 'Therapeutic Hatha Yoga - Anuj Pareek';
      this.heroImage = s3Bucket.anujHero1;
      this.about = `Anuj class is based on Mobility to recover from long years of spinal & Hip
      compression from long hours of sitting at a desk job or from your
      sedentary lifestyle. Classes are designed with Hatha yoga 3 series of
      sequences which include backbending, hip opening, inversion and
      therapeutic methods. Classes are very progressive and you won't see it as
      repetitive, every month there is a new offering curated with personal
      attention on each student's need, also largely focused on self practice
      and how to approach practice on your own on the days off.`;
    } else {
      this.title = 'Intermediate Alignment Based Class - Anuj Pareek';
      this.heroImage = s3Bucket.anujHero2;
      this.about = `These classes are designed for practitioners who want to move beyond the basics and take their practice to the next level. You'll be guided through advanced preparations for asanas, including arm balances, inversions, and other complex postures. The sessions also include mobility drills and therapeutic techniques to help release physical tension and improve range of motion—supporting your journey into deeper and safer practice.`;
    }
  }
  addToCart(mentor?: mentorTimings): void {
    if (mentor) {
      this.cartService.addToCartMentor(mentor);
    }
  }
}
