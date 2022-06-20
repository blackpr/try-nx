import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as MoviesActions from './movies.actions';
import * as MoviesFeature from './movies.reducer';

@Injectable()
export class MoviesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return MoviesActions.loadMoviesSuccess({ movies: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return MoviesActions.loadMoviesFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
