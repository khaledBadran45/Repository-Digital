import { Component } from '@angular/core';
import { Btn } from "../btn/btn";
import { LatestCard } from "./latest-card/latest-card";

@Component({
  selector: 'app-latest',
  imports: [Btn, LatestCard],
  templateUrl: './latest.html',
  styleUrl: './latest.scss',
})
export class Latest {
  
 latest:{titleng:string,tags:string[],path:string}[] = [
    {titleng:"السيرة النبوية",tags:["جديده","السيرة النبوية"],path:"latest-1.jpg",},
    {titleng:"ذيل السيرة النبوية",tags:["السيرة النبوية" ,"مميز"],path:"latest-2.jpg",},
    {titleng:"السيرة النبوية لابن هشام (الجزء الثاني)",tags:["نادره"],path:"latest3.png",},
  ];
}
