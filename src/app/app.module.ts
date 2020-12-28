import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material.module';
import {RoutingModule} from './routing.module';
import {CoreDataModule} from './core-data/core-data.module';

import {AppComponent} from './app.component';
import {SearchComponent} from './components/search/search.component';
import {HeaderBarComponent} from './components/shared/header-bar/header-bar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {PlaylistsComponent} from './components/sidebar/playlists/playlists.component';
import {BrowseComponent} from './components/sidebar/browse/browse.component';
import {SidebarSearchComponent} from './components/sidebar/search/search.component';
import {AlbumsListerComponent} from './components/listers/albums/albums-lister.component';
import {SongsListerComponent} from './components/listers/songs/songs-lister.component';
import {ArtistsListerComponent} from './components/listers/artists/artists-lister.component';

import {AlbumViewerComponent} from './components/viewers/album/album-viewer.component';
import {PlaylistViewerComponent} from './components/viewers/playlist/playlist-viewer.component';
import {AlbumsComponent} from './components/albums/albums.component';
import {CoverArtDirective} from './directives/cover-art.directive';
import {DurationPipe} from './pipes/duration.pipe';
import {SongCountPipe} from './pipes/song-count.pipe';
import {UtilityService} from './services/utlity.service';
import {ArtistViewerComponent} from './components/viewers/artist/artist-viewer.component';
import {AutoUnsubscribeAdapter} from './components/shared/adapters/auto-unsubscribe.adapter';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    PlaylistViewerComponent,
    SidebarComponent,
    PlaylistsComponent,
    HeaderBarComponent,
    BrowseComponent,
    SidebarSearchComponent,
    AlbumsListerComponent,
    ArtistsListerComponent,
    SongsListerComponent,
    AlbumViewerComponent,
    CoverArtDirective,
    DurationPipe,
    SongCountPipe,
    SearchComponent,
    ArtistViewerComponent,
    AutoUnsubscribeAdapter,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    MaterialModule,
    CoreDataModule,
  ],
  bootstrap: [AppComponent],
  providers: [UtilityService],
})
export class AppModule {}
