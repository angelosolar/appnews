import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsResponse } from '../interfaces';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopHeadLine(page: number) {
    return this.http.get<NewsResponse>(`${url}/top-headlines`, {
      params: {
        apiKey: apiKey,
        country: 'us',
        category: 'business',
        page: page
      }
    })
  }

  getTopHeadLineByCategories(page: number, category: string) {
    return this.http.get<NewsResponse>(`${url}/top-headlines`, {
      params: {
        apiKey: apiKey,
        country: 'us',
        category: category,
        page: page
      }
    })
  }
}
