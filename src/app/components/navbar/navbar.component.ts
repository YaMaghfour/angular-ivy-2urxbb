import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  lang: string = "fr";

  constructor(private translateService: TranslateService) {
    this.lang = this.translateService.currentLang;
  }

  ChangeLang(lang: string) {
    $("#list-lang .dropdown-item").removeClass("active");
    $(`#list-lang .${lang}`).addClass("active");

    this.translateService.use(lang);
    this.lang = lang
  }

}
