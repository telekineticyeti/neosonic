import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {PlaylistsFacade} from 'src/app/core-data/playlists/playlists.facade';

@Component({
  selector: 'sidebar-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
})
export class PlaylistsComponent {
  constructor(
    private router: Router,
    private playlistsFacade: PlaylistsFacade,
  ) {}

  @Input() playlists: airsonic.Playlist[];

  public drop(
    event: CdkDragDrop<airsonic.Song>,
    playlist: airsonic.Playlist,
  ): void {
    this.playlistsFacade.updatePlaylist({
      playlistId: playlist.id,
      songIdsToAdd: [event.previousContainer.data[event.previousIndex].id],
    });
  }

  public openPlaylist(id: string[]): void {
    this.router.navigate(['playlists', id]);
  }
}
