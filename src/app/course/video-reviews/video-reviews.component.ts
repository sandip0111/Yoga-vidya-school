import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { PixelTrackingService } from '../../services/pixel-tracking.service';
import { reviewLink } from '../../enum/s3Bucket';
@Component({
  selector: 'app-video-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-reviews.component.html',
  styleUrl: './video-reviews.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class VideoReviewsComponent implements OnInit {
  @Input() specialvideo: boolean = false;
  videos: string[] = [];

  @ViewChildren('videoPlayer') videoPlayers!: QueryList<
    ElementRef<HTMLVideoElement>
  >;

  private menuWrapper!: HTMLElement;
  private menuWrapperDup!: HTMLElement;
  private animationFrameId: number | null = null;
  private isPlaying = false;
  private isHover = false;
  private isAlreadyPlaying = false;

  constructor(
    private el: ElementRef,
    private pixelTracking: PixelTrackingService
  ) {}

  ngOnInit(): void {
    if (this.specialvideo) {
      this.videos = [
        reviewLink.reviewNew1,
        reviewLink.reviewNew2,
        reviewLink.reviewNew3,
        reviewLink.reviewNew4,
        reviewLink.reviewNew5,
        reviewLink.review1,
        reviewLink.review2,
        reviewLink.review3,
        reviewLink.review4,
        reviewLink.review5,
        reviewLink.review6,
        reviewLink.review7,
        reviewLink.review8,
        reviewLink.review9,
        reviewLink.review10,
        reviewLink.review11,
        reviewLink.review12,
        reviewLink.review13,
      ];
    } else {
      this.videos = [
        reviewLink.review7,
        reviewLink.review8,
        reviewLink.review9,
        reviewLink.review10,
        reviewLink.review11,
        reviewLink.review12,
        reviewLink.review13,
      ];
    }
    this.menuWrapper = this.el.nativeElement.querySelector('.menu--wrapper');
    this.menuWrapper.addEventListener(
      'mouseenter',
      this.onHoverStart.bind(this)
    );
    this.menuWrapper.addEventListener('mouseleave', this.onHoverEnd.bind(this));
  }

  onHoverStart(): void {
    this.isHover = true;
    if (this.menuWrapper || this.isPlaying) {
      this.menuWrapper.style.animationPlayState = 'paused';
    }
  }

  onHoverEnd(): void {
    this.isHover = false;
    if (this.menuWrapper && !this.isPlaying) {
      this.menuWrapper.style.animationPlayState = 'running';
    }
  }

  playVideo(videoPlayer: HTMLVideoElement, playButton: HTMLElement): void {
    this.isAlreadyPlaying = false;
    const videoIndex = this.videoPlayers
      .toArray()
      .findIndex((ref) => ref.nativeElement === videoPlayer);
    const videoTitle = `testimonial_video_${videoIndex + 1}`;
    this.pixelTracking.trackVideoPlay(videoTitle, videoPlayer.duration);
    this.pixelTracking.trackTestimonialEngagement(videoIndex, 'play');
    this.videoPlayers.forEach((videoRef) => {
      const video = videoRef.nativeElement;
      if (video !== videoPlayer) {
        if (!video.paused) {
          video.pause();
          this.isAlreadyPlaying = true;
          video.controls = false;
          const button = video.parentElement?.querySelector(
            '.play-button'
          ) as HTMLElement;
          if (button) {
            button.style.display = 'flex';
          }
        }
      }
    });

    videoPlayer.play();
    this.isPlaying = true;
    videoPlayer.muted = false;
    videoPlayer.controls = true;
    playButton.style.display = 'none';

    videoPlayer.onended = () => {
      this.isPlaying = false;
      // Track video completion
      this.pixelTracking.trackVideoComplete(videoTitle, videoPlayer.duration);
      this.pixelTracking.trackTestimonialEngagement(videoIndex, 'complete');

      if (!this.isHover) {
        this.menuWrapper.style.animationPlayState = 'running';
      }
      videoPlayer.controls = false;
      const videoPlayerButton = videoPlayer.parentElement?.querySelector(
        '.play-button'
      ) as HTMLElement;
      if (videoPlayerButton) {
        videoPlayerButton.style.display = 'flex';
      }
    };

    videoPlayer.onpause = () => {
      this.isPlaying = this.isAlreadyPlaying;
      // Track video pause
      this.pixelTracking.trackTestimonialEngagement(videoIndex, 'pause');

      if (!this.isHover) {
        this.menuWrapper.style.animationPlayState = 'running';
      }
      videoPlayer.controls = false;
      const videoPlayerButton = videoPlayer.parentElement?.querySelector(
        '.play-button'
      ) as HTMLElement;
      if (videoPlayerButton) {
        videoPlayerButton.style.display = 'flex';
      }
      this.isAlreadyPlaying = false;
    };
  }
}
