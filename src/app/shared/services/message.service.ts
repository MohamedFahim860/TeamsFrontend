import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private baseUrl = 'https://localhost:7195/api';

  constructor(private http: HttpClient) { }

  sendMessage(messageText: string, receiverId: number): Observable<number> {
    const url = `${this.baseUrl}/Messages/send`;

    // const message = {
    //   messageText: messageText
    // };

    return this.http.post<number>(url, { messageText, receiverId });
  }

  getMessagesBetweenUsers(receiverId: number): Observable<Message[]> {
    const url = `${this.baseUrl}/Messages/chat/${receiverId}`;
    return this.http.get<Message[]>(url);
  }

  deleteMessage(messageId: number): Observable<boolean> {
    console.log("Delete Message Service API request Executed!")
    const url = `${this.baseUrl}/Messages/delete/${messageId}`; 
    return this.http.delete<boolean>(url);
  }

  
}
