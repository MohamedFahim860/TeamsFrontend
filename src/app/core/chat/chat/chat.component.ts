import { Component } from '@angular/core';
import { SideNavComponent } from "../../../shared/components/side-nav/side-nav.component";
import { ChatModule } from '../chat.module';//Not standalone components cannot be imported to the imports array, only modules and standalone components can be imported, if
import { ItemListComponent } from '../item-list/item-list.component';
import { ChatAreaComponent } from '../chat-area/chat-area.component';
//a non-standalone component need to be used here, importing the whole module it self is needed, hence here the ChatModule is imported.

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [SideNavComponent, ItemListComponent, ChatAreaComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

}
