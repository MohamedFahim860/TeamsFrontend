// channel.model.ts

export interface Channel {
    channelId: number;
    channelName: string;
    createdAt: Date;
  
    userChannels?: UserChannel[]; // Reference Navigation Property for UserChannel
    messages?: Message[]; // Reference Navigation Property for Message
  }
  
  // Assuming the `UserChannel` and `Message` models are already defined
  import { UserChannel } from './user-channel.model';
  import { Message } from './message.model';
  