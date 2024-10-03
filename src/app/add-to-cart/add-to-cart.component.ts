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

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css',
})

export class AddToCartComponent implements AfterViewInit, OnDestroy {
  courses = [
    {
      id: 1,
      title: 'Breath Detox Course Online',
      shortDescription:
        'This is 7 days breath detox practice:Where you will get the 7 recorded videos, each day. Each video practice will be preparation for the next day',
      selected: true,
      price: 'Rs 1899',
    },
    {
      id: 2,
      title: 'Hip Opening Yoga Workshop Online',
      shortDescription:
        '21 days course has two main components - an elaborate warm-up series to prepare your muscles for high-intensity movements, and a number of sequences focussed on the muscles around the hip joints, hamstrings, inner leg, frontal thighs, and gluteal muscles.',
      selected: false,
      price: 'Rs 2799',
    },
    {
      id: 3,
      title:
        'PRANA  ARAMBHA – An Exclusive Online Pranayama Course by Prashant J Yoga',
      shortDescription:
        'PRANA  ARAMBHA  is 10 days Pranic Course (Online Yoga Course). Join Online Pranayama Course now.',
      selected: true,
      price: 'Rs 899',
    },
    {
      id: 4,
      title: 'योग शास्त्र / योग ग्रंथ अध्यन',
      shortDescription: 'Yoga Philosophy Course Free.',
      selected: false,
      price: 'Rs 3899',
    },
  ];
  @ViewChild('orderCard', { static: false }) orderCard!: ElementRef;
  observer!: IntersectionObserver;
  isFixed: boolean = false; // Track if the card is fixed
  timeoutId: any; // Timeout ID for stability checking

  constructor(private renderer: Renderer2) {}

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
  }
