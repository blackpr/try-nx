import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as MoviesActions from './movies.actions';
import * as MoviesFeature from './movies.reducer';
import * as MoviesSelectors from './movies.selectors';

@Injectable()
export class MoviesFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(MoviesSelectors.getMoviesLoaded));
  allMovies$ = this.store.pipe(select(MoviesSelectors.getAllMovies));
  selectedMovies$ = this.store.pipe(select(MoviesSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(MoviesActions.init());
  }
}
