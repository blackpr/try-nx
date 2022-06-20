import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Movie } from '@tim/api-interfaces';
import { MOVIES_FEATURE_KEY, State, moviesAdapter } from './movies.reducer';

// Lookup the 'Movies' feature state managed by NgRx
export const selectMoviesState =
  createFeatureSelector<State>(MOVIES_FEATURE_KEY);

const { selectAll, selectEntities } = moviesAdapter.getSelectors();

export const selectMoviesLoaded = createSelector(
  selectMoviesState,
  (state: State) => state.loaded
);

export const selectMoviesError = createSelector(
  selectMoviesState,
  (state: State) => state.error
);

export const selectAllMovies = createSelector(
  selectMoviesState,
  (state: State) => selectAll(state)
);

export const selectMoviesEntities = createSelector(
  selectMoviesState,
  (state: State) => selectEntities(state)
);

// eslint-disable-next-line ngrx/prefix-selectors-with-select
export const getSelectedId = createSelector(
  selectMoviesState,
  (state: State) => state.selectedId
);

const emptyMovie: Movie = {
  id: '',
  Title: '',
  Year: '',
  Genre: '',
  Director: '',
  Poster: '',
  imdbRating: '',
};

// eslint-disable-next-line ngrx/prefix-selectors-with-select
export const getSelected = createSelector(
  selectMoviesEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : emptyMovie)
);
