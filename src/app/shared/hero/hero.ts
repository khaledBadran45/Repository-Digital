import { Component } from '@angular/core';
import { SearchInp } from "../search-inp/search-inp";

@Component({
  selector: 'app-hero',
  imports: [SearchInp],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

}
