import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {RouterStateSerializer} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';
import {AlbumEffects} from './albums/albums.effects';
import {AlbumsFacade} from './albums/albums.facade';
import {AlbumsService} from './albums/albums.service';
import {metaReducers, reducers} from './core-data.reducer';
import {PlaylistsEffects} from './playlists/playlists.effects';
import {PlaylistsFacade} from './playlists/playlists.facade';
import {PlaylistsService} from './playlists/playlists.service';
import {RouterFacade} from './router/router.facade';
import {routerInitialState} from './router/router.reducer';
import {RouterSerializer} from './router/router.serializer.class';
import {SongEffects} from './songs/songs.effects';
import {SongsFacade} from './songs/songs.facade';

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
    EffectsModule.forRoot([PlaylistsEffects, SongEffects, AlbumEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    PlaylistsService,
    PlaylistsFacade,
    AlbumsService,
    SongsFacade,
    AlbumsFacade,
    RouterFacade,
    {provide: RouterStateSerializer, useClass: RouterSerializer},
  ],
})
export class CoreDataModule {}
