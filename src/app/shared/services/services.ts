import { Component } from '@angular/core';
import { ServiceCard } from "./service-card/service-card";

@Component({
  selector: 'app-services',
  imports: [ServiceCard],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {

}
