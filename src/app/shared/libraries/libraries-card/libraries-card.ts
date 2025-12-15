import { Component, input } from '@angular/core';

@Component({
  selector: 'app-libraries-card',
  imports: [],
  templateUrl: './libraries-card.html',
  styleUrl: './libraries-card.scss',
})
export class LibrariesCard {
  library = input.required<{titleng:string,desc:string}>();

}
