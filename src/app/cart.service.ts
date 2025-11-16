import { Injectable } from '@angular/core';
import { EventBusService } from './event-bus.service';
import { Router } from '@angular/router';
import {
  jsonData,
  mentorTimings,
} from './course/course-mentor/course-mentor.component';
import { razorPayReturnModel } from './models/checkout';
import { WebapiService } from './webapi.service';
import { routeEnum } from './enum/routes';
import { catchError, map, Observable, of } from 'rxjs';

export interface CartItem {
  id: number;
  title?: string;
  shortDescription?: string;
  price: razorPayReturnModel[];
  quantity: number;
  priceInfo?: string;
  description?: string;
  name: string;
  teacher?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey = 'cartItems';
  private currency = 'currency';
  private items: CartItem[] = [];
  jsonData: any;

  constructor(
    private eventBus: EventBusService,
    private router: Router,
    private webapiService: WebapiService
  ) {
    this.loadCart();
  }

  getTeachersData(slug: string): Observable<any[]> {
    let data = { slug: slug };
    return this.webapiService.getCourseById(data).pipe(
      map((response: any) => {
        this.jsonData = response.data[0].teachersData.filter(
          (t: any) => t.isActive
        );
        return this.jsonData;
      }),
      catchError((error) => {
        console.error('Error:', error);
        return of([]);
      })
    );
  }

  private saveCart(): void {
    localStorage.setItem(this.cartKey, JSON.stringify(this.items));
  }

  setCurrency(currency: string) {
    localStorage.setItem(this.currency, currency);
  }

  getCurrency() {
    return localStorage.getItem(this.currency);
  }

  private loadCart(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const savedCart = localStorage.getItem(this.cartKey);
      this.items = savedCart ? JSON.parse(savedCart) : [];
      this.items.forEach((item) => {
        this.getTeachersData(routeEnum.online).subscribe(
          (dataArray) => {
            let data = dataArray.find((course) => {
              return course.id === item.id;
            });
            if (data != null) {
              item.id = data.id;
              item.title = `${data.name} - ${data.teacher}`;
              item.shortDescription = data.description ?? '';
              item.price = data.price;
              item.quantity = 1;
            }
          },
          (err) => {
            console.error('Failed to load teacher data for cart item', err);
          }
        );
      });
    }
  }

  getItems(): CartItem[] {
    return this.items;
  }

  addItem(item: any): void {
    let existingItemIndex = this.items.findIndex((i) => i.id === item.id);
    if (existingItemIndex !== -1) {
      this.items[existingItemIndex] = item;
    } else {
      this.items.push(item);
    }
    this.saveCart();
    this.sendEventBus();
  }

  removeItem(itemId: number, currency?: string): void {
    var onlineCourse = this.items.find((i) => i.id == itemId);
    if (onlineCourse != null) {
      // if (onlineCourse.quantity == 1) {
      //   this.items = this.items.filter((item) => item.id !== itemId);
      // } else {
      //   var index = this.items.indexOf(onlineCourse);
      //   if (index > -1) {
      //     this.items[index].quantity -= 1;
      //   }
      // }
      this.items = this.items.filter((item) => item.id !== itemId);
    }
    this.saveCart();
    if (currency != null && currency != undefined) {
      this.getTotalAmount(currency);
    }

    this.sendEventBus();
  }

  sendEventBus() {
    var totalQuantity = this.items.reduce(
      (total, item) => total + item.quantity,
      0
    );
    this.eventBus.emit('cart-icon', { message: totalQuantity });
  }

  clearCart(): void {
    this.items = [];
    localStorage.removeItem(this.cartKey);
  }

  getTotalAmount(currency: string): number {
    var total = 0;
    if (currency == 'USD') {
      total = this.items.reduce(
        (total, item) => total + item.price[1].amount * 1,
        0
      );
    } else if (currency == 'INR') {
      total = this.items.reduce(
        (total, item) => total + item.price[0].amount * 1,
        0
      );
    }
    return total;
  }
  addToCartMentor(mentor: mentorTimings): void {
    let course: CartItem;
    if (mentor) {
      // course = {
      //   id: mentor.id,
      //   name: mentor ? `${mentor?.name} - ${mentor?.teacher}` : '',
      //   shortDescription: mentor?.description ?? '',
      //   price: mentor?.price,
      //   quantity: 1,
      // };
      // if (course) {
      //   this.addItem(mentor);
      // }
      this.addItem(mentor);
      this.router.navigate(['/proceed-payment']).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }
}
