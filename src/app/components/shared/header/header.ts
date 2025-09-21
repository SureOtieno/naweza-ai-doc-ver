import {Component, signal} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {Authentication} from '../../../services/auth/authentication';
import {User} from '../../../core/models/user.model';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
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

  onlogout(): void {
    this.auth.logout();
  }

}
