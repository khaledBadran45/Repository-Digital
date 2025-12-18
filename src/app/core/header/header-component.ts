import { Component, inject, OnInit } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';
import { LocalizationService } from '../../localization';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent implements OnInit {
  mobileMenuOpen = false;
  private translate = inject(TranslateService);
  ngOnInit(): void {
    this.translate.use('ar');
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  changeLang() {
  if(document.documentElement.lang == 'en')  {
    this.translate.use('ar');
    document.documentElement.lang = 'ar';
  } else {
    this.translate.use('en');
    document.documentElement.lang = 'en';
  }
}
}
