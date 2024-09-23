import { Channel } from './channel.model';
import { User } from './user.model';

export interface Message {
    messageId: number;
    messageText: string;
    sentAt: Date;
  
    channelId: number; // Foreign Key
    channel?: Channel; // Reference Navigation Property for Channel
  
    userId: number; // Foreign Key
    user?: User; // Reference Navigation Property for User
  }
  

  