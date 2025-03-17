import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarVideosComponent } from './webinar-videos.component';

describe('WebinarVideosComponent', () => {
  let component: WebinarVideosComponent;
  let fixture: ComponentFixture<WebinarVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebinarVideosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebinarVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
