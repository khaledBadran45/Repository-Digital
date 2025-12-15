import { Component } from '@angular/core';
import { LibrariesCard } from "./libraries-card/libraries-card";
import { Btn } from "../btn/btn";

@Component({
  selector: 'app-libraries',
  imports: [LibrariesCard, Btn],
  templateUrl: './libraries.html',
  styleUrl: './libraries.scss',
})
export class Libraries {

}
