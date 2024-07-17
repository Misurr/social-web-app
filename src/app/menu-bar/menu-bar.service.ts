import { Injectable } from '@angular/core';
import { MenuBar } from './menu-bar.model';

@Injectable({
  providedIn: 'root',
})
export class MenuBarService {
  menuBarItems: Array<MenuBar> = [
    { name: 'My Friends', icon: 'fa-solid fa-users-line', path: 'my-friends' },
    { name: 'Messages', icon: 'fa-regular fa-message', path: 'messages' },
    { name: 'Trends', icon: 'fa-solid fa-arrow-trend-up', path: 'trends' },
    { name: 'Posts', icon: 'fa-solid fa-signs-post', path: 'posts' },
    { name: 'Video', icon: 'fa-solid fa-video', path: 'video' },
    { name: 'Pictures', icon: 'fa-solid fa-images', path: 'pictures' },
    { name: 'Groups', icon: 'fa-solid fa-people-group', path: 'groups' },
    { name: 'Settings', icon: 'fa-solid fa-gear', path: 'settings' },
  ];

  constructor() {}

  getMenuBarItem() {
    return this.menuBarItems;
  }
}
