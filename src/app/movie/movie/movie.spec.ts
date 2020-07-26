import { Movie } from './movie';

describe('Movie Model', () => {
  let movie: Movie = null;

  beforeEach(() => {
    movie = new Movie();
  });

  it('Should create a Movie with no value assigned', () => {
    expect(movie).not.toBeNull();
  });

  it('Should create a Movie with details', () => {
    movie = new Movie(
      'cover-url',
      'description-text',
      '140',
      'movie-name',
      new Date(),
      'trailer-url',
      '7',
      '2',
      [2]
    );
    expect(movie.name).toBe('movie-name');
  });
});
