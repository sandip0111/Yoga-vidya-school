import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-video-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-reviews.component.html',
  styleUrl: './video-reviews.component.css',
  encapsulation: ViewEncapsulation.Emulated 
})
export class VideoReviewsComponent implements OnInit {
 videos = [
    'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/VID-20241216-WA0001.mp4',
    'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/VID-20241216-WA0002.mp4',
    'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/VID-20241216-WA0003.mp4',
    'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/VID-20241216-WA0004.mp4',
    'assets/video_review5.mp4',
    'assets/video_review6.mp4',
    'assets/video_review7.mp4'
    
  ];

  @ViewChildren('videoPlayer') videoPlayers!: QueryList<ElementRef<HTMLVideoElement>>;
  private menu!: HTMLElement;
  private menuWrapper!: HTMLElement;
  private menuWidth!: number;
  private itemWidth!: number;
  private wrapWidth!: number;

  private scrollSpeed = 0;
  private oldScrollY = 0;
  private scrollY = 0;

  private touchStart = 0;
  private touchX = 0;
  private isDragging = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.menu = this.el.nativeElement.querySelector('.menu');
    this.menuWrapper = this.el.nativeElement.querySelector('.menu--wrapper');
    this.itemWidth = this.el.nativeElement.querySelector('.menu--item').clientWidth;

    // Set initial values for menu width and wrap width
    this.menuWidth = this.menu.clientWidth;
    this.wrapWidth = this.menuWrapper.scrollWidth;

    this.addEventListeners();
  }

  playVideo(videoPlayer: HTMLVideoElement, playButton: HTMLElement): void {

    this.videoPlayers.forEach((videoRef) => {
      const video = videoRef.nativeElement;
      if (video !== videoPlayer) {
        video.pause();
        video.controls = false; // Disable controls for non-playing videos
        const button = video.parentElement?.querySelector(
          '.play-button'
        ) as HTMLElement;
        if (button) {
          button.style.display = 'flex'; // Show play button for paused videos
        }
      }
    });
    videoPlayer.play();
    videoPlayer.controls = true; // Enable video controls when playing
    playButton.style.display = 'none'; // 
    
  }

  private addEventListeners(): void {
    // Handle mouse wheel scrolling
    this.menu.addEventListener('wheel', this.handleMouseWheel.bind(this));

    // Handle touch/mouse dragging
    this.menu.addEventListener('mousedown', this.handleTouchStart.bind(this));
    this.menu.addEventListener('mousemove', this.handleTouchMove.bind(this));
    this.menu.addEventListener('mouseup', this.handleTouchEnd.bind(this));
    this.menu.addEventListener('mouseleave', this.handleTouchEnd.bind(this));

    // Resize event to update the wrapper width and menu width
    window.addEventListener('resize', this.updateLayout.bind(this));
  }

  private handleMouseWheel(event: WheelEvent): void {
    const delta = event.deltaY * 0.5; // Adjust scroll speed
    const scrollLeft = this.menuWrapper.scrollLeft;

    // Scroll the wrapper, ensuring it doesn't exceed the scrollable width
    this.menuWrapper.scrollLeft = Math.min(
      Math.max(scrollLeft - delta, 0),
      this.wrapWidth - this.menuWidth
    );
  }

  private handleTouchStart(event: TouchEvent | MouseEvent): void {
    this.touchStart = ('touches' in event ? event.touches[0].clientX : event.clientX) || 0;
    this.isDragging = true;
    this.menu.classList.add('is-dragging');
  }

  private handleTouchMove(event: TouchEvent | MouseEvent): void {
    if (!this.isDragging) return;

    this.touchX = ('touches' in event ? event.touches[0].clientX : event.clientX) || 0;
    const deltaX = this.touchStart - this.touchX;

    // Scroll the wrapper horizontally
    this.menuWrapper.scrollLeft += deltaX;
    this.touchStart = this.touchX;
  }

  private handleTouchEnd(): void {
    this.isDragging = false;
    this.menu.classList.remove('is-dragging');
  }

  private updateLayout(): void {
    this.menuWidth = this.menu.clientWidth;
    this.wrapWidth = this.menuWrapper.scrollWidth;
  }
}