import {createSelector} from '@ngrx/store';
import {State} from '../core-data.reducer';
import {getSelectors} from './playlists.reducer';

const selectPlaylists = (state: State) => state.playlists;

export const PlaylistsSelectors = {
  keys: createSelector(selectPlaylists, getSelectors.ids),
  entities: createSelector(selectPlaylists, getSelectors.entities),
  total: createSelector(selectPlaylists, getSelectors.total),
  selectedId: createSelector(selectPlaylists, getSelectors.selectedId),
  selectAll: createSelector(selectPlaylists, getSelectors.all),
  playlistById: createSelector(selectPlaylists, getSelectors => (id: string) =>
    getSelectors.entities[id],
  ),
  playlistInfo: createSelector(selectPlaylists, state => state.playlistDetails),
};
