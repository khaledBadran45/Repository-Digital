import { Component, inject, input } from '@angular/core';
import { Btn } from "../../btn/btn";
import { Service } from '../service.model';
import { LocalizationService } from '../../../localization';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-service-card',
  imports: [Btn, TranslatePipe],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
})
export class ServiceCard {
  servies = input.required<Service>();
  localservice = inject(LocalizationService);
  lang() {
    return this.localservice.lang();
  }
}
