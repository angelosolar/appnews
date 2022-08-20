import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NewsResponse, Article } from '../../interfaces/index';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public articles: Article[] = [];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getTopHeadLine().subscribe(resp => {
      console.log(resp.articles);
      this.articles = resp.articles;
    })
  }

}
