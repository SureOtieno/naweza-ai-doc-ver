import { Component } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';
import {RouterOutlet} from '@angular/router';
import {Header} from '../header/header';
import {Footer} from '../footer/footer';

@Component({
  selector: 'app-mail-layout',
  imports: [
    Sidebar,
    RouterOutlet,
    Header,
    Footer
  ],
  templateUrl: './mail-layout.html',
  styleUrl: './mail-layout.scss'
})
export class MailLayout {
  isDrawerOpen: boolean = true;

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

}
