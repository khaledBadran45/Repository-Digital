import { Component } from '@angular/core';
import { ServiceCard } from "./service-card/service-card";
import { TranslatePipe } from '@ngx-translate/core';
import { Service } from './service.model';

@Component({
  selector: 'app-services',
  imports: [ServiceCard, TranslatePipe],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services: Service[] = [
      { title: { en: "Services", ar: "الخدمات" }, description: { en: "Available services", ar: "الخدمات المتاحة" } },
      { title: { en: "Endowment libraries", ar: "المكتبات الوقفية" }, description: { en: "Available endowment libraries", ar: "المكتبات الوقفية المتاحة" } },
      { title: { en: "Browse repository", ar: "تصفح المستودع" }, description: { en: "Browse available repository", ar: "تصفح المستودع المتاح" } },
      { title: { en: "Electronic sharing", ar: "المشاركة الالكترونية" }, description: { en: "Available electronic sharing", ar: "المشاركة الالكترونية المتاحة" } },
      { title: { en: "Login", ar: "تسجيل الدخول" }, description: { en: "Login available", ar: "تسجيل الدخول المتاح" } }
    ];
}