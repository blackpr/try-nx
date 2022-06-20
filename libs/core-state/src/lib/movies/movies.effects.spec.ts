import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as MoviesActions from './movies.actions';
import { MoviesEffects } from './movies.effects';

describe('MoviesEffects', () => {
  let actions: Observable<Action>;
  let effects: MoviesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        MoviesEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(MoviesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: MoviesActions.init() });

      const expected = hot('-a-|', {
        a: MoviesActions.loadMoviesSuccess({ movies: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
