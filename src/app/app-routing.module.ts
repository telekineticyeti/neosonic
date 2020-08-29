import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPlaylistsComponent } from './components/list-playlists/list-playlists.component';

const routes: Routes = [
  {
    path: 'playlists',
    component: ListPlaylistsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
