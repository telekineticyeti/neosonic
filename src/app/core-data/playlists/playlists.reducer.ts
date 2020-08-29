import { Action, createReducer, on } from '@ngrx/store';
import { PlaylistActions } from '../actions';

const initialState: PlaylistsState = {
  playlists: [],
};

const playlistsReducer = createReducer(
  initialState,
  on(PlaylistActions.getPlaylistsSuccess, (state, { playlists }) => ({
    ...state,
    playlists,
  }))
);

export function PlaylistsReducer(
  state: PlaylistsState | undefined,
  action: Action
) {
  return playlistsReducer(state, action);
}

export interface PlaylistsState {
  playlists: airsonic.Playlist[];
}
