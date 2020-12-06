import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {RouterStateSerializer} from '@ngrx/router-store';
import {environment} from '../../environments/environment';
import {reducers, metaReducers} from './core-data.reducer';
import {PlaylistsEffects} from './playlists/playlists.effects';
import {PlaylistsFacade} from './playlists/playlists.facade';
import {PlaylistsService} from './playlists/playlists.service';
import {SongsFacade} from './songs/songs.facade';
import {RouterFacade} from './router/router.facade';
import {RouterSerializer} from './router/router.serializer.class';
import {routerInitialState} from './router/router.reducer';
import {SongEffects} from './songs/songs.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      initialState: routerInitialState,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([PlaylistsEffects, SongEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    PlaylistsService,
    PlaylistsFacade,
    SongsFacade,
    RouterFacade,
    {provide: RouterStateSerializer, useClass: RouterSerializer},
  ],
})
export class CoreDataModule {}
