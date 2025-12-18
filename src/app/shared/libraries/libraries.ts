import { Component } from '@angular/core';
import { LibrariesCard } from "./libraries-card/libraries-card";
import { Btn } from "../btn/btn";

import { LibrariesModel } from "./libraries.model";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-libraries',
  imports: [LibrariesCard, Btn, TranslatePipe],
  templateUrl: './libraries.html',
  styleUrl: './libraries.scss',
})
export class Libraries {

  libraries: LibrariesModel[] = [
    {
      title: { en: "The Biography of the Prophet", ar: "السيرة النبوية" },
      description: {
        en: "A brief biography of the beloved Prophet Muhammad (PBUH)",
        ar: "نبذه عن سيره الحبيب محمد صلى الله عليه وسلم"
      }
    },
    {
      title: { en: "The Biography of the Prophet", ar: "ذيل السيرة النبوية" },
      description: { en: "A brief biography of the beloved Prophet Muhammad (PBUH)", ar: "اعرف مالا تسع ان تجهل" }
    },
    {
      title: {
        en: "The Biography of the Prophet Ibn Hisham (Part Two)",
        ar: "السيرة النبوية لابن هشام (الجزء الثاني)"
      }, description: { en: "A brief biography of the beloved (PBUH)", ar: "اقرأ سيره الحبيب محمد صلى الله عليه وسلم لابن هشام " }
    },
  ];
}
