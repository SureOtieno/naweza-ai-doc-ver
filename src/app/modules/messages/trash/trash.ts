import { Component, signal } from '@angular/core';
import { Card } from '../../shared/components/card/card';
import { Authentication } from '../../../core/services/auth/authentication';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../core/models/user.model';
import { ButtonComponent } from '../../shared/components/button/button.component';
import {CommonModule, NgStyle} from '@angular/common';
import { Mail } from '../../../core/models/mails.model'
import {SidebarComponent} from '../../shared/components/sidebar/sidebar';

@Component({
  selector: 'app-trash',
  imports: [Card, SidebarComponent, ButtonComponent, NgStyle, CommonModule],
  templateUrl: './trash.html',
  styleUrl: './trash.scss'
})
export class Trash {
  title = signal<string>("Trash");
  successMessage = signal<string | null>(null);
  errorMessage = signal<string | null>(null);

  returnUrl = "/trash";
  user: User | null = null;
  allMails: Mail[] = [];
  selectedMail: Mail | null = null;
  trashMails: Mail[] = [];

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

    this.mailService.fetchMail().subscribe({
      next: (mails: any) => {
        // Fix: The 'mails' object contains a 'data' property that holds the array.
        // We must access this property to correctly assign the array to allMails.
        this.allMails = mails.data;
        // console.log("Fetched mails:", this.allMails);
        this.trashMails = this.allMails.filter(m => m.folder === 'trash');

      },
      error: (err) => {
        this.errorMessage.set("Failed to load mails");
        console.error(err);
      }
    });
  }

  viewMail(mail: Mail) {
    this.selectedMail = mail;
  }


  restoreMail(id: number) {
    const mail = this.allMails.find(m => m.id === id);
    if (mail) {
      mail.folder = 'inbox';
    }
  }

}
