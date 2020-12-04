import {createSelector} from '@ngrx/store';
import {State} from '../core-data.reducer';
import {getSelectors} from './songs.reducer';

const selectSongs = (state: State) => state.songs;

export const SongSelectors = {
  keys: createSelector(selectSongs, getSelectors.ids),
  entities: createSelector(selectSongs, getSelectors.entities),
  total: createSelector(selectSongs, getSelectors.total),
  selectedId: createSelector(selectSongs, getSelectors.selectedId),
  selectAll: createSelector(selectSongs, getSelectors.all),
  SongById: createSelector(selectSongs, getSelectors => (id: string) =>
    getSelectors.entities[id],
  ),
};
