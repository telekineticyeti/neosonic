import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PlaylistsFacade} from 'src/app/core-data/playlists/playlists.facade';
import {RouterFacade} from 'src/app/core-data/router/router.facade';
import {SongsFacade} from 'src/app/core-data/songs/songs.facade';
import {AutoUnsubscribeAdapter} from '../../shared/adapters/auto-unsubscribe.adapter';

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
}
