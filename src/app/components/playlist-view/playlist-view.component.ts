import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {take} from 'rxjs/operators';
import {PlaylistsFacade} from 'src/app/core-data/playlists/playlists.facade';
import {SongsFacade} from 'src/app/core-data/songs/songs.facade';

@Component({
  selector: 'playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.scss'],
})
export class PlaylistViewComponent implements OnInit, OnDestroy {
  constructor(
    private playlistsFacade: PlaylistsFacade,
    private activatedRoute: ActivatedRoute,
    public songsFacade: SongsFacade,
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(take(1)).subscribe(params => {
      if (params.id) {
        this.playlistsFacade.getPlaylist(params.id);
      }
    });
  }

  public ngOnDestroy(): void {
    this.songsFacade.emptySongs();
  }
}
