import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { Movie } from '@tim/api-interfaces';
import { MoviesService } from '@tim/core-data';
import { map } from 'rxjs/operators';

import * as MoviesActions from './movies.actions';
import * as MoviesFeature from './movies.reducer';

@Injectable()
export class MoviesEffects {
  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActions.loadMovies),
      fetch({
        run: (action) =>
          this.moviesService
            .all()
            .pipe(
              map((movies: Movie[]) =>
                MoviesActions.loadMoviesSuccess({ movies })
              )
            ),
        onError: (action, error) => MoviesActions.loadMoviesFailure({ error }),
      })
    );
  });

  loadMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActions.loadMovie),
      fetch({
        run: (action) =>
          this.moviesService
            .find(action.movieId)
            .pipe(
              map((movie: Movie) => MoviesActions.loadMovieSuccess({ movie }))
            ),
        onError: (action, error) => MoviesActions.loadMovieFailure({ error }),
      })
    );
  });

  updateMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActions.updateMovie),
      pessimisticUpdate({
        run: (action) =>
          this.moviesService.update(action.movie).pipe(
            map((movie: Movie) => {
              return MoviesActions.updateMovieSuccess({ movie });
            })
          ),
        onError: (action, error) => MoviesActions.updateMovieFailure({ error }),
      })
    );
  });

  constructor(
    private readonly actions$: Actions,
    private moviesService: MoviesService
  ) {}
}
