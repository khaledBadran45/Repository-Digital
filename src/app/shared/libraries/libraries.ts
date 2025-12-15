import { Component } from '@angular/core';
import { LibrariesCard } from "./libraries-card/libraries-card";

@Component({
  selector: 'app-libraries',
  imports: [LibrariesCard],
  templateUrl: './libraries.html',
  styleUrl: './libraries.scss',
})
export class Libraries {

}
