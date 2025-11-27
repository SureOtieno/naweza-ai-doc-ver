import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {Authentication} from '../../../core/services/auth/authentication';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

/**
 * A custom validator function that checks if the 'password' and 'confirmPassword'
 * form controls within a FormGroup have the same value.
 * It returns a 'passwordMismatch' error if they do not match.
 */
function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password');
  const confirmPassword = group.get('confirmPassword');

  // Return if the controls don't exist or haven't been touched yet
  if (!password || !confirmPassword) {
    return null;
  }

  // Check if the passwords match, and return an error if they don't
  return password.value === confirmPassword.value ? null : { passwordMismatch: true };
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "signup.html"

})
export class Signup {

  username = '';
  password = '';
  returnUrl = '/login';

  constructor(
    private auth: Authentication,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }
  // Signals for messages to improve reactivity
  successMessage = signal<string | null>(null);
  errorMessage = signal<string | null>(null);

  signupForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    othername: new FormControl(''),
    // username: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    dob: new FormControl(''),
    country: new FormControl(''),
    address: new FormControl(''),
    occupation: new FormControl(''),
    isAdmin: new FormControl(false),
  }, { validators: passwordMatchValidator });

  get firstnameControl(): FormControl {
    return this.signupForm.get('firstname') as FormControl;
  }

  get surnameControl(): FormControl {
    return this.signupForm.get('surname') as FormControl;
  }
  get othernameControl(): FormControl {
    return this.signupForm.get('othername') as FormControl;
  }
  get emailControl(): FormControl {
    return this.signupForm.get('email') as FormControl;
  }

  get phoneControl(): FormControl {
    return this.signupForm.get('phone') as FormControl;
  }

  get dobControl(): FormControl {
    return this.signupForm.get('dob') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.signupForm.get('password') as FormControl;
  }
  // get usernameControl(): FormControl {
  //   return this.signupForm.get('username') as FormControl;
  // }
  get countryControl(): FormControl {
    return this.signupForm.get('country') as FormControl;
  }
  get addressControl(): FormControl {
    return this.signupForm.get('address') as FormControl;
  }
  get occupationControl(): FormControl {
    return this.signupForm.get('occupation') as FormControl;
  }
  get adminControl(): FormControl {
    return this.signupForm.get('isAdmin') as FormControl;
  }

  onSubmit() {
    this.signupForm.markAllAsTouched();
    this.successMessage.set(null);
    this.errorMessage.set(null);

    // This check is now safe because the component is fully initialized
    if (this.signupForm.invalid) {
      console.log('Form is invalid. Please fill out all required fields.');
      return;
    }
    const payload = {
      firstName: this.firstnameControl.value,
      surName: this.surnameControl.value,
      email: this.emailControl.value,
      phone: this.phoneControl.value,
      // username: this.usernameControl.value,
      dob: this.dobControl.value,
      country: this.countryControl.value,
      address: this.addressControl.value,
      occupation: this.occupationControl.value,
      role: this.adminControl.value ? "ADMIN" : "USER",
      otherName: this.othernameControl.value,
      password: this.passwordControl.value
    };

    const formValue = this.signupForm.value;
    console.log('Form is valid. Submitting data:', formValue);


    this.auth.signup(payload)
      .subscribe({
        next: (res) => {
          this.auth.setToken(res.token);
          this.successMessage.set('User details saved successfully.');
          setTimeout(() => {
            this.router.navigateByUrl(this.returnUrl);
          }, 2000);
          // Reset the form after successful submission
          this.signupForm.reset();
        },
        error: (err) => {
          console.error('Registration failed', err);
          this.errorMessage.set('Registration failed. Please try again later.');
        }
      });
  }
}

