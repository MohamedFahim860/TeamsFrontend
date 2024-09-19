import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatModule } from './core/chat/chat.module';
//import { ItemListComponent } from './core/chat/item-list/item-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TeamsFrontend';
  showFiller = false;
}
