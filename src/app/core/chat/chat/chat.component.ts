import { Component } from '@angular/core';
import { SideNavComponent } from "../../../shared/components/side-nav/side-nav.component";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [SideNavComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

}
