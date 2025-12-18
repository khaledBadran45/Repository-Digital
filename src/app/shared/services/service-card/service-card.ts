import { Component, inject, input } from '@angular/core';
import { Btn } from "../../btn/btn";
import { Service } from '../service.model';
import { LocalizationService } from '../../../localization';

@Component({
  selector: 'app-service-card',
  imports: [Btn],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
})
export class ServiceCard  {
  servies = input.required<Service>();
  localservice = inject(LocalizationService);
  lang(){
     return this.localservice.lang() ;
   }
}
