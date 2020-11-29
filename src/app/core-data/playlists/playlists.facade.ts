import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../core-data.reducer';
import {PlaylistActions} from './playlists.actions';
import {PlaylistsSelectors} from './playlists.selectors';

@Injectable()
export class PlaylistsFacade {
  constructor(private store: Store<State>) {}

  public playlists$ = this.store.select(PlaylistsSelectors.entities);
  public keys$ = this.store.select(PlaylistsSelectors.keys);
  public playlistById$ = this.store.select(PlaylistsSelectors.playlistById);

  public getPlaylists(): void {
    this.store.dispatch(PlaylistActions.get());
  }
}
