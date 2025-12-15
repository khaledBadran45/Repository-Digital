import { Component } from '@angular/core';
import { Btn } from "../btn/btn";
import { LibrariesCard } from "../libraries/libraries-card/libraries-card";
import { LatestCard } from "./latest-card/latest-card";

@Component({
  selector: 'app-latest',
  imports: [Btn, LibrariesCard, LatestCard],
  templateUrl: './latest.html',
  styleUrl: './latest.scss',
})
export class Latest {

}
