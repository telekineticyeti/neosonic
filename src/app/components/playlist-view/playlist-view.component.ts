import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {PlaylistsFacade} from 'src/app/core-data/playlists/playlists.facade';
import {RouterFacade} from 'src/app/core-data/router/router.facade';
import {SongsFacade} from 'src/app/core-data/songs/songs.facade';

@Component({
  selector: 'playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.scss'],
})
export class PlaylistViewComponent implements OnInit, OnDestroy {
  constructor(
    private playlistsFacade: PlaylistsFacade,
    private routerFacade: RouterFacade,
    public songsFacade: SongsFacade,
  ) {}

  private subscriptions: Subscription[] = [];

  public ngOnInit(): void {
    const playlistId$ = this.routerFacade.params$.subscribe(p => {
      if (!p.id) return;
      this.playlistsFacade.getPlaylist(p.id);
    });

    this.subscriptions.push(playlistId$);
  }

  public ngOnDestroy(): void {
    this.songsFacade.emptySongs();
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  public songClick(e: airsonicEvents.SongClick): void {
    this.songsFacade.click(e);
  }
}
