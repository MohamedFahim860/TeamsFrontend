import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://localhost:7195/api';

  constructor(private http: HttpClient) { }

  // getAllAccounts(): Observable<User[]> {
  //   return this.requestHandle.get(`${this.baseUrl}/accounts`).pipe(
  //     map(data => {
  //       return data;
  //     }),
  //     catchError(this.exceptionHandler.handleError)
  //   );


  addUser(user: User): Observable<any> {
    const url = `${this.baseUrl}/users/add`;

    return this.http.post(url, user);
  }

  getUsers(): Observable<User[]> {
    const url = `${this.baseUrl}/users`;
    return this.http.get<User[]>(url);  
  }

  getCurrentUsers(): Observable<User> {
    const url = `${this.baseUrl}/users/current`;  
    return this.http.get<User>(url);
  }

  checkEmailExists(email: string): Observable<boolean> {
    const url = `${this.baseUrl}/users/check-email`;
    return this.http.post<boolean>(url, { email });
  }

  checkUsernameExists(username: string): Observable<boolean> {
    const url = `${this.baseUrl}/users/check-username`;
    return this.http.post<boolean>(url, { username });
  }
  
}
