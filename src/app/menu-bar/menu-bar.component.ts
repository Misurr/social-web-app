import { Component } from '@angular/core';
import { MenuBarService } from './menu-bar.service';
import { MenuBar } from './menu-bar.model';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent {
  
  activeIndex: number | null = null;

  items: Array<MenuBar> = [];

  constructor(private menuBarService: MenuBarService) {
    this.items = this.menuBarService.getMenuBarItem();
  }

  setActive(index: number) {
    this.activeIndex = index;
  }
}
