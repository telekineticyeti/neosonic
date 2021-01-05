import {Action, createReducer, on} from '@ngrx/store';
import {PlaylistActions} from './playlists.actions';

import {IPlaylistListsState, playlistAdapter} from './playlists-lists.entity';
import {IPlaylistSongsState, songAdapter} from './playlists-songs.entity';

export interface IPlaylistsState {
  selectedPlaylist?: neosonic.PlaylistDetails;
  selectedPlaylistSongs: IPlaylistSongsState;
  playlists: IPlaylistListsState;
}

export const initialState: IPlaylistsState = {
  selectedPlaylistSongs: songAdapter.getInitialState({selectedId: null}),
  playlists: playlistAdapter.getInitialState({selectedId: null}),
};

const reducer = createReducer(
  initialState,
  on(PlaylistActions.getAllSuccess, (state, {playlists}) => ({
    ...state,
    playlists: playlistAdapter.setAll(playlists, state.playlists),
  })),
  on(PlaylistActions.getSuccess, (state, {playlist}) => ({
    ...state,
    selectedPlaylist: playlist,
    selectedPlaylistSongs: songAdapter.setAll(
      playlist.songs,
      state.selectedPlaylistSongs,
    ),
  })),
  on(PlaylistActions.deleteSuccess, (state, {id}) => ({
    ...state,
    playlists: playlistAdapter.removeOne(id, state.playlists),
  })),
);

export function PlaylistsReducer(
  state: IPlaylistsState | undefined,
  action: Action,
) {
  return reducer(state, action);
}
