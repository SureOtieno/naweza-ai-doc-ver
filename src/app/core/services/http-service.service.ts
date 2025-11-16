import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { HttpBackend, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { firstValueFrom, map } from 'rxjs';
import { ChangePasswordRequest } from '../../modules/auth/models/ChangePasswordRequest';
import { ChangePasswordResponse } from '../../modules/auth/models/ChangePasswordResponse';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  private apiUrl: string = environment.apiUrl;

  // Injections
  private router = inject(Router);
  private http = inject(HttpClient);
  private handler = inject(HttpBackend);

  // Signals for handling token and headers
  #tokenSignal = signal<string | null>(localStorage.getItem('token'));
  headers = computed(() => this.getHeaders());

  // Function to get headers based on token signal
  private getHeaders(): HttpHeaders {
    const token = this.#tokenSignal();
    return new HttpHeaders({
      Authorization: 'Bearer ' + (token || ''),
    });
  }

  // Method to update token signal
  setToken(token: string | null) {
    this.#tokenSignal.set(token);
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }

  // Function to perform GET request
  public async get(endpoint: string) {
    const response$ = this.http.get(this.apiUrl + endpoint, {
      headers: this.getHeaders(),
    });
    return await firstValueFrom(response$);
  }
  // Function to perform GET request with optional query parameters
  public async getById(endpoint: string, params?: HttpParams): Promise<any> {
    const response$ = this.http.get(`${this.apiUrl}${endpoint}`, {
      headers: this.getHeaders(),
      params: params,
    });
    return await firstValueFrom(response$);
  }

  // Function to perform GET request with optional query parameters
  public async updateById(endpoint: string, params?: HttpParams): Promise<any> {
    const response$ = this.http.get(`${this.apiUrl}${endpoint}`, {
      headers: this.getHeaders(),
      params: params,
    });
    return await firstValueFrom(response$);
  }

  // Function to perform DELETE request
  public deleteApi(endpoint: string) {
    return this.http.delete(this.apiUrl + endpoint, { headers: this.headers() }).pipe(map((response) => response));
  }

  // Public method to delete an item
  public async delete(endpoint: string): Promise<any> {
    try {
      return await firstValueFrom(this.deleteApi(endpoint)); // Handle the response as needed
    } catch (error) {
      console.error('Error deleting item:', error);
      throw error; // Rethrow or handle the error as needed
    }
  }

  // Function to perform POST request with form data
  public async postForm(endpoint: string, model: any) {
    const response$ = this.http.post(this.apiUrl + endpoint, model, {
      headers: this.getHeaders(),
    });
    return await firstValueFrom(response$);
  }

  // Function to perform POST request (JSON data)
  public post(endpoint: string, model: any) {
    return this.http.post(this.apiUrl + endpoint, model, { headers: this.headers() }).pipe(map((response) => response));
  }

  // Verify user using token
  public verifyUser(endpoint: string, token: string) {
    let params = new HttpParams().set('token', token);

    return this.http.post(this.apiUrl + endpoint, {}, { params }).pipe(map((response) => response));
  }

  // Authentication functions
  public async loginUser(endpoint: string, model: any): Promise<any> {
    const login$ = this.http.post<any>(this.apiUrl + endpoint, model, { headers: this.getHeaders() });
    const response = await firstValueFrom(login$);

    // Update token signal with new access token
    this.setToken(response.data?.access_token);

    return response;
  }

  //Generic method for refreshing the token
  refreshToken(endpoint: string, body: any): Promise<any> {
    return firstValueFrom(this.http.post(endpoint, body));
  }

  public async fetchUserDetails(endpoint: string): Promise<any> {
    const userDetails$ = this.http.get(this.apiUrl + endpoint, {
      headers: this.getHeaders(),
    });
    return await firstValueFrom(userDetails$);
  }

  public async resetPassword(endpoint: string, model: ChangePasswordRequest): Promise<ChangePasswordResponse> {
    const reset$ = this.http.post(this.apiUrl + endpoint, model, { headers: this.getHeaders() });
    const response: ChangePasswordResponse = await firstValueFrom(reset$);

    console.log(response);
    return response;
  }

  constructor() {}
}
