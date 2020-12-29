import {Component} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {take} from 'rxjs/operators';
import {PlaylistsFacade} from 'src/app/core-data/playlists/playlists.facade';
import {PlaylistEditDialogComponent} from '../dialogs/playlist-edit/playlist-edit.component';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(
    public playlistsFacade: PlaylistsFacade,
    private dialog: MatDialog,
  ) {}

  public createPlaylist(): void {
    const createPlaylistDialog = new MatDialogConfig();

    const data: airsonicDialogModels.PlaylistData = {
      name: 'New Playlist',
      commentEnabled: false,
      focusName: true,
      title: 'Create New Playlist',
    };

    createPlaylistDialog.data = data;

    const dialogRef = this.dialog.open(
      PlaylistEditDialogComponent,
      createPlaylistDialog,
    );

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe(result => {
        if (result) {
          this.playlistsFacade.createPlaylist(result.name);
        }
      });
  }
}
