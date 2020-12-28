import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../core-data.reducer';
import {PlaylistActions} from './playlists.actions';
import {PlaylistsSelectors} from './playlists.selectors';

@Injectable()
export class PlaylistsFacade {
  constructor(private store: Store<State>) {}

  public allPlaylistsEntities$ = this.store.select(PlaylistsSelectors.entities);
  public keys$ = this.store.select(PlaylistsSelectors.keys);
  public playlistById$ = this.store.select(PlaylistsSelectors.playlistById);
  public allPlaylists$ = this.store.select(PlaylistsSelectors.selectAll);
  public playlistInfo$ = this.store.select(PlaylistsSelectors.playlistInfo);

  public getAllPlaylists(): void {
    this.store.dispatch(PlaylistActions.getAll());
  }

  public getPlaylist(id: string): void {
    this.store.dispatch(PlaylistActions.get({id}));
  }

  public updatePlaylist(payload: airsonic.PlaylistUpdateRequest): void {
    this.store.dispatch(PlaylistActions.update({payload}));
  }
}
