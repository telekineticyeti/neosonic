import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {AlbumsComponent} from './components/albums/albums.component';
import {SearchComponent} from './components/search/search.component';
import {AlbumViewerComponent} from './components/viewers/album/album-viewer.component';
import {PlaylistViewerComponent} from './components/viewers/playlist/playlist-viewer.component';

const routes: Routes = [
  {
    path: 'playlists/:playlistId',
    component: PlaylistViewerComponent,
  },
  {
    path: 'albums',
    component: AlbumsComponent,
  },
  {
    path: 'album/:albumId',
    component: AlbumViewerComponent,
  },
  {
    path: 'search/:query',
    component: SearchComponent,
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
