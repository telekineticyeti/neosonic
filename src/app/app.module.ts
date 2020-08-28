import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPlaylistsComponent } from './components/list-playlists/list-playlists.component';
import { MaterialModule } from './modules/material/material.module';

@NgModule({
  declarations: [AppComponent, ListPlaylistsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
