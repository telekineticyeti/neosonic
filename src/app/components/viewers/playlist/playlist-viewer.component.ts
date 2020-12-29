import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {PlaylistsFacade} from 'src/app/core-data/playlists/playlists.facade';
import {RouterFacade} from 'src/app/core-data/router/router.facade';
import {SongsFacade} from 'src/app/core-data/songs/songs.facade';
import {AutoUnsubscribeAdapter} from '../../shared/adapters/auto-unsubscribe.adapter';
import {PlaylistEditDialogComponent} from 'src/app/components/dialogs/playlist-edit/playlist-edit.component';
import {take} from 'rxjs/operators';

@Component({
  selector: 'playlist-viewer',
  templateUrl: './playlist-viewer.component.html',
  styleUrls: ['./playlist-viewer.component.scss'],
})
export class PlaylistViewerComponent
  extends AutoUnsubscribeAdapter
  implements OnInit, OnDestroy {
  constructor(
    public songsFacade: SongsFacade,
    public playlistsFacade: PlaylistsFacade,
    private routerFacade: RouterFacade,
    private router: Router,
    private dialog: MatDialog,
  ) {
    super();
  }

  public playlistId: string;

  public ngOnInit(): void {
    const playlistId$ = this.routerFacade.params$.subscribe(p => {
      if (!p.playlistId) return;
      this.playlistsFacade.getPlaylist(p.playlistId);
      this.playlistId = p.playlistId;
    });

    this.subscribers.push(playlistId$);
  }

  public ngOnDestroy(): void {
    this.unsubscribeFromAll();
  }

  public handleSongClick(e: airsonicEvents.SongClick): void {
    this.songsFacade.click(e);
  }

  public handleArtistClick(event: airsonicEvents.ArtistClick): void {
    this.router.navigateByUrl(`/artist/${event.artist}`);
  }

  public handleAlbumClick(event: airsonicEvents.AlbumClick): void {
    this.router.navigateByUrl(`/album/${event.album}`);
  }

  public handleFavClick(event: any): void {
    console.log(event);
  }

  public handleRemoveClick(event: airsonicEvents.RemoveClick): void {
    const removePositionIndex = event.songList.findIndex(
      e => e.id === event.song.id,
    );
    this.playlistsFacade.updatePlaylist({
      playlistId: this.playlistId,
      songIndexesToRemove: [removePositionIndex.toString()],
    });
  }

  public deletePlaylist(id: string, name: string): void {
    console.log(id, name);
  }

  public editPlaylist(name: string, comment: string): void {
    const editDialog = new MatDialogConfig();

    const data: airsonicDialogModels.PlaylistData = {
      name,
      comment,
      title: 'Edit Playlist',
    };

    editDialog.data = data;

    const dialogRef = this.dialog.open(PlaylistEditDialogComponent, editDialog);

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe(result => {
        if (result) {
          this.playlistsFacade.updatePlaylist({
            playlistId: this.playlistId,
            name: result.name,
            comment: result.comment,
          });
        }
      });
  }
}
