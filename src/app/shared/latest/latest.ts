import { Component } from '@angular/core';
import { Btn } from "../btn/btn";
import { LatestCard } from "./latest-card/latest-card";
import { TranslatePipe } from '@ngx-translate/core';
import { LatestModel } from './latest.model';

@Component({
  selector: 'app-latest',
  imports: [Btn, LatestCard, TranslatePipe],
  templateUrl: './latest.html',
  styleUrl: './latest.scss',
})
export class Latest {
 latest:LatestModel[] = [
    {title:{en:"The Biography of the Prophet",ar:"السيرة النبوية"},tags:{en:["New","Biography"],ar:["جديده","السيرة النبوية"]},path:"latest-1.jpg",},
    {title:{en:"The Biography of the Prophet",ar:"ذيل السيرة النبوية"},tags:{en:["Biography","Special"],ar:["السيرة النبوية" ,"مميز"]},path:"latest-2.jpg",},
    {title:{en:"The Biography of the Prophet Ibn Hisham",ar:"السيرة النبوية لابن هشام (الجزء الثاني)"},tags:{en:["Rare"],ar:["نادره"]},path:"latest3.png",},
  ];
}
