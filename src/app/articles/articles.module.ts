import { NgModule } from '@angular/core';

import { ArticlesRoutingModule } from './articles-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';


@NgModule({
  declarations: [ArticlesListComponent, ArticleDetailsComponent],
  imports: [
    SharedModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule {
}
