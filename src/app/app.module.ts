import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreDataModule } from './core-data/core-data.module';
import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';
import { ListPlaylistsComponent } from './components/list-playlists/list-playlists.component';
import { ListTracksComponent } from './components/list-tracks/list-tracks.component';

@NgModule({
  declarations: [AppComponent, ListPlaylistsComponent, ListTracksComponent],
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
