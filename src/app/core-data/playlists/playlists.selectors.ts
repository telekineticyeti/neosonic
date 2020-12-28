import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IPlaylistsState} from './playlists.reducer';
import * as fromSongReducer from './playlists-songs.entity';
import * as fromListReducer from './playlists-lists.entity';

// Primary Feature Selector
const selectPlaylists = createFeatureSelector<IPlaylistsState>('playlists');

// Sub-State Selectors
const selectSongs = createSelector(
  selectPlaylists,
  state => state.selectedPlaylistSongs,
);
const selectLists = createSelector(selectPlaylists, state => state.playlists);

// Song Selectors
const allSongs = createSelector(selectSongs, fromSongReducer.selectAll);
const totalSongs = createSelector(selectSongs, fromSongReducer.selectTotal);
const songIds = createSelector(selectSongs, fromSongReducer.selectIds);
const songById = createSelector(selectSongs, getSelectors => (id: string) =>
  getSelectors.entities[id],
);

// Playlist Selectors
const allLists = createSelector(selectLists, fromListReducer.selectAll);
const totalLists = createSelector(selectLists, fromListReducer.selectTotal);
const listIds = createSelector(selectLists, fromListReducer.selectIds);
const listById = createSelector(selectLists, getSelectors => (id: string) =>
  getSelectors.entities[id],
);

const playlistInfo = createSelector(
  selectPlaylists,
  state => state.selectedPlaylist,
);

export const PlaylistsSelectors = {
  allSongs,
  totalSongs,
  songIds,
  songById,
  allLists,
  totalLists,
  listIds,
  listById,
  playlistInfo,
};
