import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {AlbumsComponent} from './components/albums/albums.component';
import {AlbumViewerComponent} from './components/viewers/album/album-viewer.component';
import {PlaylistViewerComponent} from './components/viewers/playlist/playlist-viewer.component';

const routes: Routes = [
  {
    path: 'playlists/:id',
    component: PlaylistViewerComponent,
  },
  {
    path: 'albums',
    component: AlbumsComponent,
  },
  {
    path: 'album/:id',
    component: AlbumViewerComponent,
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
