import { Component, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import this for ngFor, ngIf, etc.
import { FormsModule } from '@angular/forms'; // Import FormsModule if using forms
import { ChatComponentService } from '../../../shared/services/common/chat-component-communication.services';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/models/user.model';
// import { CommonModule } from '@angular/common'; // Import this for ngFor, ngIf, etc.

// import { ChatRoutingModule } from './chat-routing.module';
// import { ItemListComponent } from './item-list/item-list.component';
// import { FormsModule } from '@angular/forms'; // Import FormsModule if using forms

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})

export class ItemListComponent implements OnInit {

  @Input() selectedTab: string = 'chat'; // Default to 'chat'

  itemType: string ="";
  selectedChat: string ="";
  users: User[] = [];

  constructor(
    private chatcomponentService: ChatComponentService,
    private userService: UserService
  
  ){}

  ngOnInit(){
    this.chatcomponentService.itemType$.subscribe(type =>{
      this.itemType = type;
    })
    this.initialize();
  }

  initialize(){
    this.getAllUsers();
    this.getCurrentUser();
  }

  selectChat(user: User) {
    this.selectedChat = user.firstName;
    this.chatcomponentService.setChat(user.firstName);
  }

  getAllUsers(){
    this.userService.getUsers().subscribe((users: User[])=>{
      this.users = users;
      console.log(users);
    },
      (err)=>{
        console.log(err);
      })
  }

  getCurrentUser(){
    this.userService.getCurrentUsers().subscribe((user: User)=>{
      console.log("Current User:",user);
    })
  }

  // Sample data for chats and teams
  chats = [
    { name: 'John Doe', lastMessage: 'Hey, how are you?' },
    { name: 'Jane Smith', lastMessage: 'Did you finish the report?' },
    { name: 'Project Team', lastMessage: 'Meeting at 2 PM.' }
  ];

  teams = [
    { name: 'Marketing Team' },
    { name: 'Development Team' },
    { name: 'HR Team' }
  ];

}
