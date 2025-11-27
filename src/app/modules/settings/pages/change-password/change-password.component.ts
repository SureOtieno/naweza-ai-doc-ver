import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';
import { MessagesService } from '../../../../shared/services/messages/messages.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss',
})
export class ChangePasswordComponent {
  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);
  private messageService = inject(MessagesService);
  message = this.messageService.message;
  submitted = false;

  changePasswordForm = this.formBuilder.group({
    currentPassword: ['', Validators.required],
    newPassword: ['', [Validators.required]],
    confirmNewPassword: ['', [Validators.required]],
  });

  get changePasswordFormControl() {
    return this.changePasswordForm.controls;
  }

  //Method to change the password
  // async changePassword() {
  //   try {
  //     const { currentPassword, newPassword, confirmNewPassword } = this.changePasswordForm.value;
  //     await this.authService.changePassword(currentPassword ?? '', newPassword ?? '', confirmNewPassword ?? '');
  //     this.messageService.showMessage('Password Changed Successfully', 'success');
  //   } catch (error) {
  //     this.messageService.showMessage('Invalid request', 'error');
  //     console.log(error);
  //   }
  // }

  //Method to cancel the form

  cancelChangePasswordForm() {
    this.submitted = false;
    this.changePasswordForm.reset();
  }

  onClose() {
    this.messageService.clear();
  }
}
