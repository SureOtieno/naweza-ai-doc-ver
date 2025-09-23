import {Component, signal} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {Authentication} from '../../../services/auth/authentication';
import {User} from '../../../core/models/user.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  title = signal("Demo Mailing App");
  user: User | null = null;

  dropdownOpen = false;

  constructor(private auth: Authentication) {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      console.log("Logged in user:", this.user);
    }
  }

  isDrawerOpen = false;

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  onLogout(): void {
    this.auth.logout();
  }

}
