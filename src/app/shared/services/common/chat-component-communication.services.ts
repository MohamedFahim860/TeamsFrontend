// item.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ChatComponentService {
  private itemTypeSubject = new BehaviorSubject<string>('chat'); // Default type
  itemType$ = this.itemTypeSubject.asObservable();

  private chatNameSubject = new BehaviorSubject<string>(''); // Default type
  chatName$ = this.chatNameSubject.asObservable();

  private chatUserSubject = new BehaviorSubject<User | null>(null); // Default type
  chatUser$ = this.chatUserSubject.asObservable();

  //This function is used to establish the communication between two sibling components which are side-nav and the item-list component. To set the item-list header and the content.
  setItemType(type: string) {
    this.itemTypeSubject.next(type);
  }

  setChat(chat: string){
    this.chatNameSubject.next(chat);
  }

  setChatUser(user: User){
    this.chatUserSubject.next(user);
  }
}
