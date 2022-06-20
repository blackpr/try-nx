import { Injectable } from '@angular/core';
import { Store, Action, ActionsSubject } from '@ngrx/store';
import { Movie } from '@tim/api-interfaces';
import { filter } from 'rxjs/operators';

import * as MoviesActions from './movies.actions';
import * as MoviesFeature from './movies.reducer';
import * as MoviesSelectors from './movies.selectors';

@Injectable()
export class MoviesFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.select(MoviesSelectors.selectMoviesLoaded);
  allMovies$ = this.store.select(MoviesSelectors.selectAllMovies);
  selectedMovies$ = this.store.select(MoviesSelectors.getSelected);

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === MoviesActions.updateMovie({} as any).type
    )
  );

  constructor(
    private readonly store: Store,
    private actions$: ActionsSubject
  ) {}

  loadMovies() {
    this.dispatch(MoviesActions.loadMovies());
  }

  loadMovie(movieId: string) {
    this.dispatch(MoviesActions.loadMovie({ movieId }));
  }

  updateMovie(movie: Movie) {
    this.dispatch(MoviesActions.updateMovie({ movie }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(MoviesActions.init());
  }
}
