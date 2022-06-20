import { createAction, props } from '@ngrx/store';
import { Movie } from '@tim/api-interfaces';

export const init = createAction('[Movies Page] Init');

export const loadMovies = createAction('[Movies/API] Load Movies');

export const loadMoviesSuccess = createAction(
  '[Movies/API] Load Movies Success',
  props<{ movies: Movie[] }>()
);

export const loadMoviesFailure = createAction(
  '[Movies/API] Load Movies Failure',
  props<{ error: any }>()
);

export const loadMovie = createAction(
  '[Movies/API] Load Movie',
  props<{ movieId: string }>()
);

export const loadMovieSuccess = createAction(
  '[Movies/API] Load Movie Success',
  props<{ movie: Movie }>()
);

export const loadMovieFailure = createAction(
  '[Movies/API] Load Movie Failure',
  props<{ error: any }>()
);

export const updateMovie = createAction(
  '[Movies/API] Update Movie',
  props<{ movie: Movie }>()
);

export const updateMovieSuccess = createAction(
  '[Movies/API] Update Movie Success',
  props<{ movie: Movie }>()
);

export const updateMovieFailure = createAction(
  '[Movies/API] Update Movie Failure',
  props<{ error: any }>()
);
