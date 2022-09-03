import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Article } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  private _articles: Article[] = [];

  get getLocalArticles() {
    return [...this._articles];
  }

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
    this.loadFavorites();
  }
  async saveOrRemoveArticle(article: Article) {

    const exist = this._articles.find(localArticle => localArticle.title === article.title)
    if (exist) {
      this._articles = this._articles.filter(localArticle => localArticle.title != article.title)
    } else {
      this._articles = [article, ...this._articles];
    }


    this._storage.set('articles', this._articles);
  }

  async loadFavorites() {
    try {
      const articles = await this._storage.get('articles')
      this._articles = articles || [];
    } catch (error) {
      console.log(error)
    }
  }

  articleInFavorites(article: Article) {
    return !!this._articles.find(localArticle => localArticle.title === article.title);
  }

}
