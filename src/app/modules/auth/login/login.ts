import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import {Observable, of, throwError} from "rxjs";
import {Authentication} from '../../../core/services/auth/authentication';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    CommonModule,
    RouterLink,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "login.html",

})

export class Login {
  successMessage = signal<string | null>(null);
  errorMessage = signal<string | null>(null);

  returnUrl = '/mail';

  auth = inject(Authentication);

  // The login form
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  // Simple accessor for form controls to use in the template
  get usernameControl(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
      this.route.queryParamMap.subscribe(params => {
        this.returnUrl = params.get('returnUrl') || '/home';
      });

  }

  onSubmit() {
    this.loginForm.markAllAsTouched();
    this.successMessage.set(null);
    this.errorMessage.set(null);


    if (this.loginForm.valid) {
      const payload = {
        username: this.loginForm.get('username')!.value,
        password: this.loginForm.get('password')!.value,
      };

      // console.log('Payload being sent:', payload);

      this.auth.login(payload)
        .subscribe({
            next: (res) => {
              const token = res.token;
              // console.log('JWT:', token);

              localStorage.setItem('token', token);
              localStorage.setItem('user', JSON.stringify(res.data));

              // ⬇️ Add this line
              this.auth.startTokenTimer();

              // console.log('Login success', res);
              this.successMessage.set('Login successful! Redirecting...');
              setTimeout(() => {
                this.router.navigateByUrl(this.returnUrl);
              }, 2000);

              this.loginForm.reset();
            },
          error: (err) => {
            // console.error('Login failed', err);
            this.errorMessage.set('Login failed. Please check your username and password.');
          }
        });
    } else {
      this.errorMessage.set('Please fill out all required fields.');
    }
  }
}

