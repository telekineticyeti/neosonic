import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromReducer from './albums.reducer';

const selectSongState = createFeatureSelector<fromReducer.IAlbumsState>(
  'albums',
);

const entities = createSelector(selectSongState, fromReducer.selectEntities);
const ids = createSelector(selectSongState, fromReducer.selectIds);
const all = createSelector(selectSongState, fromReducer.selectAll);
const total = createSelector(selectSongState, fromReducer.selectTotal);

const byId = createSelector(selectSongState, getSelectors => (id: string) =>
  getSelectors.entities[id],
);

const albumDetails = createSelector(
  selectSongState,
  (state: fromReducer.IAlbumsState) => state.albumDetails,
);

export const AlbumSelectors = {entities, ids, all, total, byId, albumDetails};
