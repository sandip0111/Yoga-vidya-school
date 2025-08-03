import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyBaliComponent } from './why-bali.component';

describe('WhyBaliComponent', () => {
  let component: WhyBaliComponent;
  let fixture: ComponentFixture<WhyBaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyBaliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyBaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
