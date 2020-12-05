import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material.module';
import {RoutingModule} from './app-routing.module';
import {CoreDataModule} from './core-data/core-data.module';

import {AppComponent} from './app.component';
import {ListPlaylistsComponent} from './components/list-playlists/list-playlists.component';
import {ListSongsComponent} from './components/list-songs/list-songs.component';
import {PlaylistViewComponent} from './components/playlist-view/playlist-view.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {PlaylistsComponent} from './components/sidebar/playlists/playlists.component';
import {HeaderBarComponent} from './components/shared/header-bar/header-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPlaylistsComponent,
    ListSongsComponent,
    PlaylistViewComponent,
    SidebarComponent,
    PlaylistsComponent,
    HeaderBarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    MaterialModule,
    CoreDataModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
