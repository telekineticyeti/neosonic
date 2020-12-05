import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {CoreDataModule} from './core-data/core-data.module';
import {MaterialModule} from './modules/material.module';

import {AppComponent} from './app.component';
import {ListPlaylistsComponent} from './components/list-playlists/list-playlists.component';
import {ListSongsComponent} from './components/list-songs/list-songs.component';
import {PlaylistViewComponent} from './components/playlist-view/playlist-view.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlaylistsComponent } from './components/sidebar/playlists/playlists.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPlaylistsComponent,
    ListSongsComponent,
    PlaylistViewComponent,
    SidebarComponent,
    PlaylistsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    CoreDataModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
