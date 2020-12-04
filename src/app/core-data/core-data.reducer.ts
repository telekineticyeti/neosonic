import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {IPlaylistsState, PlaylistsReducer} from './playlists/playlists.reducer';
import {ISongsState, SongsReducer} from './songs/songs.reducer';

export interface State {
  playlists: IPlaylistsState;
  songs: ISongsState;
}

export const reducers: ActionReducerMap<State> = {
  playlists: PlaylistsReducer,
  songs: SongsReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
