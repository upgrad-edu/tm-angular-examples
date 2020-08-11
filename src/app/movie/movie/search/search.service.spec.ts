import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SearchService } from './search.service';
import { API } from 'src/app/shared/service/api';

describe('Search Service', () => {

  let injector;
  let httpMock: HttpTestingController;

  const mockMovies = [
    {
      movieId: 1,
      coverURL: 'https://images-na.ssl-images-amazon.com/images/I/81%2BNup8-8NL._SL1500_.jpg',
      description: 'Movie description',
      duration: 123,
      name: 'Avengers: Endgame',
      releaseDate: '2020-06-30',
      trailerURL: 'https://www.youtube.com/embed/TcMBFSGVi1c',
      languageId: 1,
      statusId: 1,
      theatreIds: [1],
    },
  ];

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);

  });

  describe('GET Movies', () => {

    let searchService: SearchService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
      searchService = TestBed.inject(SearchService);
      httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should get movies', () => {

      const hosturl = 'http://localhost:7070/movie_app/v1/';

      searchService.movies().subscribe((movies: any[]) => {
        expect(movies.length).toBe(1);
        expect(movies).toBe(mockMovies);
      });

      const req = httpMock.expectOne(`${hosturl}${API.MOVIE}/`);
      expect(req.request.method).toBe('GET');
      req.flush(mockMovies);
    });
  });
});
