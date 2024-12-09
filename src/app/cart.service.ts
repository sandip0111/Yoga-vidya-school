import { Injectable } from '@angular/core';

export interface CartItem {
  id: number;
  title: string;
  shortDescription: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'cartItems';
  private items: CartItem[] = [];

  constructor() {
    this.loadCart();
  }

  private saveCart(): void {
    localStorage.setItem(this.cartKey, JSON.stringify(this.items));
  }

  private loadCart(): void {
    const savedCart = localStorage.getItem(this.cartKey);
    this.items = savedCart ? JSON.parse(savedCart) : [];
  }

  getItems(): CartItem[] {
    return this.items;
  }

  addItem(item: CartItem): void {
    const existingItem = this.items.find(i => i.id === item.id);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }

    this.saveCart();
  }

  removeItem(itemId: number): void {
    this.items = this.items.filter(item => item.id !== itemId);
    this.saveCart();
  }

  clearCart(): void {
    this.items = [];
    localStorage.removeItem(this.cartKey);
  }

  getTotalAmount(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
