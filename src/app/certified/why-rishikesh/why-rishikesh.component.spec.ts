import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyRishikeshComponent } from './why-rishikesh.component';

describe('WhyRishikeshComponent', () => {
  let component: WhyRishikeshComponent;
  let fixture: ComponentFixture<WhyRishikeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyRishikeshComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyRishikeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
