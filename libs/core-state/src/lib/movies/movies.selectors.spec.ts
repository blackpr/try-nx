import { Movie } from '@tim/api-interfaces';
import { MoviesEntity } from './movies.models';
import {
  moviesAdapter,
  MoviesPartialState,
  initialState,
} from './movies.reducer';
import * as MoviesSelectors from './movies.selectors';

describe('Movies Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getMoviesId = (it: Movie) => it.id;
  const createMoviesEntity = (id: string) =>
    ({
      id,
      Title: 'fake-Title',
      Year: 'fake-Year',
      Genre: 'fake-Genre',
      Director: 'fake-Director',
      Poster: 'fake-Poster',
      imdbRating: 'fake-imdbRating',
    } as Movie);

  let state: MoviesPartialState;

  beforeEach(() => {
    state = {
      movies: moviesAdapter.setAll(
        [
          createMoviesEntity('PRODUCT-AAA'),
          createMoviesEntity('PRODUCT-BBB'),
          createMoviesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Movies Selectors', () => {
    it('getAllMovies() should return the list of Movies', () => {
      const results = MoviesSelectors.selectAllMovies(state);
      const selId = getMoviesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = MoviesSelectors.getSelected(state) as Movie;
      const selId = getMoviesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getMoviesLoaded() should return the current "loaded" status', () => {
      const result = MoviesSelectors.selectMoviesLoaded(state);

      expect(result).toBe(true);
    });

    it('getMoviesError() should return the current "error" state', () => {
      const result = MoviesSelectors.selectMoviesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
