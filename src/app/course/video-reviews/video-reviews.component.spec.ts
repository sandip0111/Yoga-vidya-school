import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoReviewsComponent } from './video-reviews.component';

describe('VideoReviewsComponent', () => {
  let component: VideoReviewsComponent;
  let fixture: ComponentFixture<VideoReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
