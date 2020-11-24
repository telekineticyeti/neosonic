import {createSelector} from '@ngrx/store';
import {State} from '../core-data.reducer';
import {PlaylistsState} from './playlists.reducer';

const selectPlaylists = (state: State) => state.playlists;

export const PlaylistsSelectors = {
  playlists: createSelector(selectPlaylists, (state: PlaylistsState) => state.playlists),
};
