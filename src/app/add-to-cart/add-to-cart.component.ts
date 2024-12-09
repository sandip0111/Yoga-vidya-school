import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CartItem, CartService } from '../cart.service';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css',
})

export class AddToCartComponent implements AfterViewInit, OnDestroy {

  courses: CartItem[] = [];
  @ViewChild('orderCard', { static: false }) orderCard!: ElementRef;
  observer!: IntersectionObserver;
  isFixed: boolean = false; // Track if the card is fixed
  timeoutId: any; // Timeout ID for stability checking
  totalAmount: any;
  constructor(private renderer: Renderer2, private cartService: CartService) {}

  ngOnInit(): void {
    this.courses = this.cartService.getItems();
    this.updateTotalAmount();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (!this.orderCard) {
        console.error('Order card element was not found.');
        return;
      }

      const cardElement = this.orderCard.nativeElement;

      // Create an IntersectionObserver to observe when the card is out of the viewport
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // Clear existing timeout to prevent immediate class toggling
          clearTimeout(this.timeoutId);

          // Set a timeout to check stability after a small delay
          this.timeoutId = setTimeout(() => {
            if (!entry.isIntersecting) {
              // If not visible, add the fixed class if it's not already added
              if (!this.isFixed) {
                this.isFixed = true; // Update the state
              }
            } else {
              // If visible, remove the fixed class if it was previously added
              if (this.isFixed) {
                this.isFixed = false; // Update the state
              }
            }
          }, 150); // Adjust this delay as needed (150 ms in this example)
        });
      }, {
        root: null, // Use the viewport as the root
        threshold: 0.5 // Adjust threshold as needed
      });

      // Start observing the card element
      this.observer.observe(cardElement);
    }, 0);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
    // Clear any pending timeouts
    clearTimeout(this.timeoutId);
  }

  removeItem(id: number): void {
    this.cartService.removeItem(id);
    this.courses = this.cartService.getItems();
    this.updateTotalAmount();
  }

  updateTotalAmount(): void {
    this.totalAmount = this.cartService.getTotalAmount();
  }
  }
