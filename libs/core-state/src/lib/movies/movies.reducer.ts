import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { Movie } from '@tim/api-interfaces';

import * as MoviesActions from './movies.actions';
import { MoviesEntity } from './movies.models';

export const MOVIES_FEATURE_KEY = 'movies';

export interface State extends EntityState<Movie> {
  selectedId?: string | number; // which Movies record has been selected
  loaded: boolean; // has the Movies list been loaded
  error?: string | null; // last known error (if any)
}

export interface MoviesPartialState {
  readonly [MOVIES_FEATURE_KEY]: State;
}

export const moviesAdapter: EntityAdapter<Movie> = createEntityAdapter<Movie>();

export const initialState: State = moviesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const onFailure = (state: State, { error }: any): State => ({
  ...state,
  error,
});

const moviesReducer = createReducer(
  initialState,
  on(
    MoviesActions.init,
    (state): State => ({ ...state, loaded: false, error: null })
  ),

  // load movies
  on(
    MoviesActions.loadMovies,
    (state): State => ({
      ...state,
      loaded: false,
      error: null,
    })
  ),

  on(MoviesActions.loadMoviesSuccess, (state, { movies }) =>
    moviesAdapter.setAll(movies, { ...state, loaded: true })
  ),
  on(MoviesActions.loadMoviesFailure, onFailure),

  // load movie
  on(
    MoviesActions.loadMovie,
    (state): State => ({
      ...state,
      loaded: false,
      error: null,
    })
  ),
  on(MoviesActions.loadMovieSuccess, (state, { movie }) =>
    moviesAdapter.upsertOne(movie, { ...state, loaded: true })
  ),
  on(MoviesActions.loadMovieFailure, onFailure)
);

export function reducer(state: State | undefined, action: Action) {
  return moviesReducer(state, action);
}
