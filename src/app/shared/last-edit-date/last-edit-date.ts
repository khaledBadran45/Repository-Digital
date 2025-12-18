import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LocalizationService } from '../../localization';

@Component({
  selector: 'app-last-edit-date',
  imports: [TranslatePipe],
  templateUrl: './last-edit-date.html',
  styleUrl: './last-edit-date.scss',
})
export class LastEditDate {
  localization = inject(LocalizationService);
  lang(){
    return this.localization.lang()
  }

}
