import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { browser } from 'protractor';
import { url } from 'inspector';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() article: Article
  @Input() index: number;

  constructor(private iab: InAppBrowser) { }

  ngOnInit() { }

  openArticle() {
    const browser = this.iab.create(this.article.url);
    browser.show();
  }

}
