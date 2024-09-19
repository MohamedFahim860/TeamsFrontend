import { Component, Input, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // If you need forms
import { ChatComponentService } from '../../../shared/services/common/chat-component-communication.services';

@Component({
  selector: 'app-chat-area',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-area.component.html',
  styleUrl: './chat-area.component.scss'
})
export class ChatAreaComponent implements OnInit {
  @Input() selectedChat: any = {'name': "John Doe"}  // To pass in the selected chat (user or team) from the item list: For now 
  @Input() messages: { sender: string, content: string, timestamp: string }[] = []; // List of messages

  constructor(private chatcomponentService: ChatComponentService){}

  chatName: string ="";

  ngOnInit(): void {
    this.chatcomponentService.itemType$.subscribe(type =>{
      this.chatName = type;
    })

    this.chatcomponentService.chatName$.subscribe(name =>{
      console.log(name);
      this.selectedChat = name;
    })
    
  }

  isHovered = false;

   // This can be used for conditional logic (personal chat vs team chat)
   get isTeamChat(): boolean {
    return this.selectedChat && this.selectedChat.type === 'team';
  }

}
