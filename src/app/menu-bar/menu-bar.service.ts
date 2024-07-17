import { Injectable } from '@angular/core';
import { MenuBar } from './menu-bar.model';

@Injectable({
  providedIn: 'root',
})
export class MenuBarService {
  
  menuBarItems: Array<MenuBar> = [
    { name: 'My Friends', icon: 'fa-solid fa-users-line' },
    { name: 'Messages', icon: 'fa-regular fa-message' },
    { name: 'Trends', icon: 'fa-solid fa-arrow-trend-up' },
    { name: 'Posts', icon: 'fa-solid fa-signs-post' },
    { name: 'Video', icon: 'fa-solid fa-video' },
    { name: 'Pictures', icon: 'fa-solid fa-images' },
    { name: 'Groups', icon: 'fa-solid fa-people-group' },
    { name: 'Settings', icon: 'fa-solid fa-gear' },
  ];

  constructor() {}

  getMenuBarItem() {
    return this.menuBarItems;
  }
}
