import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, PlaylistsSelectors } from '../reducers';
import { Observable } from 'rxjs';
import { PlaylistActions } from '../actions';

@Injectable()
export class PlaylistsFacade {
  public playlists$: Observable<airsonic.Playlist[]>;

  constructor(private store: Store<State>) {
    this.playlists$ = store.select(PlaylistsSelectors.playlists);
  }

  public getPlaylists(): void {
    this.store.dispatch(PlaylistActions.getPlaylists());
  }
}
