// chat.service.ts
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private hubConnection!: HubConnection;
  private messagesSource = new BehaviorSubject<Message | null>(null);
  currentMessage$ = this.messagesSource.asObservable();

  constructor() {
    this.startConnection();
  }

  private startConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('https://your-api-url/chatHub') // Replace with your API URL
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch((err) => console.log('Error while starting connection: ' + err));

    this.hubConnection.on('ReceiveMessage', (message) => {
      this.messagesSource.next(message);
    });
  }

  public sendMessage(message: any) {
    this.hubConnection.invoke('SendMessage', message)
      .catch((err) => console.error(err));
  }
}
