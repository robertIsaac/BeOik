import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';
import { TestingModule } from '../../testing/testing.module';

describe('BooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [TestingModule],
  }));

  it('should be created', () => {
    const service: BooksService = TestBed.get(BooksService);
    expect(service).toBeTruthy();
  });
});
