import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:7195/api/Auth/login';
  //private baseUrl = "https://localhost:7155/api";

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(this.apiUrl, { username, password }).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['chat']);
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
