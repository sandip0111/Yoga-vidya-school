import { Component, OnInit } from '@angular/core';
import { NgxLiteYoutubeModule } from 'ngx-lite-video';

@Component({
  selector: 'app-youtube-channel',
  standalone: true,
  imports:[NgxLiteYoutubeModule],
  templateUrl: './youtube-channel.component.html',
  styleUrls: ['./youtube-channel.component.css']
})
export class YoutubeChannelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
