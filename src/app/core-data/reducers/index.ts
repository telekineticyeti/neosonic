import { ActionReducerMap, MetaReducer, createSelector } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {
  PlaylistsState,
  PlaylistsReducer,
} from '../playlists/playlists.reducer';

export interface State {
  playlists: PlaylistsState;
}

export const reducers: ActionReducerMap<State> = {
  playlists: PlaylistsReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

/**
 * Selector Definitions
 */
export const selectPlaylists = (state: State) => state.playlists;
export const PlaylistsSelectors = {
  playlists: createSelector(
    selectPlaylists,
    (state: PlaylistsState) => state.playlists
  ),
};
