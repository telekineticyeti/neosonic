import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromReducer from './songs.reducer';

const selectSongState = createFeatureSelector<fromReducer.ISongsState>('songs');

const entities = createSelector(selectSongState, fromReducer.selectEntities);
const ids = createSelector(selectSongState, fromReducer.selectIds);
const all = createSelector(selectSongState, fromReducer.selectAll);
const total = createSelector(selectSongState, fromReducer.selectTotal);

const allSelected = createSelector(all, songs => songs.filter(s => s.selected));
const byId = createSelector(selectSongState, getSelectors => (id: string) =>
  getSelectors.entities[id],
);

export const SongSelectors = {entities, ids, all, total, allSelected, byId};
