import {Component, signal} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Authentication} from '../../../services/auth/authentication';
import {Sidebar} from '../../shared/sidebar/sidebar';
import {ActivatedRoute, Router} from '@angular/router';
import {ButtonComponent} from '../../shared/button/button.component';
import {User} from '../../../core/models/user.model';
import {Mail} from '../../../core/models/mails.model'



@Component({
  selector: 'app-mail',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    Sidebar,
    ButtonComponent
  ],
  templateUrl: './mail.html',
  styleUrl: './mail.scss'
})

export class MailComponent {
  successMessage = signal<string | null>(null);
  errorMessage = signal<string | null>(null);
  title = signal<string | null>("Send Mail");

  returnUrl = '/sent';
  allMails: Mail[] = [];
  selectedMail: Mail | null = null;
  sentMails: Mail[] = [];

  form = new FormGroup({
    recipient: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),

  });

  user: User | null = null;

  constructor(
    private mailService: Authentication,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.returnUrl = params.get('returnUrl') || '/home';
    });
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      // console.log("Logged in user:", this.user);
    }
  }



  get recipientControl(): FormControl {
    return this.form.get('recipient') as FormControl;
  }
  get subjectControl(): FormControl {
    return this.form.get('subject') as FormControl;
  }
  get messageBodyControl(): FormControl {
    return this.form.get('body') as FormControl;
  }

  onSend() {
    this.form.markAllAsTouched();
    this.successMessage.set(null);
    this.errorMessage.set(null);

    if (!this.user || !this.user.email) {
      console.error("No user found, please log in again.");
      return;
    }

    if (this.form.invalid) {
      this.errorMessage.set("Please fill in all fields correctly.");
      return;
    }

    this.mailService.sendMail({
      sender: this.user.email,
      recipient: this.recipientControl.value,
      subject: this.subjectControl.value,
      body: this.messageBodyControl.value
    }).subscribe({
      next: (res: Mail) => {
        // Ensure the mail is marked as sent
        res.folder = 'sent';
        this.sentMails.push(res);

        this.successMessage.set("Mail sent successfully!");
        this.form.reset();

        setTimeout(() => {
          this.router.navigateByUrl(this.returnUrl);
        }, 2000);
      },
      error: (err) => {
        this.errorMessage.set("Failed to send mail. Please try again.");
        console.error("Mail send failed", err);
      }
    });
  }

}

