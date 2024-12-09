import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentProceedComponent } from './payment-proceed.component';

describe('PaymentProceedComponent', () => {
  let component: PaymentProceedComponent;
  let fixture: ComponentFixture<PaymentProceedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentProceedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentProceedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
