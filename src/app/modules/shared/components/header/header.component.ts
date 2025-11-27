// src/app/modules/shared/components/header/header.component.ts

import { Component } from '@angular/core';
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
  userName: string = 'Verification User';

  constructor(private router: Router) { }

  /** Placeholder for logging out the user */
  logout() {
    // 1. Clear authentication token/session
    console.log('User logged out.');
    // 2. Redirect to the login page
    this.router.navigate(['/login']);
  }
}
