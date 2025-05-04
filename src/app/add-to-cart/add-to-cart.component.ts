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
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
  selectedCurrency: string = '';
  options?: { label: string; value: string }[] = [];
  constructor(private renderer: Renderer2, private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.courses = this.cartService.getItems();    
    this.options = [
      { label: 'INR', value: 'INR' },
      { label: 'USD', value: 'USD' },
      
    ];
    this.selectedCurrency ='INR';
    this.cartService.setCurrency(this.selectedCurrency);
    this.updateTotalAmount(this.selectedCurrency);
  }

  onOptionChange(selected: string): void {
    console.log('Selected option:', selected);
    this.selectedCurrency = selected;
    this.cartService.setCurrency(selected);
    this.updateTotalAmount(this.selectedCurrency);
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
    this.cartService.removeItem(id, this.selectedCurrency);
    this.courses = this.cartService.getItems();
    this.updateTotalAmount(this.selectedCurrency);
  }

  updateTotalAmount(currency: string): void {
    var amountInr = this.cartService.getTotalAmount(currency);
    var amountUsd = this.cartService.getTotalAmount("USD");
    this.totalAmount = "Rs." + amountInr + " / $" + amountUsd;
  }

  placeOrder(): void{
    this.router.navigate(['/proceed-payment']);
  }
}
