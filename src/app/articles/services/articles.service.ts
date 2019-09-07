import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Article } from '../interfaces/article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    protected httpClient: HttpClient,
  ) {
  }

  getAll(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(environment.ApiUrl + 'Articles/GetAllArticles');
  }
}
