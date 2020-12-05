import {Component, OnInit} from '@angular/core';
import {PlaylistsFacade} from './core-data/playlists/playlists.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private playlistsFacade: PlaylistsFacade) {}

  public ngOnInit(): void {
    // TODO Add to eventual initializer
    this.playlistsFacade.getAllPlaylists();
  }
}
