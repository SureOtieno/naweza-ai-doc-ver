import {Component, Input} from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [
    ButtonComponent,
    RouterLink
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input() title!: string;
  @Input() content!: string;
  @Input() image?: string;

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }


}
