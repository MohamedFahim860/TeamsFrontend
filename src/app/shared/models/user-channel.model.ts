import { User } from './user.model';
import { Channel } from './channel.model';


export interface UserChannel {
    id: number;
  
    userId: number; // Foreign Key
    user?: User; // Reference Navigation Property for User
  
    channelId: number; // Foreign Key
    channel?: Channel; // Reference Navigation Property for Channel
  }
  
