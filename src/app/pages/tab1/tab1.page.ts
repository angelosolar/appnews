import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NewsResponse, Article } from '../../interfaces/index';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll

  public articles: Article[] = [];
  page: number = 1;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getTopHeadLine(this.page).subscribe(resp => {
      console.log(resp.articles);
      this.articles = resp.articles;
    })
  }

  loadData(event: any) {
    this.page += 1;
    console.log(event);
    this.newsService.getTopHeadLine(this.page).subscribe(resp => {
      //console.log(resp.articles);
      if (resp.articles.length === 0) {
        this.infiniteScroll.disabled = true;
      }
      this.articles = [...this.articles, ...resp.articles];
      this.infiniteScroll.complete();
    })
  }

}

