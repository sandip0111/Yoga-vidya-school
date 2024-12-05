import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarModalComponent } from './webinar-modal.component';

describe('WebinarModalComponent', () => {
  let component: WebinarModalComponent;
  let fixture: ComponentFixture<WebinarModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebinarModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebinarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
