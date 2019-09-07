import { TestBed } from '@angular/core/testing';

import { ArticlesService } from './articles.service';
import { TestingModule } from '../../testing/testing.module';

describe('ArticlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [TestingModule],
  }));

  it('should be created', () => {
    const service: ArticlesService = TestBed.get(ArticlesService);
    expect(service).toBeTruthy();
  });
});
