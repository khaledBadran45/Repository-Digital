import { Component, input } from '@angular/core';
import { Btn } from "../../btn/btn";

@Component({
  selector: 'app-service-card',
  imports: [Btn],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
})
export class ServiceCard {
  servies = input.required<{titleng:string,desc:string}>();

}
