import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import this for ngFor, ngIf, etc.

import { ChatRoutingModule } from './chat-routing.module';
import { ItemListComponent } from './item-list/item-list.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule if using forms

@NgModule({
  declarations: [
    //ItemListComponent, // Declare your ItemListComponent here
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
  ],
  exports: [
  ]
})
export class ChatModule { }
