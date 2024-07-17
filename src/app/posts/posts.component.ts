import { Component } from '@angular/core';
import { MenuBarService } from '../menu-bar/menu-bar.service';
import { MenuBar } from '../menu-bar/menu-bar.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  items: Array<MenuBar> = [];

  constructor(private menuBarService: MenuBarService) {
    this.items = this.menuBarService.getMenuBarItem();
  }
}
