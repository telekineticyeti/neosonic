import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ISearchState} from './search.reducer';
import * as fromAlbumReducer from './search-albums.entity';
import * as fromArtistReducer from './search-artists.entity';
import * as fromSongsReducer from './search-songs.entity';

// Primary Feature Selector
const selectSearch = createFeatureSelector<ISearchState>('search');

// Sub-State Selectors
const selectAlbums = createSelector(selectSearch, state => state.albums);
const selectArtists = createSelector(selectSearch, state => state.artists);
const selectSongs = createSelector(selectSearch, state => state.songs);

// Album Entity Selectors
const allAlbums = createSelector(selectAlbums, fromAlbumReducer.selectAll);
const totalAlbums = createSelector(selectAlbums, fromAlbumReducer.selectTotal);
const albumIds = createSelector(selectAlbums, fromAlbumReducer.selectIds);
const albumById = createSelector(selectAlbums, getSelectors => (id: string) =>
  getSelectors.entities[id],
);

// Artist Entity Selectors
const allArtists = createSelector(selectArtists, fromArtistReducer.selectAll);
const totalArtists = createSelector(
  selectArtists,
  fromArtistReducer.selectTotal,
);
const artistIds = createSelector(selectArtists, fromArtistReducer.selectIds);
const artistById = createSelector(selectArtists, getSelectors => (id: string) =>
  getSelectors.entities[id],
);

// Song Entity Selectors
const allSongs = createSelector(selectSongs, fromSongsReducer.selectAll);
const totalSongs = createSelector(selectSongs, fromSongsReducer.selectTotal);
const songIds = createSelector(selectSongs, fromSongsReducer.selectIds);
const songsById = createSelector(selectSongs, getSelectors => (id: string) =>
  getSelectors.entities[id],
);

export const SearchSelectors = {
  allAlbums,
  totalAlbums,
  albumIds,
  albumById,
  allArtists,
  totalArtists,
  artistIds,
  artistById,
  allSongs,
  totalSongs,
  songIds,
  songsById,
};
