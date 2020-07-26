import { SearchService } from './search.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('SearchService', () => {
  const mockMovies = [
    {
      movieId: 1,
      coverURL: '123',
      description: '12312312312123121231231',
      duration: 123,
      name: 'Interstellar',
      releaseDate: '2020-06-30',
      trailerURL: 'https://www.youtube.com/embed/zSWdZVtXT7E',
      languageId: 1,
      statusId: 1,
      theatreIds: [1],
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService],
    });
  });
  describe('GET movies', () => {
    let searchService: SearchService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
      searchService = TestBed.get(SearchService);
      httpTestingController = TestBed.get(HttpTestingController);
    });

    it('Should get movies', () => {
      searchService.movies().subscribe((movies) => {
        expect(movies).toBe(mockMovies);
      });
    });
  });
});
