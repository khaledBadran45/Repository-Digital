import { Component } from '@angular/core';
import { FooterComponent } from '../../core/footer/footer-component';
import { HeaderComponent } from '../../core/header/header-component';
import { Hero } from '../../shared/hero/hero';
import { LastEditDate } from '../../shared/last-edit-date/last-edit-date';
import { Latest } from '../../shared/latest/latest';
import { Libraries } from '../../shared/libraries/libraries';
import { Services } from '../../shared/services/services';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, Hero, Libraries, Latest, LastEditDate, Services],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
