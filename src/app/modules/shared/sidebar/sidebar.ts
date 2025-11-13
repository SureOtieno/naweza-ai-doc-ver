import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {User} from '../../../core/models/user.model';
import {
  faEnvelope,
  faAdd,
  faTimes,
  faPersonHalfDress,
  faPersonBooth,
  faPerson
} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    RouterLinkActive,
    FaIconComponent,
    NgStyle,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})


export class Sidebar {
  user: User | null = null;
  faEnvelope = faEnvelope;
  faAdd = faAdd;
  faTimes = faTimes;


  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      console.log("Logged in user:", this.user);
    }
  }
  protected readonly faPerson = faPerson;
}
