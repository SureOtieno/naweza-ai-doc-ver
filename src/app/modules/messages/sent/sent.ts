import { Component, signal } from '@angular/core';
import { Card } from '../../shared/components/card/card';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar';
import { Authentication } from '../../../core/services/auth/authentication';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../core/models/user.model';
import { ButtonComponent } from '../../shared/components/button/button.component';
import {CommonModule, NgStyle} from '@angular/common';
import { Mail } from '../../../core/models/mails.model'

@Component({
  selector: 'app-trash',
  imports: [Card, SidebarComponent, ButtonComponent, NgStyle, CommonModule],
  templateUrl: './sent.html',
  styleUrl: './sent.scss'
})
export class Sent {
  title = signal<string>("Sent");
  successMessage = signal<string | null>(null);
  errorMessage = signal<string | null>(null);

  returnUrl = "/sent";
  user: User | null = null;
  allMails: Mail[] = [];
  selectedMail: Mail | null = null;

  constructor(
    private mailService: Authentication,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.returnUrl = params.get('returnUrl') || '/home';
    });

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      // console.log("Logged in user:", this.user);
    }

    this.mailService.fetchMail().subscribe((res: any) => {
      const allMails = res.data;
      if (this.user?.email) {
        this.allMails = allMails.filter((m: Mail) => m.sender === this.user!.email);
      } else {
        this.allMails = [];
      }
    });
  }

  onDelete(id: number) {
    this.successMessage.set(null);
    this.errorMessage.set(null);

    if (!this.user?.email) {
      console.error("No user found, please log in again.");
      return;
    }

    this.mailService.deleteMail(id).subscribe({
      next: () => {
        this.successMessage.set("Mail deleted successfully!");
        this.allMails = this.allMails.filter((m: Mail) => m.id !== id);
        const mail = this.allMails.find(m => m.id === id);
        if (mail) {
          mail.folder = 'trash';
        }
      },
      error: (err) => {
        this.errorMessage.set("Failed to delete mail. Please try again.");
        console.error('Mail delete failed', err);
      }
    });
  }

  viewMail(mail: Mail) {
    this.selectedMail = mail;
  }
}
