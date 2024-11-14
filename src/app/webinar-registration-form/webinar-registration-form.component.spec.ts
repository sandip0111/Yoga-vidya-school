import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarRegistrationFormComponent } from './webinar-registration-form.component';

describe('WebinarRegistrationFormComponent', () => {
  let component: WebinarRegistrationFormComponent;
  let fixture: ComponentFixture<WebinarRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebinarRegistrationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebinarRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
