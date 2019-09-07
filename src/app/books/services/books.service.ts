import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Book } from '../interfaces/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    protected httpClient: HttpClient,
  ) {
  }

  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(environment.ApiUrl + 'Book/GetAll');
  }
}
