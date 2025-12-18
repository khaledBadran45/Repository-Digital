import { Component } from '@angular/core';
import { SearchInp } from "../search-inp/search-inp";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [SearchInp,TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

}
