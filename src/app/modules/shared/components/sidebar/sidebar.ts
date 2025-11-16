// src/app/modules/shared/components/sidebar/sidebar.component.ts

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import {MenuItem} from '../../../../core/models/menu.model';
import {Menu} from '../../../../core/constants/menu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor, NgIf],
  templateUrl: './sidebar.html', // Note: Renamed from 'sidebar.html' to 'sidebar.component.html' is standard
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent {
  // Use the static data structure
  public menuItems: MenuItem[] = Menu.pages;
}
