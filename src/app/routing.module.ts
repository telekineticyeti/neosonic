import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {AlbumsComponent} from './components/albums/albums.component';
import {SearchComponent} from './components/search/search.component';
import {AlbumViewerComponent} from './components/viewers/album/album-viewer.component';
import {ArtistViewerComponent} from './components/viewers/artist/artist-viewer.component';
import {PlaylistViewerComponent} from './components/viewers/playlist/playlist-viewer.component';
import {UserGuardService} from './services/guards/user-guard.service';

const routes: Routes = [
  {
    path: 'playlists/:playlistId',
    component: PlaylistViewerComponent,
    canActivate: [UserGuardService],
  },
  {
    path: 'albums',
    component: AlbumsComponent,
    canActivate: [UserGuardService],
  },
  {
    path: 'albums/:query',
    component: AlbumsComponent,
    canActivate: [UserGuardService],
  },
  {
    path: 'album/:albumId',
    component: AlbumViewerComponent,
    canActivate: [UserGuardService],
  },
  {
    path: 'artist/:artistId',
    component: ArtistViewerComponent,
    canActivate: [UserGuardService],
  },
  {
    path: 'search/:query',
    component: SearchComponent,
    canActivate: [UserGuardService],
  },
  {
    path: '**',
    redirectTo: 'albums',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
    StoreRouterConnectingModule.forRoot(),
  ],
  exports: [RouterModule],
})
export class RoutingModule {}
