import {Component, OnDestroy, OnInit} from '@angular/core';
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
    private playlistsFacade: PlaylistsFacade,
    private routerFacade: RouterFacade,
    public songsFacade: SongsFacade,
  ) {
    super();
  }

  public ngOnInit(): void {
    const playlistId$ = this.routerFacade.params$.subscribe(p => {
      if (!p.playlistId) return;
      this.playlistsFacade.getPlaylist(p.playlistId);
    });

    this.subscribers.push(playlistId$);
  }

  public ngOnDestroy(): void {
    this.unsubscribeFromAll();
    this.subscribers.forEach(s => s.unsubscribe());
  }

  public songClick(e: airsonicEvents.SongClick): void {
    this.songsFacade.click(e);
  }
}
