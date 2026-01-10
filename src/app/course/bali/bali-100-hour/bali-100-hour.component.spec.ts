import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bali100HourComponent } from './bali-100-hour.component';

describe('Bali100HourComponent', () => {
  let component: Bali100HourComponent;
  let fixture: ComponentFixture<Bali100HourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bali100HourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Bali100HourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
