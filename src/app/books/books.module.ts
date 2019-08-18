import { NgModule } from '@angular/core';
import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksListComponent } from './books-list/books-list.component';


@NgModule({
  declarations: [BookDetailsComponent, BooksListComponent],
  imports: [
    SharedModule,
    BooksRoutingModule
  ]
})
export class BooksModule {
}
