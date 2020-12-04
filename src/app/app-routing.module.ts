import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListPlaylistsComponent} from './components/list-playlists/list-playlists.component';
import {PlaylistViewComponent} from './components/playlist-view/playlist-view.component';

const routes: Routes = [
  {
    path: 'playlists',
    component: ListPlaylistsComponent,
  },
  {
    path: 'playlists/:id',
    component: PlaylistViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
