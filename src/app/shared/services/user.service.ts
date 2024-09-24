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

  getUsers(): Observable<User[]> {
    const url = `${this.baseUrl}/users`;  // Endpoint for GetUsers
    return this.http.get<User[]>(url);  // Make the HTTP GET request
  }

  getCurrentUsers(): Observable<User> {
    const url = `${this.baseUrl}/users/current`;  
    return this.http.get<User>(url);
  }
  
}
