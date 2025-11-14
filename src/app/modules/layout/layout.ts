import {Component, OnInit} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet, Event } from '@angular/router';
import {Sidebar} from '../shared/sidebar/sidebar';

@Component({
  selector: 'app-mail-layout',
  imports: [
    Sidebar,
    RouterOutlet,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit {
  private mainContent: HTMLElement | null = null;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this.mainContent) {
          this.mainContent!.scrollTop = 0;
        }
      }
    });
  }

  ngOnInit(): void {
    this.mainContent = document.getElementById('main-content');
  }


}
