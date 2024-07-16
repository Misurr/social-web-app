import { Component } from '@angular/core';

@Component({
  selector: 'app-friends-posts',
  templateUrl: './friends-posts.component.html',
  styleUrls: ['./friends-posts.component.css'],
})
export class FriendsPostsComponent {
  selectedMediaSrc: string | null = null;
  selectedMediaType: string | null = null;

  openMedia(src: string, type: string) {
    this.selectedMediaSrc = src;
    this.selectedMediaType = type;
  }

  closeMedia() {
    this.selectedMediaSrc = null;
    this.selectedMediaType = null;
  }
}
