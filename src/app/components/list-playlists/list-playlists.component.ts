import { Component, OnInit } from '@angular/core';
import { PlaylistsFacade } from 'src/app/core-data/playlists/playlists.facade.service';

@Component({
  selector: 'list-playlists',
  templateUrl: './list-playlists.component.html',
  styleUrls: ['./list-playlists.component.scss'],
})
export class ListPlaylistsComponent implements OnInit {
  constructor(public playlistsService: PlaylistsFacade) {}

  ngOnInit(): void {
    this.playlistsService.getPlaylists();
  }
}
