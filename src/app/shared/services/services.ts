import { Component } from '@angular/core';
import { ServiceCard } from "./service-card/service-card";

@Component({
  selector: 'app-services',
  imports: [ServiceCard],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services:{titleng:string,desc:string}[] = [
    {titleng:"الخدمات",desc:"الخدمات المتاحة"},
    {titleng:"المكتبات الوقفية",desc:"المكتبات الوقفية المتاحة"},
    {titleng:"تصفح المستودع",desc:"تصفح المستودع المتاح"},
    {titleng:"المشاركة الالكترونية",desc:"المشاركة الالكترونية المتاحة"},
    {titleng:"تسجيل الدخول",desc:"تسجيل الدخول المتاح"}
  ];
}