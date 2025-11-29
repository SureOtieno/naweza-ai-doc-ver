// src/app/modules/shared/components/sidebar/sidebar.component.ts

import {Component, Input, OnInit} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import {MenuGroup, MenuItem} from '../../../../core/models/menu.model';
import {Menu} from '../../../../core/constants/menu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor, NgIf],
  templateUrl: './sidebar.html', // Note: Renamed from 'sidebar.html' to 'sidebar.component.html' is standard
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent implements OnInit {
  // Use the static data structure
  public menuItems: MenuItem[] = Menu.pages;
  @Input() isMobile: boolean = false;
  @Input() isSidebarOpen: boolean = false;

  // 🚨 Use the consistent name: MenuGroup[]
  public menuGroups: MenuGroup[] = [];


  ngOnInit() {
    // Initialization logic remains the same, but TypeScript will now correctly
    // validate against the properties defined in your exported MenuGroup interface.
    this.menuGroups = Menu.pages.map(group => ({
      ...group,
      // isCollapsed is a runtime property, which will be added dynamically
      // if you update your MenuGroup interface to include: isCollapsed?: boolean;
      isCollapsed: true,
    } as MenuGroup));

    // NOTE: If your core/models/menu.model.ts does NOT include isCollapsed?: boolean
    // you MUST add it to avoid TypeScript errors when setting state here.
  }

  toggleGroup(group: MenuGroup): void {
    group.isCollapsed = !group.isCollapsed;
  }

}
