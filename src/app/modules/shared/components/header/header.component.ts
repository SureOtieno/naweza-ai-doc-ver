// src/app/modules/shared/components/header/header.component.ts

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Replace with actual data from an Auth Service
  userName: string = 'Test User';
  @Input() isMobile: boolean = false;
  @Output() toggleSidebar = new EventEmitter<void>();

  constructor(private router: Router) { }

  // Method to emit the toggle event
  onToggle(): void {
    this.toggleSidebar.emit();
  }

  /** Placeholder for logging out the user */
  logout() {
    // 1. Clear authentication token/session
    console.log('User logged out.');
    // 2. Redirect to the login page
    this.router.navigate(['/login']);
  }
}

