                                                                               import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Router } from '@angular/router';
// import { HttpServiceService } from '../../../core/services/http-service.service';
import { ChangePasswordResponse } from '../models/ChangePasswordResponse';
                                                                               import {
                                                                                 HttpServiceService
                                                                               } from '../../../shared/services/http-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #userSignal = signal<User | null>(null);
  user = this.#userSignal.asReadonly();
  isLoggedIn = computed(() => !!this.user());

  http = inject(HttpClient);
  router = inject(Router);
  httpService = inject(HttpServiceService);

  // async login(loginData: User): Promise<any> {
  //   // Call the loginUser method and get the response
  //   // Assuming the response contains the user data, set it in the signal
  //   const loginUser = await this.httpService.loginUser('/auth/login', loginData); // Capture the response as user data
  //   // Update user signal
  //   this.#userSignal.set(loginUser);
  //   //Debugging
  //   console.log(loginUser);
  //   return loginUser;
  // }

  // async changePassword(
  //   currentPassword: string,
  //   newPassword: string,
  //   confirmNewPassword: string,
  // ): Promise<ChangePasswordResponse> {
  //   return await this.httpService.resetPassword('/auth/change_password', {
  //     currentPassword,
  //     newPassword,
  //     confirmNewPassword,
  //   });
  // }
  //
  // async userDetails(): Promise<any> {
  //   return await this.httpService.fetchUserDetails('/auth/fetch_user_details');
  // }
  //
  // async logout() {
  //   this.#userSignal.set(null);
  //   this.httpService.setToken(null);
  // }

  //Method to check if the user is authenticated
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  constructor() {}
}
