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

  @Input() playlists: neosonic.Playlist[];

  public drop(
    event: CdkDragDrop<neosonic.Song[]>,
    playlist: neosonic.Playlist,
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
