import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import * as fromMovies from './movies/movies.reducer';
import { MoviesEffects } from './movies/movies.effects';
import { MoviesFacade } from './movies/movies.facade';

export const coreStateRoutes: Route[] = [];
const STORE_NAME = 'tim-store';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, name: STORE_NAME }),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forFeature(fromMovies.MOVIES_FEATURE_KEY, fromMovies.reducer),
    EffectsModule.forFeature([MoviesEffects]),
  ],
  providers: [MoviesFacade],
})
export class CoreStateModule {}
