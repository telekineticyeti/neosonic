import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IArtistState} from './artists.reducer';
import * as fromAlbumReducer from './artists-albums.entity';

// Primary Feature Selector
const selectArtist = createFeatureSelector<IArtistState>('artist');

// Sub-State Selectors
const selectAlbums = createSelector(selectArtist, state => state.albums);

const selectedArtist = createSelector(selectArtist, state => state.selected);
const info = createSelector(selectArtist, state => state.info);
const albums = createSelector(selectAlbums, fromAlbumReducer.selectAll);

export const ArtistSelectors = {
  selectedArtist,
  info,
  albums,
};
