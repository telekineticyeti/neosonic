import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {IPlaylistsState, PlaylistsReducer} from './playlists/playlists.reducer';

export interface State {
  playlists: IPlaylistsState;
}

export const reducers: ActionReducerMap<State> = {
  playlists: PlaylistsReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
