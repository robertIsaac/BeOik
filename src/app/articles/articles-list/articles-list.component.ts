import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  articles$ = this.articlesService.getAll();

  constructor(
    protected articlesService: ArticlesService
  ) {
  }

  ngOnInit() {
  }

}
