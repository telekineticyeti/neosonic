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
import {SearchEffects} from './search/search.effects';
import {SearchService} from './search/search.service';
import {SearchFacade} from './search/search.facade';
import {ArtistsFacade} from './artists/artists.facade';
import {ArtistService} from './artists/artists.service';
import {ArtistEffects} from './artists/artists.effects';
import {PersistService} from '../services/persist.service';
import {UserEffects} from './user/user.effects';
import {UserFacade} from './user/user.facade';

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
    EffectsModule.forRoot([
      PlaylistsEffects,
      SongEffects,
      AlbumEffects,
      SearchEffects,
      ArtistEffects,
      UserEffects,
    ]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    PlaylistsService,
    PlaylistsFacade,
    AlbumsService,
    SongsFacade,
    AlbumsFacade,
    RouterFacade,
    SearchService,
    SearchFacade,
    ArtistsFacade,
    ArtistService,
    PersistService,
    UserFacade,
    {provide: RouterStateSerializer, useClass: RouterSerializer},
  ],
})
export class CoreDataModule {}
