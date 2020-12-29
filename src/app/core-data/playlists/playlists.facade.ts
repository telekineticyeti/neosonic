import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../core-data.reducer';
import {PlaylistActions} from './playlists.actions';
import {PlaylistsSelectors} from './playlists.selectors';

@Injectable()
export class PlaylistsFacade {
  constructor(private store: Store<State>) {}

  public playlistById$ = this.store.select(PlaylistsSelectors.listById);
  public allPlaylists$ = this.store.select(PlaylistsSelectors.allLists);
  public totalPlaylists$ = this.store.select(PlaylistsSelectors.totalLists);

  // Selected Playlist
  public playlistInfo$ = this.store.select(PlaylistsSelectors.playlistInfo);
  public allSongs$ = this.store.select(PlaylistsSelectors.allSongs);

  public getAllPlaylists(): void {
    this.store.dispatch(PlaylistActions.getAll());
  }

  public getPlaylist(id: string): void {
    this.store.dispatch(PlaylistActions.get({id}));
  }

  public updatePlaylist(payload: airsonic.PlaylistUpdateRequest): void {
    this.store.dispatch(PlaylistActions.update({payload}));
  }

  public deletePlaylist(id: string): void {
    this.store.dispatch(PlaylistActions.delete({id}));
  }
}
