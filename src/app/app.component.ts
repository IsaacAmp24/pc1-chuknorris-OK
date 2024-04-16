import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarComponent} from "./public/toolbar/toolbar.component";
import {FooterContentComponent} from "./public/footer-content/footer-content.component";
import {CardsComponent} from "./norris/components/cards/cards.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, FooterContentComponent, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pc1-chuknorris-OK';
}
