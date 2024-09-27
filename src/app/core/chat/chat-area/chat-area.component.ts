import { Component, Input, OnInit, SimpleChanges  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // If you need forms
import { ChatComponentService } from '../../../shared/services/common/chat-component-communication.services';
import { User } from '../../../shared/models/user.model';
import { MessageService } from '../../../shared/services/message.service';
import { Message } from '../../../shared/models/message.model';

@Component({
  selector: 'app-chat-area',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-area.component.html',
  styleUrl: './chat-area.component.scss'
})
export class ChatAreaComponent implements OnInit {
  @Input() selectedChat: any = {'name': "John Doe"}  // To pass in the selected chat (user or team) from the item list: For now 
  //@Input() messages: { sender: string, content: string, timestamp: string }[] = []; // List of messages
  @Input() selectedUser: User | null = null; // To pass in the selected user(chat)

  constructor
  (
    private chatcomponentService: ChatComponentService,
    private messageService: MessageService
  ){}

  chatName: string ="";
  newMessage: string ="";
  messages: Message[] =[];

  ngOnInit(): void {
    this.chatcomponentService.itemType$.subscribe(type =>{
      this.chatName = type;
    })

    this.chatcomponentService.chatName$.subscribe(name =>{
      console.log(name);
      this.selectedChat = name;
    })

    this.chatcomponentService.chatUser$.subscribe(user =>{
      console.log("Selected User:" ,user);
      this.selectedUser = user;

      if (this.selectedUser?.userId !== undefined && this.selectedUser?.userId !== null) {
        this.getMessages(this.selectedUser.userId);
      } else {
        console.error('No valid user selected!');
      }
    })

    // if (this.selectedUser?.userId !== undefined && this.selectedUser?.userId !== null) {
    //   this.getMessages(this.selectedUser.userId);
    // } else {
    //   console.error('No valid user selected!');
    // }
    //this.getMessages(1);
    
  }

  // This will be triggered whenever selectedUser input is changed
  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['selectedUser'] && this.selectedUser?.userId) {
  //     console.log('User changed:', this.selectedUser);
  //     this.getMessages(this.selectedUser.userId);
  //   }
  // }

  isHovered = false;

   // This can be used for conditional logic (personal chat vs team chat)
   get isTeamChat(): boolean {
    return this.selectedChat && this.selectedChat.type === 'team';
  }

  sendMessage(): void {
    if (!this.selectedUser?.userId) {
      console.error('No receiver selected!');
      return;
    }

    this.messageService.sendMessage(this.newMessage, this.selectedUser.userId).subscribe(
      (savedMessageId) => {
        console.log('Message sent successfully:', savedMessageId);
        if(this.selectedUser){
          this.getMessages(this.selectedUser.userId);  // Reload messages after sending
        }  
        this.newMessage = "";
      },
      (error) => {
        console.error('Error sending message:', error);
      }
    );
  }

  getMessages(receiverId: number): void {
    this.messageService.getMessagesBetweenUsers(receiverId).subscribe(
      (messages) => {
        this.messages = messages;
        console.log("Retrieved Messages:",messages);
      },
      (error) => {
        console.error('Error fetching messages:', error);
      }
    );
  }

  // selectReceiver(receiverId: number): void {
  //   this.selectedUser?.userId = receiverId;  // Set receiver ID dynamically
  //   this.getMessages(receiverId);  // Load messages for the selected user
  // }

}
