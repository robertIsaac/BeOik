import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';
import { switchMap } from 'rxjs/operators';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<Book>;
  relatedBooks$: Observable<Book[]>;

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected booksService: BooksService,
  ) {
  }

  ngOnInit() {
    this.book$ = this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        return this.booksService.getBook(params.get('bookId'));
      })
    );

    this.relatedBooks$ = this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        return this.booksService.getRelatedBooks$(params.get('bookId'));
      })
    );
  }

}
