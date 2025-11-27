import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { MessagesComponent } from '../../../../shared/components/messages/messages.component';
import { ToastModule } from 'primeng/toast';
import { ILoginRequests } from '../../models/ILoginRequests';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    AngularSvgIconModule,
    NgIf,
    ButtonComponent,
    RouterLink,
    MessagesComponent,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  //Inject the formBuilder
  formBuilder = inject(FormBuilder);

  //Inject Primeng Message Service API
  private messageService = inject(MessageService);

  //Inject the router
  private router = inject(Router);
  //Inject authService
  authService = inject(AuthService);

  submitted = false;
  passwordTextType!: boolean;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  //Form input validation
  get f() {
    return this.loginForm.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  async onLogin() {
    if (this.loginForm.invalid) {
      // Handle invalid form (optional)
      return;
    }

    try {
      this.submitted = true;
      const useProps = this.loginForm.value as Partial<ILoginRequests>;

      // Call the login method and await the result
      // await this.authService.login(useProps as ILoginRequests);

      // Show success message
      this.messageService.add({
        severity: 'success',
        summary: 'Login successfully',
        detail: 'You have logged in successfully!',
      });

      // Add a delay to show the message before navigation
      setTimeout(async () => {
        // Navigate to dashboard
        await this.router.navigate(['/dashboard']);
      }, 2000); // 2 seconds delay
    } catch (err) {
      // Handle the error
      this.messageService.add({
        severity: 'error',
        summary: 'Login failed',
        detail: 'Please check your credentials and try again.',
      });
      console.log(err);
    }
  }
}
