import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {take} from 'rxjs/operators';
import {PlaylistsFacade} from 'src/app/core-data/playlists/playlists.facade';
import {SongsFacade} from 'src/app/core-data/songs/songs.facade';

@Component({
  selector: 'sidebar-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
})
export class PlaylistsComponent {
  constructor(
    private router: Router,
    private playlistsFacade: PlaylistsFacade,
    private songsFacade: SongsFacade,
  ) {}

  @Input() playlists: airsonic.Playlist[];

  public drop(
    event: CdkDragDrop<airsonic.Song[]>,
    playlist: airsonic.Playlist,
  ): void {
    const droppedItem = event.previousContainer.data[event.previousIndex];
    const songsToAdd = event.previousContainer.data.filter(s => s.selected);

    if (!droppedItem.selected) {
      songsToAdd.push(droppedItem);
    }

    this.playlistsFacade.updatePlaylist({
      playlistId: playlist.id,
      songIdsToAdd: songsToAdd.map(s => s.id),
    });
  }

  public openPlaylist(id: string[]): void {
    this.router.navigate(['playlists', id]);
  }
}
