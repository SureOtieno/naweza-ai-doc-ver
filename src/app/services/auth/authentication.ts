import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, of, tap} from 'rxjs';
import {Router} from '@angular/router';
import {User} from '../../core/models/user.model';
import {Mail} from '../../core/models/mails.model';


@Injectable({
  providedIn: 'root'
})
export class Authentication {
  private baseAuthUrl = 'http://localhost:8081/api/auth';
  private baseMailUrl = 'http://localhost:8081/api/v1/mails';
  private tokenKey = 'token';
  private userSubject = new BehaviorSubject<User | null>(this.loadUserFromStorage());


  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  private getAuthHeaders() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.getToken()}`
      })
    };
  }


  sendMail(
    credentials: {
    sender: string;
    recipient: string,
    subject: string,
    body: string
  }):
    Observable<any> {
    return this.http.post(`${this.baseMailUrl}/send_mail`, credentials,  this.getAuthHeaders());
  }

  fetchMail(): Observable<Mail[]> {
    return this.http.get<Mail[]>(`${this.baseMailUrl}/get_mails`, {
      headers: { Authorization: `Bearer ${this.getToken()}` }
    });
  }


  deleteMail(id: number): Observable<any> {
    return this.http.delete(`${this.baseMailUrl}/delete/${id}`,  this.getAuthHeaders());
  }

  getMail(id: number): Observable<any> {
    return this.http.get(`${this.baseMailUrl}/get/${id}`,  this.getAuthHeaders());
  }


  login(
    credentials: {
    username: string | null;
    password: string | null
  }):
    Observable<any> {
    return this.http.post<any>(`${this.baseAuthUrl}/login`, credentials).pipe(
      tap(user => {
        this.userSubject.next(user);
        localStorage.setItem('resp', JSON.stringify(user));
        localStorage.setItem('token', user.token);
        localStorage.setItem('user', JSON.stringify(user.data));
      })

    );
  }

  signup(data: {
    firstName: string;
    surName: string;
    otherName: string;
    email: string;
    occupation: string;
    dob: string;
    country: string;
    phone: string;
    password: string;
    role: string;
  }):
    Observable<any> {
    return this.http.post(`${this.baseAuthUrl}/signup`, data);
  }

  // store token after login
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    // basic check: token exists
    if (!token) return false;

    // (optional) decode + check expiry if it's a JWT
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }

  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }


  logout() {
    localStorage.removeItem(this.tokenKey);
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  private loadUserFromStorage(): User | null {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  }

  startTokenTimer() {
    const token = this.getToken();
    if (!token) return;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expires = payload.exp * 1000;
      const timeout = expires - Date.now();

      if (timeout > 0) {
        setTimeout(() => {
          this.logout();
          alert("Your session has expired. Please log in again.");
        }, timeout);
      } else {
        this.logout();
      }
    } catch {
      this.logout();
    }
  }


}

