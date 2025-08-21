import { Injectable } from '@angular/core';
import { EventBusService } from './event-bus.service';
import { Router } from '@angular/router';
import { mentorTimings } from './course/course-mentor/course-mentor.component';

export interface CartItem {
  id: number;
  title: string;
  shortDescription: string;
  priceINR: number;
  priceUSD: number;
  quantity: number;
  priceInfo?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey = 'cartItems';
  private currency = 'currency';
  private items: CartItem[] = [];

  constructor(private eventBus: EventBusService, private router: Router) {
    this.loadCart();
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
    }
  }

  getItems(): CartItem[] {
    return this.items;
  }

  addItem(item: CartItem): void {
    const existingItem = this.items.find((i) => i.id === item.id);

    if (existingItem) {
      // existingItem.quantity += item.quantity;
      existingItem.quantity = item.quantity;
    } else {
      this.items.push(item);
    }

    this.saveCart();
    this.sendEventBus();
  }

  removeItem(itemId: number, currency?: string): void {
    var onlineCourse = this.items.find((i) => i.id == itemId);
    if (onlineCourse != null) {
      if (onlineCourse.quantity == 1) {
        this.items = this.items.filter((item) => item.id !== itemId);
      } else {
        var index = this.items.indexOf(onlineCourse);
        if (index > -1) {
          this.items[index].quantity -= 1;
        }
      }
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
        (total, item) => total + item.priceUSD * item.quantity,
        0
      );
    } else if (currency == 'INR') {
      total = this.items.reduce(
        (total, item) => total + item.priceINR * item.quantity,
        0
      );
    }
    return total;
  }
  addToCartMentor(mentor: mentorTimings): void {
    let course: CartItem;
    if (mentor) {
      course = {
        id: mentor.id,
        title: mentor ? `${mentor?.name} - ${mentor?.title}` : '',
        shortDescription: mentor?.description ?? '',
        priceINR: mentor?.price.priceInIndian ?? 0,
        priceUSD: mentor?.price.priceInUSD ?? 0,
        quantity: 1,
      };
      if (course) {
        this.addItem(course);
      }
      this.router.navigate(['/proceed-payment']).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }
}
