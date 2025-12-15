import { Component, input } from '@angular/core';
import { Tag } from "../../tag/tag";

@Component({
  selector: 'app-latest-card',
  imports: [Tag],
  templateUrl: './latest-card.html',
  styleUrl: './latest-card.scss',
})
export class LatestCard {
  latest = input.required<{titleng:string,tags:string[],path:string}>();

}
