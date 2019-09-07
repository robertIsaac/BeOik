import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books$ = this.booksService.getAll();

  constructor(
    protected booksService: BooksService,
  ) {
  }

  ngOnInit() {
  }

}
