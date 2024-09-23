import { UserChannel } from './user-channel.model';
import { Message } from './message.model';

export interface User {
    userId: number; // Primary Key
    userName: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    profilePictureUrl: string;
    createdAt: Date;
  
    userChannel?: UserChannel[];  // Reference to dependent entity (UserChannel)
    message?: Message[];  // Reference to dependent entity (Message)
  }
  
//   // Assuming UserChannel and Message models are already defined in your frontend
//   export interface UserChannel {
//     // Define the properties of the UserChannel model
//   }
  
//   export interface Message {
//     // Define the properties of the Message model
//   }
  