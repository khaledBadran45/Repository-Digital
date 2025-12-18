import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  constructor() { }
  lang(): 'en' | 'ar' {
    return document.documentElement.lang as 'en' | 'ar';
  }
}
