import { Component } from '@angular/core';
import AOS from 'aos';
import { TranslateService } from '@ngx-translate/core';

AOS.init();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'speekpod';
  lang = 'en';

  constructor(private translateService: TranslateService){
    this.translateService.setDefaultLang('en');
    // this.translateService.use(this.translateService.getBrowserLang());
  }

  setLang(lang: string){
    this.translateService.use(lang);
    this.lang = lang;
  }
}
