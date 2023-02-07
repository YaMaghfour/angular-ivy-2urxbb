import { AfterViewInit, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {

  lang: string = "fr";

  constructor(private translateService: TranslateService) {
    this.lang = this.translateService.currentLang;
  }

  ngAfterViewInit(): void {
    this.setActiveClass(this.lang);
  }

  setActiveClass(lang: string) {
    $("#list-lang .dropdown-item").removeClass("active");
    $(`#list-lang .${lang}`).addClass("active");
  }

  ChangeLang(lang: string) {
    this.setActiveClass(lang);
    this.translateService.use(lang);
    this.lang = lang
  }

}
