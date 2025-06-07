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
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.specialvideo) {
      this.videos = [
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/pranic_testimonial1.mp4',
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/pranic_testimonial2.mp4',
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/pranic_testimonial3.mp4',
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/pranic_testimonial4.mp4',
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/pranaarambha1.mp4',
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/pranic_testimonial5.mp4',
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/VID-20241216-WA0001.mp4',
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/VID-20241216-WA0002.mp4',
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/VID-20241216-WA0003.mp4',
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/VID-20241216-WA0004.mp4',
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/WA0005.mp4',
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/WA0006.mp4',
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/WA0007.mp4',
      ];
    } else {
      this.videos = [
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/VID-20241216-WA0001.mp4',
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/VID-20241216-WA0002.mp4',
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/VID-20241216-WA0003.mp4',
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/VID-20241216-WA0004.mp4',
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/WA0005.mp4',
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/WA0006.mp4',
        'https://my-s3-images-bucket.s3.us-east-1.amazonaws.com/testimonial/WA0007.mp4',
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
    //initially set false
    this.isAlreadyPlaying = false;
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
