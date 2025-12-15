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
 libraries:{titleng:string,desc:string}[] = [
    {titleng:"السيرة النبوية",desc:"نبذه عن سيره الحبيب محمد صلى الله عليه وسلم"},
    {titleng:"ذيل السيرة النبوية",desc:"اعرف مالا تسع ان تجهل"},
    {titleng:"السيرة النبوية لابن هشام (الجزء الثاني)",desc:"اقرأ سيره الحبيب محمد صلى الله عليه وسلم لابن هشام "},
  ];
}
