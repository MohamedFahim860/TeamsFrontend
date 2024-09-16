import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { SideNavComponent } from '../../shared/components/side-nav/side-nav.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SideNavComponent
  ]
})
export class ChatModule { }
