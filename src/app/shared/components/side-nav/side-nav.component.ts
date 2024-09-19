import { Component } from '@angular/core';
import {ChatComponentService} from "../../services/common/chat-component-communication.services"

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  constructor(private chatComponentService: ChatComponentService){}

  selectedTab: string = 'chat';

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.chatComponentService.setItemType(tab);
  }


}
