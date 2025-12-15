import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/header/header-component";
import { FooterComponent } from "./core/footer/footer-component";
import { Hero } from "./shared/hero/hero";
import { Libraries } from "./shared/libraries/libraries";
import { Latest } from "./shared/latest/latest";
import { LastEditDate } from "./shared/last-edit-date/last-edit-date";
import { Services } from "./shared/services/services";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, Hero, Libraries, Latest, LastEditDate, Services],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Repository-Digital';
}
