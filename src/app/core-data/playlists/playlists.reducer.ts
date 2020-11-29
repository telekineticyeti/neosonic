import {Action, createReducer, on} from '@ngrx/store';
import {PlaylistActions} from './playlists.actions';

import {EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';

export interface IPlaylistsState extends EntityState<airsonic.Playlist> {
  selectedId: string | null;
}

export const adapter: EntityAdapter<airsonic.Playlist> = createEntityAdapter<airsonic.Playlist>(
  {
    selectId: (playlist: airsonic.Playlist): string => playlist.id,
  },
);

const initialState: IPlaylistsState = adapter.getInitialState({
  selectedId: null,
});

const playlistsReducer = createReducer(
  initialState,
  on(PlaylistActions.getSuccess, (state, {playlists}) =>
    adapter.setAll(playlists, state),
  ),
);

export function PlaylistsReducer(
  state: IPlaylistsState | undefined,
  action: Action,
) {
  return playlistsReducer(state, action);
}

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const getSelectors = {
  ids: selectIds,
  entities: selectEntities,
  all: selectAll,
  total: selectTotal,
  selectedId: (state: IPlaylistsState) => state.selectedId,
};
