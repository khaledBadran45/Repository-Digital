import { Component, inject, input } from '@angular/core';
import { LibrariesModel } from '../libraries.model';
import { LocalizationService } from '../../../localization';

@Component({
  selector: 'app-libraries-card',
  imports: [],
  templateUrl: './libraries-card.html',
  styleUrl: './libraries-card.scss',
})
export class LibrariesCard {
  library = input.required<LibrariesModel>();
  localization =  inject(LocalizationService);
  lang(){
   return this.localization.lang()
  }

}
