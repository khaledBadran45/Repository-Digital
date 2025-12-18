import { Component, inject, input } from '@angular/core';
import { Tag } from "../../tag/tag";
import { LatestModel } from '../latest.model';
import { LocalizationService } from '../../../localization';

@Component({
  selector: 'app-latest-card',
  imports: [Tag],
  templateUrl: './latest-card.html',
  styleUrl: './latest-card.scss',
})
export class LatestCard {
  latest = input.required<LatestModel>();
  localization = inject(LocalizationService);
  lang(){
   return this.localization.lang()
  }

}
