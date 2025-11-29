// src/app/modules/shared/main-layout/main-layout.component.ts

import {Component, OnInit, HostListener, ElementRef} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from '../components/header/header.component';
import {SidebarComponent} from '../components/sidebar/sidebar';

@Component({
  selector: 'app-main-layout', // Keep the original selector
  standalone: true,
  // Ensure all necessary components are imported here
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.scss']
})
export class MainLayoutComponent implements OnInit {

  // Layout State
  isMobileView: boolean = false;
  isSidebarOpen: boolean = false;
  private readonly mobileBreakpoint: number = 1024; // Tailwind's 'lg' breakpoint

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenSize();
  }

  // 🚨 Add HostListener for document clicks
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    // 1. Only apply this logic if the sidebar is open AND we are on mobile
    if (this.isSidebarOpen && this.isMobileView) {

      // 2. Check if the click occurred outside the main layout element (which holds the sidebar)
      // We look specifically for clicks outside the sidebar and header.

      // We will look for the sidebar element itself inside the DOM for precision.
      const sidebarElement = this.elementRef.nativeElement.querySelector('app-sidebar aside');

      // 3. If the element is found AND the click is outside the sidebar AND outside the toggle button in the header
      // (The toggle button click is already handled by toggleSidebar() and we rely on that)
      if (sidebarElement && !sidebarElement.contains(event.target)) {

        // Find the hamburger button in the header to exclude clicks on it
        const headerToggle = this.elementRef.nativeElement.querySelector('app-header button');

        // Check if the click is not on the sidebar AND not on the toggle button
        if (headerToggle && !headerToggle.contains(event.target as Node)) {

          // If the click is outside the sidebar, close it
          this.isSidebarOpen = false;
        }
      }
    }
  }

  private checkScreenSize(): void {
    const isMobile = window.innerWidth < this.mobileBreakpoint;

    if (this.isMobileView !== isMobile) {
      this.isMobileView = isMobile;

      // When switching to desktop, always open the sidebar
      if (!isMobile) {
        this.isSidebarOpen = true;
      } else {
        // When switching to mobile, close it by default
        this.isSidebarOpen = false;
      }
    }
  }

  // Toggles the sidebar state, triggered by the Header component on mobile
  toggleSidebar(): void {
    if (this.isMobileView) {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
}
